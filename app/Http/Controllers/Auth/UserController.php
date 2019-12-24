<?php 
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class UserController extends Controller {
    public function importProjects() 
    {
        \GitHub::user()->repositories($user->nickname)
    }
}