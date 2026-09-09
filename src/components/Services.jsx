const SERVICES = [
    {
        index: "01",
        title: "IAM Applications",
        description:
            "Custom portals, administration consoles and identity workflows.",
    },
    {
        index: "02",
        title: "Enterprise Frontend",
        description:
            "Complex React/Next.js applications for security and SaaS products.",
    },
    {
        index: "03",
        title: "Identity Integrations",
        description:
            "Applications integrating with Okta, Microsoft Entra and Ping Identity.",
    },
    // {
    //     index: "04",
    //     title: "Engineering Augmentation",
    //     description:
    //         "Experienced frontend/backend engineers for teams that need additional capacity.",
    // },
];

function Services() {
    return (
        <section id="services" className="services">
            <div className="section-head">
                <p className="eyebrow">What we do</p>
                <h2>Engineering built around identity</h2>
            </div>

            <div className="service-grid">
                {SERVICES.map((service) => (
                    <article key={service.index} className="service-card">
                        <span className="service-index">{service.index}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Services;
