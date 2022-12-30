import { EmailLogo } from "./email-logo.jsx";

export function EmailAside() {
  return <aside className='app-aside'>
            <EmailLogo/>
            <div className='compose'>compose</div>
            <div className='btn-aside'>div</div>
            <div className='btn-aside'>div</div>
            <div className='btn-aside'>div</div>
        </aside>;
}