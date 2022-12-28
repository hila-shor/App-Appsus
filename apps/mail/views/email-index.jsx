const { useState, useEffect } = React

import {EmailList} from "../cmps/email-list.jsx"
import {EmailAside} from "../cmps/email-aside.jsx"
import {EmailSearch} from "../cmps/email-search.jsx"
import {emailService} from "../../mail/services/email.service.js"


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
return <section className="email-index app-container">
            <EmailAside/>
            <div className="app-main">
                <EmailSearch/>
                <EmailList emails={emails}/>
            </div>
        </section>

}

// return (
//     <div className='app-container'>
//       <AppAside />
//       <div className='app-main'>
//         <AppSearch />
//         <AppBoard notes={notes} deleteNote={deleteNote} />
//       </div>
//     </div>
//   );