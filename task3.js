// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";
import { listUsers } from "./task2.js";

export function addUser(first_name, last_name, email){
    let longitud = listUsers().then(data => {
        data
    }).lenght;
    
    fetch(`${getServerURL()}/users`, {
        method: "POST",
        body: JSON.stringify({ 
            id: longitud + 1, 
            first_name: first_name, 
            last_name: last_name,
            email: email
        }), 
        headers: { 
            "Content-Type": "application/json"
        } 
    })
}

// addUser("Papitas", "papas", "papas@gmail.com");