<?php

namespace App\Http\Controllers;

use App\Models\Post;

class DeletePostController extends Controller
{
    public function __invoke(Post $post)
    {
        $post->delete();
        return response()->json(status:204);
    }
}
