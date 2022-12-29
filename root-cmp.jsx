const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;

import { AppHeader } from './cmps/main-header.jsx';
import { About } from './views/about.jsx';
import { Home } from './views/home.jsx';
import { EmailIndex } from './apps/mail/views/email-index.jsx';
import { EmailDetails } from './apps/mail/views/email-details.jsx';
import { UserMsg } from './apps/mail/cmps/email-user-msg.jsx';
import { NoteIndex } from './apps/note/views/note-index.jsx';
import { NoteEdit } from './apps/note/cmps/note-edit.jsx';


export function App() {
  return  <Router>
            <section className='app'>
                <AppHeader />
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/email' element={<EmailIndex />} />
                    <Route path='/email/:emailId' element={<EmailDetails />} />
                    <Route path='/note' element={<NoteIndex />} />
                    <Route path='/note/edit/:nodeId' element={<NoteEdit />} />
                  </Routes>
                < UserMsg/>
            </section>
          </Router>
  
}
