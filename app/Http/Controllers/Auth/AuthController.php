<?php 
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User as User;

class AuthController extends Controller {
    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return Response
     */
    public function redirectToProvider()
    {
        return \Socialite::driver('github')->redirect();
    }

    /**
     * Obtain the user information from GitHub.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        try {
            $user = \Socialite::driver('github')->user();
        } catch (\Exception $e) {
            return \Redirect::to('auth/github');
        }

        $authUser = $this->findOrCreateUser($user);
        // generate api token for our api
        $authUser->generateApiToken();

        $repos = [];
        foreach(\GitHub::user()->repositories($user->nickname) as $repo) {
            array_push($repos, [
                'reponame' => $repo['full_name'],
            ]);
        }

        return json_encode([
            'api_token' => $authUser->api_token,
            'repos_migrated' => $authUser->reposMigrated,
            'repos' => $repos
        ]);
    }

    /**
     * Return user if exists; create and return if doesn't
     *
     * @param $githubUser
     * @return User
     */
    private function findOrCreateUser($githubUser)
    {
        if ($authUser = User::where('github_id', $githubUser->id)->first()) {
            return $authUser;
        }

        return User::create([
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'github_id' => $githubUser->id,
            'avatar' => $githubUser->avatar,
            'username' => $githubUser->nickname
        ]);
    }
}