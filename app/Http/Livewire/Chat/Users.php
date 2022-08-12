<?php

namespace App\Http\Livewire\Chat;

use App\Models\Room;
use Livewire\Component;

class Users extends Component
{
    public $roomId;

    public $users;

    public function mount(Room $room)
    {
        $this->roomId = $room->id;

    }


    public function getListeners()
    {
        return [
            "echo-presensce:chat.{$this->roomId}, here => 'setUsersHere",
            "echo-presensce:chat.{$this->roomId}, joining => 'setUsersJoining",
            "echo-presensce:chat.{$this->roomId}, leaving => 'setUsersLeaving"

        ];
    }

    public function setUsersLeaving($user)
    {
        $this->users = array_filter($this->users, function ($u) use ($user) {
            return $u['id'] != $user['id'];
        });

    }
    
    public function setUsersJoining($users)
    {
        $this->users[] = $users;

    }
    

    public function setUsersHere($users)
    {
        $this->users = $users;

    }
    public function render()
    {
        return view('livewire.chat.users');
    }
}
