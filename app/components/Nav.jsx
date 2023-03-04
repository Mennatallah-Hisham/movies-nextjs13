import Link from "next/link";
export default function Nav (){

    return (
        <>
        <nav className="nav margin-b-m">
            <ul className="nav__list">
                <li>
                    <Link className="nav__link" href="/">home</Link>
                </li>
                <li>
                    <Link className="nav__link" href="/movies">movies</Link>
                </li>
                <li>
                    <Link className="nav__link" href="/tvshows">tv shows</Link>
                </li>
                <li>
                    <Link className="nav__link" href="/trending">trending</Link>
                </li>
                <li>
                    <Link  className="nav__link" href="/subscribe">subscribe</Link>
                </li>
            </ul>
        </nav>
        
        </>
    )
}