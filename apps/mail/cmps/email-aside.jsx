const { useState } = React

export function EmailAside({onFolderChange, unreadCount=0}) {
    
    const [activeFolder, setActiveFolder] = useState('inbox')

    function onFolderSelected(folder) {
        if (folder !== activeFolder) {
            setActiveFolder(folder)
            onFolderChange(folder)
        }
    }

    return <aside className='app-aside side-nav flex'>
        <div className="compose-wrapper">
            <div className="compose-btn flex">
                <i className="fa-solid fa-pencil compose-icon"></i>
                <div className="compose-txt">Compose</div>
            </div>
        </div>

        <ul className="side-nav-list clean-list flex">
            <li className={`${activeFolder === 'inbox' ? 'active' : ''} btn-aside`}
                 onClick={() => onFolderSelected('inbox')}>
                <i className="fas fa-inbox"/>
                Inbox
                {unreadCount > 0 && <span>{unreadCount}</span>}
            </li>
            <li className={`${activeFolder === 'starred' ? 'active' : ''} btn-aside`}
                 onClick={() => onFolderSelected('starred')}>
                <i className="fas fa-star"/>
                Starred
            </li>
            <li className={`${activeFolder === 'sent' ? 'active' : ''} btn-aside`}
                 onClick={() => onFolderSelected('sent')}>
                <i className="fas fa-paper-plane"/>
                Sent
            </li>
            <li className={`${activeFolder === 'drafts' ? 'active' : ''} btn-aside`}
                 onClick={() => onFolderSelected('draft')}>
                <i className="fas fa-file"/>
                Draft
            </li>
            <li className={`${activeFolder === 'trash' ? 'active' : ''} btn-aside`}
                 onClick={() => onFolderSelected('trash')}>
                <i className="fas fa-trash"/>
                Trash
            </li>
        </ul>
        </aside>;
}