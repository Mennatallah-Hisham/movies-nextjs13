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
                    <Link className="nav__link" href="/tv">tv shows</Link>
                </li>
            
                <li>
                    <Link  className="nav__link" href="/pricing">pricing</Link>
                </li>
            </ul>
        </nav>
        
        </>
    )
}