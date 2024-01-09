import { Link, Outlet } from "react-router-dom";
import SearchBox from "../ui/SearchBox";

export default function DefaultLayout() {
    return (
        <>
            <main>
                <nav className="navbar bg-body-tertiary border-bottom shadow-sm py-3">
                    <div className="container">
                        <a className="font-monospace text-uppercase fw-bold text-dark text-decoration-none" href="/">
                            article-pro
                        </a>
                        <>
                            <div>
                                <Link to={"/"} className="fw-semibold me-3">
                                    <small>
                                        HOME
                                    </small>
                                </Link>
                                <Link to={"/publish"} className="fw-semibold">
                                    <small>
                                        PUBLISH
                                    </small>
                                </Link>
                            </div>
                        </>
                        {/* <SearchBox /> */}
                    </div>
                </nav>
                <Outlet />
            </main>
        </>
    )
}
