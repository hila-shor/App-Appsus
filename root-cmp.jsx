const { Route, Routes } = ReactRouterDOM;
const Router = ReactRouterDOM.HashRouter;

import { AppHeader } from './cmps/main-header.jsx';
import { About } from './views/about.jsx';
import { Home } from './views/home.jsx';
import { EmailIndex } from './apps/mail/views/email-index.jsx';
import { NoteIndex } from './apps/note/views/note-index.jsx';
import { NoteEdit } from './apps/note/cmps/note-edit.jsx';

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/email' element={<EmailIndex />} />
          <Route path='/note' element={<NoteIndex />} />
          <Route path='/note/edit/:nodeId' element={<NoteEdit />} />
        </Routes>
      </section>
    </Router>
  );
}
