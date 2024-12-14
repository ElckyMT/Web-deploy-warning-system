'use client'

import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense } from 'react';
// Import the sayHello function from the action folder
import { sayHello } from './action';

const HomePageContent = () => {
    // use state to store message, massage to store value and setMessage to set value
    const [message, setMessage] = useState(null);
    // useSearchParams to get query params
    const query = useSearchParams();

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await sayHello(query.get('name'));
                // setMessage will contain value "jalan yuk yukina sayangku"
                setMessage(response.Message);
            } catch (error) {
                setMessage("An error occurred");
            }
        };
        fetchMessage();
        // [] empty array means this useEffect will only run once
        // uncomment `query.get('name')` if you want the effect to run again on name change
    }, [/* query.get('name') */]);

    return (
        <div>
            <h1>Ini Untuk Testing API saja ma</h1>
            {/* Render the message, e.g., "jalan yuk yukina sayangku" */}
            <p>{message || "Loading..."}</p>
        </div>
    );
};

const HomePage = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <HomePageContent />
        </Suspense>
    );
};

export default HomePage;
