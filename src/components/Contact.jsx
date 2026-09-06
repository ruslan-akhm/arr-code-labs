import { useState } from "react";

const CONTACT_EMAIL = "hello@arrcodelabs.com";

const INITIAL_FORM = { name: "", email: "", company: "", message: "" };

function Contact() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [sent, setSent] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const subject = `Project inquiry from ${form.name || "your website"}`;
        const body = [
            `Name: ${form.name}`,
            `Email: ${form.email}`,
            `Company: ${form.company}`,
            "",
            form.message,
        ].join("\n");

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        setSent(true);
    }

    return (
        <section id="contact" className="contact">
            <div className="section-head">
                <p className="eyebrow">Get in touch</p>
                <h2>Let&rsquo;s discuss your project</h2>
                <p>
                    Tell us about your identity or engineering challenge and
                    we&rsquo;ll follow up within one business day.
                </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="field-row">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label htmlFor="email">Work email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label htmlFor="company">Company</label>
                    <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                    />
                </div>

                <div className="field-row">
                    <label htmlFor="message">Project details</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-pill btn-full">
                    Send message
                </button>

                {sent && (
                    <p className="form-status" role="status">
                        Opening your email client to send this message&hellip;
                    </p>
                )}
            </form>

            <p className="contact-direct">
                Prefer email? Reach us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
        </section>
    );
}

export default Contact;
