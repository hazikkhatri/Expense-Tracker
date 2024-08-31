import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex py-4 bg-blue-600 items-center justify-between px-6 shadow-md">
            <div className="text-white font-bold text-xl">Expense Tracker</div>
            <ul className="flex gap-8 items-center">
                <li>
                    <a className="text-white text-lg hover:text-blue-300 transition-colors duration-200" href="#">Home</a>
                </li>
                <li>
                    <a className="text-white text-lg hover:text-blue-300 transition-colors duration-200" href="#">Contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
