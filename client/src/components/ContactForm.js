import { useState } from "react";

function ContactForm() {
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    function handleChange(evt) {
        const { id, value } = evt.target;

        setForm((prevForm) => ({
            ...prevForm,
            [id]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(form);
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="info-section">
                <div className="info-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="info-group">
                    <label htmlFor="email">E-Mail:</label>
                    <input 
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="youremail@gmail.com"
                        required
                    />
                </div>

                <div className="info-group">
                    <label htmlFor="phone">Phone (Optional):</label>
                    <input 
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="04-2342600"
                    />
                </div>
            </div>
            
            <div className="message-section">
                <div className="message-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                    />
                </div>

                <div className="submit-group">
                    <button type="submit">Send Message</button>
                </div>
            </div>
        </form>
    );
}

export default ContactForm;