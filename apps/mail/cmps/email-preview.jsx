const { useState, Fragment } = React

import {utilService} from '../../../services/util.service.js'
export function EmailPreview({email}){

  const [isExpanded, setIsExpanded] = useState(false)
  // const [isHover, setIsHover] = useState(true)

  return <Fragment>
        <tr onClick={() => {
            setIsExpanded(!isExpanded)
        }}>
            <td>{email.from}</td>
            <td>{email.subject}</td>
            <td>{email.body}</td>
            <td>❌</td>
            <td>📩</td>
            <td>{utilService.convertTimestamp(email.sentAt)}</td>

        </tr>
        <tr hidden={!isExpanded}>
            <td colSpan="4">
                <p>Lorem ipsum dolor</p>
            </td>
        </tr>

        </Fragment>


}