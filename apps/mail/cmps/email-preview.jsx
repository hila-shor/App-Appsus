const { useState } = React;
const { Link } = ReactRouterDOM;

import { utilService } from '../../../services/util.service.js';

export function EmailPreview({ email, onRemoveEmail }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHover, setIsHover] = useState(false);
  //

  function setEmailFrom(email) {
    let emailFrom = email.from;
    let atIdx = emailFrom.indexOf('@');

    let nameFrom = emailFrom.substring(0, atIdx);
    if (atIdx !== -1) return nameFrom;
  }

  return (
    <div
      className={`email-preview ${email.isRead ? '' : 'unread'}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className='item item1'>
        {/* 🏳️ */}
        {/* A. checkbox  */}
        <input type='checkbox' />
      </div>
      <div className='item item2'>
        {email.isStarred ? (
          <i className='fa-sharp fa-solid fa-starName'></i>
        ) : (
          <i className='fa-regular fa-star'></i>
        )}
      </div>
      <Link className='item item3' to={`/email/${email.id}`}>
        <div className='text ellipsis'>{setEmailFrom(email)}</div>
      </Link>

      {/* <Link className='item4' to={`/email/${email.id}`}> */}
      {/* subject and message  */}
      <p className='text email-content ellipsis item4'>
        {`${email.subject} - ${email.body}`}
      </p>
      {/* </Link> */}

      {/* delete  */}

      <div
        className='delete-email item5'
        onClick={(event) => {
          console.log(event);
          event.stopPropagation();
          onRemoveEmail(email.id);
        }}>
        {isHover && '❌'}
      </div>

      {/* read item  */}
      <div className='item toggle-read item6'>{isHover && '📩'}</div>

      {/* <Link to={`/email/${email.id}`}>
                <div className='item item4'>{email.body}</div>
            </Link> */}

      <div className='item email-time item7'>
        {utilService.convertTimestamp(email.sentAt)}
      </div>
    </div>
  );
}
