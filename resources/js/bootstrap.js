import _ from 'lodash';
window._ = _;

import 'bootstrap';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */


import Echo from "laravel-echo"
import Pusher from "pusher-js" 
 

window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: '20dc86d3cd5b144967f7',
//     cluster: 'eu',
//     encrypted: true
//     // broadcaster: 'pusher',
//     // key: process.env.MIX_PUSHER_APP_KEY,
//     // cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     //wsHost: window.location.hostname,
//     // wsPort: 6001,
//     //forceTLS: false,
//     //disableStats: true,
// });

window.Echo = new Echo({

    broadcaster: 'pusher',
    key: process.env.MIX_PUSHER_APP_KEY,
    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    // wsHost: process.env.MIX_PUSHER_HOST,
    // wsPort: 6001,
    encrypted: true,
    // disableStats: true,
    // forceTLS: false


    
        // broadcaster: 'pusher',
        // key: process.env.MIX_PUSHER_APP_KEY,
        // wsHost: window.location.hostname,
        // wsPort: 6001,
        // forceTLS: false,
        // disableStats: true,
});

window.Echo.channel('chat.1')
    .listen('Chat\\messageAdded', e => {
        alert(e);
        console.log(e);
    });


// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     wsHost: import.meta.env.VITE_PUSHER_HOST ?? `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
//     cluster: 'mt1',
// });







window.Echo.channel('private-chat.1')
        .listen('App\Events\Chat\MessageAdded', (e) => {
            console.log(e);
        });



// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';


// window.Pusher = Pusher;

// window.Echo = new Echo({
//   broadcaster: 'pusher',
//   key: '7e128f5db0b0d39536c1',
//   cluster: 'ap2',
//   forceTLS: true
// });

