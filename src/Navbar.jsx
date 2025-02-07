import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/waitlist">Waitlist</Link>
                </li>
            </ul>
        </nav>
    );
}
