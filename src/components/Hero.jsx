function Hero() {
    return (
        <section id="top" className="hero">
            <div className="hero-copy">
                <h1>
                    Enterprise Identity
                    <br />
                    Software Engineering
                </h1>
                <p className="hero-lede">
                    We build secure, enterprise-grade web applications for
                    identity and cybersecurity companies.
                </p>
                <div className="hero-actions">
                    <a className="btn btn-pill" href="#contact">
                        Let&rsquo;s discuss your project
                    </a>
                    <a className="btn btn-link" href="#services">
                        See what we do <span aria-hidden="true">&rsaquo;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
