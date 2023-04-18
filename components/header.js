import Link from "next/link";


const Header = () => {
    return (
        <header>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/experience'>Experience</Link>
                <Link href='/contacts'>Contacts</Link>
            </nav>
        </header>
    )    
}

export default Header;