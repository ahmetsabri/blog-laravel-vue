<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePostRequest;
use App\Models\Post;

class CreatePostController extends Controller
{
    public function __invoke(CreatePostRequest $request)
    {
        Post::create($request->validated());

        return response()->json(['msg'=>'created successfully']);
    }
}
