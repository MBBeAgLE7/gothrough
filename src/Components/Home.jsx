import React from 'react';
import { useAuth } from '../Contexts/authContext';
import NavBar from 'Components/Common/NavBar';

const Home = () => {
    const { user } = useAuth();

    return (
        <div>
            <NavBar />
            <main className="p-4">
                <h1 className="text-2xl">Welcome, {user ? user.email : 'Guest'}</h1>
            </main>
        </div>
    );
};

export default Home;
