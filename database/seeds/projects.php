<?php

use Illuminate\Database\Seeder;

class projects extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 5)->create()->each(function ($user) {
            /** @var \App\User $user */
//            $user->follows()->saveMany(factory(\App\Project::class, rand(2, 3))->make());
            $user->projects()->saveMany(factory(\App\Project::class, 2)->make());
//            $project->folowers()->saveMany(factory(App\User::class, rand(2, 5))->make())
//            factory(\App\User::class)->create(['project' => $project]);
        });
//        factory(App\Project::class, 50)->create()->each(function ($project) {
////            $project->folowers()->saveMany(factory(App\User::class, rand(2, 5))->make())
//            factory(\App\User::class)->create(['project' => $project]);
//        });
    }
}
