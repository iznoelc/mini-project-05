import { TbUfo } from "react-icons/tb";

function Footer(){
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <aside>
                    <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                    </svg>
                    <icon className="text-4xl"><TbUfo /></icon>
                    <p className="secondary-font">
                    GLEEBUS' Movie Manager
                    <br />
                    Providing the best movie sorting and searching since 2026
                    </p>
                </aside>
                <nav className="secondary-font">
                    <h6 className="footer-title">ACTIONS</h6>
                    <a className="link link-hover">Donate</a>
                    <a className="link link-hover">Moderators</a>
                    <a className="link link-hover">Terms & Privacy</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="secondary-font">
                    <h6 className="footer-title">Explore</h6>
                    <a className="link link-hover">Recommendations</a>
                    <a className="link link-hover">Site Stats</a>
                    <a className="link link-hover">Apps</a>
                </nav>
                <nav className="secondary-font">
                    <h6 className="footer-title">FIND US!</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">GitHub</a>
                    <a className="link link-hover">Discord</a>
                </nav>
            </footer>
        </>
    );
}

export default Footer;