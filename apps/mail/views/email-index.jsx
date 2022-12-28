const { useState, useEffect } = React

import { EmailList } from "../cmps/email-list.jsx"
import { emailService } from "../../mail/services/email.service.js"


export function EmailIndex() {
    const [emails, setEmails] = useState([])
    console.log('EmailIndex useState() emails', emails)


useEffect(() => {
    loadEmails()
}, [])

function loadEmails() {
    emailService.query().then(emails => {
        console.log('EmailIndex loadEmails emails', emails)
        setEmails(emails)
    })
}

console.log('emails from email-index', emails)
return <section className="email-index">
            <h1>Hello Email index</h1> 
            <EmailList emails={emails}/>
        </section>

}
