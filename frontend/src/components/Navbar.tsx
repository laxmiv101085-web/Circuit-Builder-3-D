import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Circuit Builder 3D</Link>
                <div>
                    <Link to="/" className="hover:text-blue-200">Home</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
