'use client'

import { useState , useEffect } from 'react';

export default function UsersPage () {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`/api/users`)
            .then(res => (
                console.log(res),
                res.json()
            ))
            .then(users => (
                console.log(users),
                setUsers(users)
            ))
    }, [setUsers]);

    return(
        <div>
            {users?.map((user, index) => (
                <div key={index}>{user?.name}</div>
            ))}
        </div>
    )
}