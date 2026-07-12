import { useState } from "react";

function ContactForm() {
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    return (
        <form className="contact-form">
            <div className="info-section">
                <div className="info-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name" 
                    />
                </div>

                <div className="info-group">
                    <label htmlFor="email">E-Mail:</label>
                    <input 
                        id="email" 
                    />
                </div>

                <div className="info-group">
                    <label htmlFor="phone">Phone (Optional):</label>
                    <input 
                        id="phone" 
                    />
                </div>
            </div>
            <div className="message-section">
                <div className="message-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message"
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