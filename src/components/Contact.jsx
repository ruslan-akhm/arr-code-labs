import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const CONTACT_EMAIL = "inquiries@arrcodelabs.com";

const INITIAL_FORM = { name: "", email: "", company: "", message: "" };

function Contact() {
    const [form, setForm] = useState(INITIAL_FORM);
    const [status, setStatus] = useState("idle");

    function handleChange(event) {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus("sending");

        try {
            await addDoc(collection(db, "contact_submissions"), {
                Name: form.name,
                Work_email: form.email,
                Company: form.company,
                Project_details: form.message,
                Submitted_at: serverTimestamp(),
            });
            setForm(INITIAL_FORM);
            setStatus("sent");
        } catch (error) {
            console.error("Failed to submit contact form", error);
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="contact">
            <div className="section-head">
                <p className="eyebrow">Get in touch</p>
                <h2>Let&rsquo;s discuss your project</h2>
                <p>
                    Tell us about your identity or engineering challenge and
                    we&rsquo;ll follow up shortly.
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

                <button
                    type="submit"
                    className="btn btn-pill btn-full"
                    disabled={status === "sending"}
                >
                    {status === "sending" ? "Sending\u2026" : "Send message"}
                </button>

                {status === "sent" && (
                    <p className="form-status" role="status">
                        Thanks! We&rsquo;ll follow up shortly.
                    </p>
                )}

                {status === "error" && (
                    <p className="form-status form-status-error" role="alert">
                        Something went wrong. Please email us directly at{" "}
                        {CONTACT_EMAIL}.
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
