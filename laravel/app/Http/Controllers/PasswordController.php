<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;

class PasswordController extends Controller
{

    public function index()
    {
        return Password::select('id', 'title', 'password', 'created_at')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'password' => 'required',
        ]);

        Password::create($request->all());
        return response()->json([
            'message' => 'Added successfully'
        ]);
    }

    public function show(Password $password)
    {
        return response()->json([
            'password' => $password
        ]);
    }


    public function update(Request $request, Password $password)
    {
        $password->update($request->all());
        return response()->json([
            'message' => 'Updated successfully'
        ]);
    }


    public function destroy(Password $password)
    {
        $password->delete();
        return response()->json([
            'message' => 'Deleted successfully'
        ]);
    }
}
