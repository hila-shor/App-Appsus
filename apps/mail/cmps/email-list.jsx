const { Fragment } = React

import {EmailPreview} from "./email-preview.jsx"

export function EmailList({emails, onRemoveEmail}) {

   
    return  <section className="email-list app-main">
                
                    <div>
                        {emails.map(email =>  
                            <EmailPreview key={email.id} email={email} onRemoveEmail={onRemoveEmail} />
                        )}
                    </div>
                
            </section>
    


    // <section className="email-list">
    //             <table className="table">
    //                 <tbody>
    //                     {emails.map(email =>  
    //                         <EmailPreview key={email.id} email={email} onRemoveEmail={onRemoveEmail} />
    //                     )}
    //                 </tbody>
    //             </table>
    //         </section>

}
