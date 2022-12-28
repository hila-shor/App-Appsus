
import {EmailPreview} from "./email-preview.jsx"

export function EmailList({emails}) {

    // const [emails, setEmails] = useState([])
    console.log('EmailList emails', emails)
    return <table className="email-list table">
                <tbody>
                    {emails.map(email =>  
                        <EmailPreview key={email.id} email={email} />
                        )}
                </tbody>
            </table>

}
