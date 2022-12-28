const { useState, useEffect } = React

// import { emailService } from "../../mail/services/email.service.js"
// import {storageService} from "../../../services/storage.service"

export function EmailIndex() {
    const [emails, setEmails] = useState([])


// useEffect(() => {
//     loadEmails()
// }, [])

// function loadEmails() {
//     emailService.query().then(emails => setEmails([emails]))
// }

return <section className="email-index">
<h1>Hello Email index</h1> 
</section>

}
