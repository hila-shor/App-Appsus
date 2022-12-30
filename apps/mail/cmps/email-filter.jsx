export function EmailFilter({filters, onFiltersChange}) {

    function onSearchTermChange({target}) {
        onFiltersChange({txt: target.value})
    }

    function onReadStatusChange({target}) {
        const status = target.value
        onFiltersChange({isRead: status === 'all' ? null : status === 'read'})
    }

    let selectedReadStatus = 'all'
    if (filters.isRead === true) {
        selectedReadStatus = 'read'
    } else if (filters.isRead === false) {
        selectedReadStatus = 'unread'
    }

    return <section className='email-search   email'>
        <form>
            <input
                type="text"
                name="search"
                placeholder="Search emails"
                onChange={onSearchTermChange}
            />
            {filters.status === 'inbox' &&
                <select value={selectedReadStatus} onChange={onReadStatusChange}>
                    <option value='all'>All</option>
                    <option value='read'>Read</option>
                    <option value='unread'>Unread</option>
                </select>
            }
        </form>
    </section>;
}