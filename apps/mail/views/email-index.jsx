const { useState, useEffect } = React

import {EmailList} from "../cmps/email-list.jsx"
import {EmailAside} from "../cmps/email-aside.jsx"
import {EmailSearch} from "../cmps/email-search.jsx"

import {emailService} from "../../mail/services/email.service.js"
import { eventBusService , showSuccessMsg , showErrorMsg  } from "../../../services/event-bus.service.js"


export function EmailIndex() {
    const [emails, setEmails] = useState([])
    const [userMsg, setUserMsg] = useState('')
    // console.log('EmailIndex useState() emails', emails)


useEffect(() => {
    loadEmails()
}, [])

function loadEmails() {
    emailService.query().then(emails => {
        // console.log('EmailIndex loadEmails emails', emails)
        setEmails(emails)
    })
}
function onRemoveEmail(emailId) {
    emailService.remove(emailId)
        .then(() => {
            const updatedEmails = emails.filter(email => email.id !== emailId)
            setEmails(updatedEmails)
           showSuccessMsg('Email removed')
           console.log('onRemoveEmail')
        })
        .catch((err) => {
            console.log('Had issues removing', err)
            showErrorMsg('Could not remove car')
        
        })
}

return <section className="email-index app-container">
            <EmailAside/>
            <div className="app-main">
                <EmailSearch/>
                <EmailList emails={emails} onRemoveEmail={onRemoveEmail}/>
            </div>
        </section>

}

