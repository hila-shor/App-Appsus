const { useState, Fragment } = React
const {Link} = ReactRouterDOM

import {utilService} from '../../../services/util.service.js'

export function EmailPreview({email, onRemoveEmail}){

  const [isExpanded, setIsExpanded] = useState(false)
  // const [isHover, setIsHover] = useState(true)


  function setEmailFrom(email){
    console.log(email.from)
    let emailFrom = email.from
    let atIdx =  emailFrom.indexOf("@")
    console.log(atIdx)
   
    let nameFrom =  emailFrom.substring(0, atIdx)
    if (atIdx !== -1) return nameFrom
  
}

  return <div className="email-preview flex">
            <div>🏳️</div>
            <div>⭐</div>
            <Link className="flex" to={`/email/${email.id}`}>
                <div>{setEmailFrom(email)}</div>
                <div>{email.subject}</div>
                <div>{email.body}</div>
            </Link>
            <div>❌</div>
            <div>📩</div>
            <div>{utilService.convertTimestamp(email.sentAt)}</div>
        </div>
  



}