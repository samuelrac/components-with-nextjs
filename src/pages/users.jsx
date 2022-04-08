import { useState, useEffect } from 'react';
import Image from 'next/image'
import { getUsers } from './api/users';

export default function Users(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {/* <Image 
                            src={user.avatar} 
                            alt={user.name}
                            width={350}
                            height={350} /> */}
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
        </>
    );
}