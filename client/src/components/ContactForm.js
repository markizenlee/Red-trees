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
            
        </form>
    );
}

export default ContactForm;