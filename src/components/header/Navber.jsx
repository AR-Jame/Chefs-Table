import { FaCircleUser } from "react-icons/fa6";
const Navber = () => {
    return (
        <div className="font-lexend">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="text-4xl font-semibold">Chefs Table</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" space-x-7 menu-horizontal px-1">
                        <li><a className="hover:text-[#02b76c] transition-colors text-lg cursor-pointer ">Home</a></li>
                        <li><a className="hover:text-[#02b76c] transition-colors text-lg cursor-pointer ">Recipes</a></li>
                        <li><a className="hover:text-[#02b76c] transition-colors text-lg cursor-pointer ">About</a></li>
                        <li><a className="hover:text-[#02b76c] transition-colors text-lg cursor-pointer ">Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <input className="bg-[#13121214] rounded-3xl pl-4 text-base p-3 font-normal" placeholder="Search" type="text" />
                    <button className="text-xl"><FaCircleUser className="text-4xl text-green-600" /></button>
                </div>
            </div>
        </div>
    );
};

export default Navber;