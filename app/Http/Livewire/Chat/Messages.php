<?php

namespace App\Http\Livewire\Chat;

use App\Models\Message;
use App\Models\Room;
use Livewire\Component;
use App\Events\Chat\MessageAdded;

class Messages extends Component
{
public $messages;
public $roomId;

    public function mount(Room $room, $messages)
    {
        $this->roomId = $room->id;
        $this->messages = $messages;

    }

    public function getListeners()
    {
    
        $listeners = [
            'message.added' => 'prependMessage',
            "echo-private:chat.{$this->roomId},Chat\\MessageAdded" => 'pushMessageFromBroadcast',
        ];
        return $listeners;
        
    }

    public function prependMessage($id)
    {
        $this->messages->prepend(Message::find($id));
    }

    public function gotNotification()
    {
        $this->showNewOrderNotification = true;
    }
    public function pushMessageFromBroadcast($payload)
    {
        $this->prependMessage($payload['message']['id']);

    }

    public function render()
    {
        return view('livewire.chat.messages');
    }
}
