import { EmailLogo } from "./email-logo.jsx";

export function EmailAside() {
  return <aside className='app-aside side-nav flex'>
            <div className="compose-wrapper">
              <div className="compose-btn flex">
                <i className="fa-solid fa-pencil compose-icon"></i>
                <div className="compose-txt">Compose</div>
              </div>
            </div>
            <ul className="side-nav-list clean-list flex">

              <li className='btn-aside'>
                {/* <i className="fa inbox-icon"></i> */}
                <i className="fa-regular fa-inbox"></i>
                Inbox</li>

              <li className='btn-aside'>
                <i className="fa-regular fa-star-sharp"></i>
                {/* <i className="fa starred-icon"></i> */}
                Starred</li>

              <li className='btn-aside'>
                <i className="fa-solid fa-inbox-out"></i>
                Sent</li>

              <li className='btn-aside'>
                <i className="fa-solid fa-trash"></i>
                Bin</li>
            </ul>
        </aside>;
}