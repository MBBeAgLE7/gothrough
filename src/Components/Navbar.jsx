import { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
    let menuref = useRef();
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        let handler = (e) => {
            if (menuref.current && !menuref.current.contains(e.target)) {
                setNavbar(false);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    let handleClick = (e) => {
        e.preventDefault();
    }

    return (
        <nav className="w-full fixed top-0 bg-white shadow rounded-b-2xl">
            <div ref={menuref} className="justify-around p-2 mt-0 m-2 lg:flex lg:justify-between lg:items-center md:flex md:items-center md:justify-between md:p-2">
                <div>
                    <div className="flex items-center justify-between md:block">
                        <a href="/" className="flex items-center">
                            <span>
                                <img src="/assets/image.png" alt="Logo" className="h-8 w-8 mr-2 rounded-md" />
                            </span>
                            <h2 className="text-2xl font-bold">Go Through</h2>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center p-2 md:block md:p-2 ${navbar ? "block" : "hidden"}`}>
                        <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                            <li onClick={handleClick} className="text-gray-600 font-semibold hover:text-blue-400">
                                <Link
                                    to="hero"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800}
                                >
                                    Home
                                </Link>
                            </li>
                            <li onClick={handleClick} className="text-gray-600 font-semibold hover:text-blue-400">
                            <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800}
                                >
                                    About Us
                                </Link>
                            </li>
                            <li onClick={handleClick} className="text-gray-600 font-semibold hover:text-blue-400">
                            <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={800}
                                >
                                    Contact Us
                                </Link>                        </li>
                            <li onClick={handleClick} className="text-gray-600 font-semibold hover:text-blue-400">
                                <a href="/">Sign Up</a>
                            </li>
                            <li onClick={handleClick} className="text-gray-600 font-semibold hover:text-blue-400">
                                <a href="/">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
