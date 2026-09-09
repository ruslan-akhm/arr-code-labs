import { useEffect, useState } from "react";
import dashboard from "../assets/carousel/dashboard.png";
import prof_mgm from "../assets/carousel/prof_mgm.png";
import analysis from "../assets/carousel/analysis.png";
import workflow from "../assets/carousel/workflow.png";
// To use a real image, import it (e.g. `import slide1 from "../assets/showcase-1.jpg";`)
// and set it as the `image` value for the matching slide below.
const SLIDES = [
    {
        id: 1,
        title: "Custom Authentication Portal",
        text: "Self-hosted or vendor-hosted authentication portal for enterprise applications. Fully branded and secure.",
        image: prof_mgm,
    },
    {
        id: 2,
        title: "End-user Identity Portal",
        text: "Self-service identity portal integrated with Okta / Microsoft Entra / Ping ID / Auth0 for end-users to manage their account profile.",
        image: dashboard,
    },
    {
        id: 3,
        title: "Custom Profile Management",
        text: "Bulk user operations. Integrated user flows. Advanced user/profile management. Automated workflows.",
        image: workflow,
    },
    {
        id: 4,
        title: "End-to-end development",
        text: "Architect and implement web and mobile applications. CI/CD pipelines setup. Infrastructure automation, logging, monitoring.",
        image: analysis,
    },
];

const SLIDE_DURATION = 10000;

function Showcase() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, SLIDE_DURATION);

        return () => clearTimeout(timer);
    }, [index]);

    function goTo(offset) {
        setIndex((prev) => (prev + offset + SLIDES.length) % SLIDES.length);
    }

    return (
        <section className="showcase">
            <div className="showcase-grid">
                <div className="carousel">
                    <button
                        type="button"
                        className="carousel-arrow"
                        onClick={() => goTo(-1)}
                        aria-label="Previous slide"
                    >
                        &lsaquo;
                    </button>

                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${index * 100}%)`,
                            }}
                        >
                            {SLIDES.map((slide) => (
                                <div className="carousel-slide" key={slide.id}>
                                    <div className="carousel-text">
                                        <h4>{slide.title}</h4>
                                        <p>{slide.text}</p>
                                    </div>
                                    <div className="carousel-image">
                                        {slide.image && (
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                            />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="carousel-progress">
                            <div
                                key={index}
                                className="carousel-progress-bar"
                                style={{
                                    animationDuration: `${SLIDE_DURATION}ms`,
                                }}
                            />
                        </div>
                    </div>

                    <button
                        type="button"
                        className="carousel-arrow"
                        onClick={() => goTo(1)}
                        aria-label="Next slide"
                    >
                        &rsaquo;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Showcase;
