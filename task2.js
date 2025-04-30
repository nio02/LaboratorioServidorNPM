// Task 2: listUsers()

import { getServerURL } from "./task1.js";

export function listUsers(){
    return fetch (`${getServerURL()}/users`, { 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    // .then((data) => {
    //     data
    // })
}



// console.log(listUsers());

// listUsers().then(users => {
//     console.log(users);
// });

