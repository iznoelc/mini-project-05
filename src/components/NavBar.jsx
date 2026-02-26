import { Download } from "./FavDownload";

function NavBar({favorites}){
    return(
        <>
            <div className="navbar bg-base-300 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Profile</a></li>
                        <li>
                        <ul className="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                    <a className="primary-font px-4 text-2xl fond-extrabold">MOVIE MANAGER</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><a className="secondary-font">Home</a></li>
                    <li><a className="secondary-font">Profile</a></li>
                    <li>
                        <details>
                        <summary className="secondary-font">My Liked Movies</summary>
                        <ul className="p-2 bg-base-100 w-40 z-1">
                        {/* {favorites == null}{
                                
                        }
                        {favorites != null && (favorites.map((d, index) => (
                            <li key={index}><a>{d.title}</a></li>
                        ))
                    )}; */}

                        {favorites.length === 0 ? (
                        <li><a>No likes yet!</a></li>
                    ) : (favorites?.map((movie, index) => (
                        <li><a key={index} className="secondary-font">{movie.title}</a></li>
                    )))}
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn secondary-font" onClick={() => Download(favorites)}>Download Favorites</button>
                </div>
            </div>
        </>
    );
}

export default NavBar;