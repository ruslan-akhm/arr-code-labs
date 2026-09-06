import logo from "../assets/arr-logo.png";

const NAV_LINKS = [
    { label: "What we do", href: "#services" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
];

function Header() {
    return (
        <header className="site-header">
            <div className="nav-inner">
                <a className="brand" href="#top">
                    <img
                        className="brand-logo"
                        src={logo}
                        alt="ARR Code Labs"
                    />
                </a>

                <nav className="site-nav">
                    {NAV_LINKS.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                <a className="btn btn-pill btn-pill-small" href="#contact">
                    Let&rsquo;s talk
                </a>
            </div>
        </header>
    );
}

export default Header;
