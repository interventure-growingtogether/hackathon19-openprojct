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
        factory(App\Project::class, 50)->create()->each(function ($project) {
            $project->users()->save(factory(App\User::class)->make());
        });
    }
}
