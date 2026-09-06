const YEAR = new Date().getFullYear();

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <nav className="footer-nav">
                    <a href="#services">What we do</a>
                    <a href="#expertise">Expertise</a>
                    <a href="#contact">Contact</a>
                </nav>

                <p className="footer-copyright">
                    Copyright &copy; {YEAR} ARR Code Labs, Inc. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
