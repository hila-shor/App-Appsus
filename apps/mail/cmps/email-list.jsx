const { Fragment } = React

import {EmailPreview} from "./email-preview.jsx"

export function EmailList({emails}) {

    // const [emails, setEmails] = useState([])
    console.log('EmailList emails', emails)
    return <section className="email-list">
                <table className="table">
                    <tbody>
                        {emails.map(email =>  
                            <EmailPreview key={email.id} email={email} />
                        )}
                    </tbody>
                </table>
            </section>

}
