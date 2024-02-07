import Link from "next/link";

export default function TopNav() {
    return (
        <div className="shadow p-2 mb-3">
            <div className="container">
                <nav className="nav justify-content-between">
                    <Link className="nav-link" href="/">
                        HOME
                    </Link>
                    <div className="d-flex">
                        <Link className="nav-link" href="/login">
                            Login
                        </Link>
                        <Link className="nav-link" href="/register">
                            Register
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}