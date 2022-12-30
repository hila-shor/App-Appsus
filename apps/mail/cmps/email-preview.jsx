const { useState, Fragment } = React
const {Link} = ReactRouterDOM

import {utilService} from '../../../services/util.service.js'

export function EmailPreview({email, onRemoveEmail}){

  const [isExpanded, setIsExpanded] = useState(false)
  const [isHover, setIsHover] = useState(false)
  // const [isHover, setIsHover] = useState(true)


  function setEmailFrom(email){
    console.log(email.from)
    let emailFrom = email.from
    let atIdx =  emailFrom.indexOf("@")
    console.log(atIdx)
   
    let nameFrom =  emailFrom.substring(0, atIdx)
    if (atIdx !== -1) return nameFrom
  
}

  return <div className="email-preview grid-container"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
   
            <div className='item item1'>🏳️</div>
            <div className='item item2 fa-solid'></div>
            <Link to={`/email/${email.id}`}>
                <div className=' item item3'>{setEmailFrom(email)}</div>
            </Link>
            <Link to={`/email/${email.id}`}>
                <div className="item item4 ellipsis">
                    {`${email.subject} - ${email.body}` }</div>
            </Link>
            {/* <Link to={`/email/${email.id}`}>
                <div className='item item4'>{email.body}</div>
            </Link> */}
            
            {isHover &&(<div className="edit-flex">
                <div className="delete-email item item4 " onClick={()=>onRemoveEmail(email.id) }>❌</div>
                <div className='toggle-read item item5'>📩</div>
            </div>)}
                <div className='email-time item item6'>{utilService.convertTimestamp(email.sentAt)}
            </div>
        </div>




}