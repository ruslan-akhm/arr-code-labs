import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Showcase from "./components/Showcase.jsx";
import Expertise from "./components/Expertise.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Showcase />
                <Expertise />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
