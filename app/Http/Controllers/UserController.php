<?php 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request as Request;

class UserController extends Controller {
    /**
     * 
     */
    public function importProjects(Request $request) 
    {
        $repos = $request->get('repos');

        if (!\Auth::user()->repos_migrated) {
            foreach($repos as $repo) {
                $r = \GitHub::repo()->show(\Auth::user()->username, explode("/", $repo)[1]);
                 
                
            }
        }
    }
}