import keyDataLogo from "../assets/partners/KeyData-Logo.svg";
import keyDataPic from "../assets/partners/kd-partner-pic.png";
// Fill in quote/name/title/image for each testimonial once available.

const TESTIMONIALS = [
    {
        id: 1,
        quote: "ARR Code Labs has been a trusted services partner for KeyData Cyber, providing strong engineering expertise to help us deliver solutions that meet the development requirements of KeyData.",
        logo: keyDataLogo,
        logoAlt: "KeyData Cyber",
        image: keyDataPic,
        name: "Awais Akbar",
        title: "VP of Managed Services",
    },
];

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <div className="section-head">
                <p className="eyebrow">What partners say</p>
                <h2>Trusted by teams shipping identity at scale</h2>
            </div>

            <div className="testimonial-grid">
                {TESTIMONIALS.map((item) => (
                    <div className="testimonial-card" key={item.id}>
                        <div className="testimonial-quote">
                            <span
                                className="testimonial-mark"
                                aria-hidden="true"
                            >
                                &rdquo;
                            </span>
                            <p>{item.quote}</p>
                        </div>

                        <div className="testimonial-side">
                            <div className="testimonial-media">
                                <div className="testimonial-logo">
                                    {item.logo && (
                                        <div className="testimonial-logo-inner">
                                            <img
                                                src={item.logo}
                                                alt={item.logoAlt}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="testimonial-photo">
                                    {item.image && (
                                        <img src={item.image} alt={item.name} />
                                    )}
                                </div>
                            </div>

                            <div className="testimonial-person">
                                <p className="testimonial-name">{item.name}</p>
                                <p className="testimonial-title">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
