<?php 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class UserController extends Controller {
    public function importProjects($request) 
    {
        $repos = $request->get('repos');

        foreach($repos as $repo) {
            $repo = \GitHub::repo()->show($user->nickname, $repo['name']);
             
            return dd($repo);
        }
        
    }
}