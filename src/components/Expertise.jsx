import reactLogo from "../assets/react.svg";
import nextjsLogo from "../assets/nextjs-icon.svg";
import nodejsLogo from "../assets/nodejs-icon.svg";
import typescriptLogo from "../assets/typescript-icon.svg";
import dotnetLogo from "../assets/dotnet.svg";
import oktaLogo from "../assets/okta-icon.svg";
import entraLogo from "../assets/microsoft-windows-icon.svg";
import pingLogo from "../assets/ping logo.png";
import auth0Logo from "../assets/auth0-icon.svg";

const ENGINEERING_STACK = [
    { name: "React.js", logo: reactLogo },
    { name: "Next.js", logo: nextjsLogo },
    { name: "Node.js", logo: nodejsLogo },
    { name: "TypeScript", logo: typescriptLogo },
    { name: ".NET", logo: dotnetLogo },
];

const IDENTITY_PLATFORMS = [
    { name: "Okta", logo: oktaLogo },
    { name: "Microsoft Entra", logo: entraLogo },
    { name: "Ping Identity / ForgeRock", logo: pingLogo },
    { name: "Auth0", logo: auth0Logo },
];

function Expertise() {
    return (
        <section id="expertise" className="expertise">
            <div className="section-head">
                <p className="eyebrow">Where we&rsquo;re deep</p>
                <h2>Fluent in modern engineering, native to identity</h2>
            </div>

            <div className="expertise-groups">
                <div className="expertise-group">
                    <p className="tag-label">Engineering stack</p>
                    <ul className="tag-row">
                        {ENGINEERING_STACK.map((item) => (
                            <li key={item.name} className="tag">
                                <span className="tag-icon">
                                    <img src={item.logo} alt="" />
                                </span>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="expertise-group">
                    <p className="tag-label">Identity expertise</p>
                    <ul className="tag-row">
                        {IDENTITY_PLATFORMS.map((item) => (
                            <li key={item.name} className="tag">
                                <span className="tag-icon">
                                    <img src={item.logo} alt="" />
                                </span>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Expertise;
