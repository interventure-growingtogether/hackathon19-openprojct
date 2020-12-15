<?php

namespace App\Http\Controllers;

use App\Comment;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CommentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Comment::create([
            'projectId' => $request->get('projectId'),
            'userId' => $request->get('userId') ,
            'content' => $request->get('content'),
        ]);
    }

    public function getComments(Request $request){
        return Comment::where([
            'projectId' => $request->get('projectId')
        ])->get();
    }
}
