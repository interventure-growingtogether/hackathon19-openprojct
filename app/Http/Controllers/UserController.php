<?php 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request as Request;
use App\Project as Project;

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
                $contribs = \GitHub::repo()->contributors(\Auth::user()->username, explode("/", $repo)[1]);
                $topics = \GitHub::repo()->topics(\Auth::user()->username, explode("/", $repo)[1]);

                $prj = new Project([
                    'name' => $r['name'],
                    'description' => $r['description'],
                    'stars' => $r['stargazers_count'],
                    'number_of_contributors' => count($contribs),
                    'tags' => implode($topics['names'], ",")
                ]);

                $prj->save();
            }

            $user = \Auth::user();
            $user->repos_migrated = 1;
            $user->save();
        }
    }
}