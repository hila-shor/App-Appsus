const { useState, useEffect, useRef } = React

export function EmailFilter({filters,  onSetFilter}) {
    console.log(' EmailFilter filters', filters)

    const [filterByToEdit, setFilterByToEdit]= useState(filters)
    console.log(' EmailFilter filters', filterByToEdit)

    function handleChange({target}){
        let {value, name:field, type}= target
        value = type === 'number'? +value : value;
        setFilterByToEdit((prevFilter)=>{
          return {...prevFilter, [field]:value}
        })
        onSetFilter(filterByToEdit)
      }


    function onReadStatusChange({target}) {
        const status = target.value
        onSetFilter({isRead: status === 'all' ? null : status === 'read'})
        console.log('onReadStatusChange filterByToEdit' , filterByToEdit)
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
                name="txt"
                placeholder="Search emails"
                onChange={handleChange}
                value={filterByToEdit.txt}
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