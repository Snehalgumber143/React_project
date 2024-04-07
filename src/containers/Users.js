import React , {useState} from 'react';

function Users(){
    const [users, setUsers]= useState([
        {name:'Mohan', age:25},
        {name:'Sohan', age:26}         
    ])

   return(
    <div>
        <h2>Users</h2>
        <u1>
            {
                users.map((user, index)=>{
                    return <li>{user.name}, {user.age}</li>
                })
            }
        </u1>
    </div>
   )
        }
   export default Users;
