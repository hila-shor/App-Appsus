const { useState, useEffect } = React

import {EmailList} from "../cmps/email-list.jsx"
import {EmailAside} from "../cmps/email-aside.jsx"
import {EmailFilter} from "../cmps/email-filter.jsx"

import {emailService} from "../services/email.service.js"
import {showErrorMsg, showSuccessMsg} from "../../../services/event-bus.service.js"


export function EmailIndex() {
    const [emails, setEmails] = useState([])
    const [filters, setFilters] = useState(emailService.getDefaultFilter())
    
    const [unreadCount, setUnreadCount] = useState()
    const [userMsg, setUserMsg] = useState('')



useEffect(() => {
    loadEmails()
}, [])

function loadEmails() {
    emailService.query(filters).then(setEmails)
    emailService.query().then(emails => {
        setUnreadCount(emails.filter(email => !email.isRead).length)
    })
}

    function onRemoveEmail(emailId) {
        emailService.remove(emailId)
            .then(() => {
                loadEmails()
                showSuccessMsg('Email removed')
            })
            .catch(() => {
                showErrorMsg('Could not remove email')
            })
    }

    function _applyFilters(newFilters) {
        setFilters(newFilters)
        emailService.query(newFilters).then(setEmails)
    }

    function onFiltersChanged(changedFilters) {
        _applyFilters({...filters, ...changedFilters})
    }

    function onFolderChanged(folder) {
        const changedFilters = {
            ...filters,
            status: folder
        }
        delete changedFilters.isRead
        delete changedFilters.isStarred

        if (folder === 'starred') {
            changedFilters.status = 'inbox'
            changedFilters.isStarred = true
        }

        _applyFilters(changedFilters)
    }

    return <section className="email-index app-container">
            <EmailAside onFolderChange={onFolderChanged} unreadCount={unreadCount}/>
            <div className="app-main">
                <EmailFilter filters={filters} onFiltersChange={onFiltersChanged}/>
                <EmailList emails={emails} onRemoveEmail={onRemoveEmail}/>
            </div>
        </section>

}

