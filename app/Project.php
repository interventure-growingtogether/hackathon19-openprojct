<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = ['id'];

//    public function followers()
//    {
//        return $this->belongsToMany('App\User', 'follow_project', 'user_id', 'project_id');
//    }

    public function owner()
    {
        return $this->hasOne('App\User', 'id', 'owner_id');
    }
}
