
'use client'

import { treaty } from '@elysiajs/eden'
import type { ServerApp } from '../../../server/src/server'
import React, {useEffect} from "react";


const client = treaty<ServerApp>('localhost:3001')

function searchUserByName(name: string) {
    return client.hello.get({query:{name}})
}

export default function Home() {
    //Search User by name on input change
    const [name, setName] = React.useState('');
    const [result, setResult] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const handleSearch = () => {
        setLoading(true);
        const res = searchUserByName(name);
        res.then((result) => {
            setResult(JSON.stringify(result.data) ?? 'User not found');
            setLoading(false);
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }
    useEffect(() => {

       //only click search button


    });
        // Center beauty view
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96">
                <h1 className="text-4xl font-bold mb-1">Search User</h1>
                <p className="text-base mb-5">(Bob,Alice,Charlie)</p>
                <input type="text" placeholder="Enter name" className="w-full p-2 border border-gray-300 rounded mb-4 text-black text-2xl" value={name} onChange={(e) => setName(e.target.value)}/>
                <button className="w-full bg-blue-500 text-white p-2 rounded" onClick={handleSearch}>Search</button>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <p className="mt-4">{result}</p>
            </div>
        </div>
    )




}
