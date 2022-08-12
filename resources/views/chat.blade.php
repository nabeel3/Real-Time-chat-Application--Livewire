@extends('layouts.app')

@section('content')
<div class="container">
    <h4>Rooms</h4>
    <div class="row justify-content-center">
        <div class="col-md-8">
            @foreach ($rooms as $room)
            <div>
                <a href="{{ route('chat.room',$room) }}">{{$room->title}}</a>
            </div>
                
            @endforeach
        </div>
    </div>
</div>
@endsection
