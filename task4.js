// Task 4: delUser(number)

import { getServerURL } from "./task1.js";
import { listUsers } from "./task2.js";

export function delUser(id_dell){
    return fetch (`${getServerURL()}/users/${id_dell}`, { 
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

// delUser(7)