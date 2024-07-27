import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/authContext';

const Header = () => {
    const { user, doSignOut } = useAuth();

    return (
        <header className="bg-indigo-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">AppName</Link>
                <div>
                    {user ? (
                        <>
                            <span className="mr-4">Hello, {user.email}</span>
                            <button
                                onClick={doSignOut}
                                className="bg-red-600 px-4 py-2 rounded-lg text-white"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="bg-blue-600 px-4 py-2 rounded-lg">Login</Link>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
