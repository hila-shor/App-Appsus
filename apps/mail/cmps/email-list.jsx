const { Fragment } = React;

import { EmailPreview } from './email-preview.jsx';

export function EmailList({ emails, onRemoveEmail }) {
  return (
    <section className='email-list app-main'>
      {emails.map((email) => (
        <EmailPreview
          key={email.id}
          email={email}
          onRemoveEmail={onRemoveEmail}
        />
      ))}
    </section>
  );

}
