import { utilService } from "../../../services/util.service.js"
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from "../../../services/storage.service.js"


const EMAIL_KEY = 'emailDB'
_createEmails()

export const emailService = {
  query,
  remove,
  get,
  getDefaultFilter
}

const loggedinUser = { email: 'hila@appsus.com', fullname: 'Hila Shor' }


function _createEmails() {
  let emails = storageService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = [
      {
        id: 'e138',
        subject: 'Miss you Hila!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        from: 'momo@momo.com',
        status: 'inbox',
        isStarred: true
      },
      {
        id: 'e101',
        subject: 'Sollark invited you to Sollark/app-sus',
        body: 'You can accept or decline this invitation. You can also head over',
        isRead: false,
        sentAt: 1551133936594,
        from: 'momo@momo.com',
        status: 'inbox',
        isStarred: false
      },
      {
        id: 'e555',
        subject: 'Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error, adipisci fugiat, minima nam rem est ipsa natus unde praesentium ratione, neque illum quas explicabo',
        isRead: true,
        sentAt: 3456733930594,
        from: 'dodo@momo.com',
        status: 'inbox',
        isStarred: false
      },
      {
        id: 'e556',
        subject: 'sent Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error, adipisci fugiat, minima nam rem est ipsa natus unde praesentium ratione, neque illum quas explicabo',
        isRead: true,
        sentAt: 3456733930594,
        from: 'momo@momo.com',
        to: 'dodo@momo.com',
        status: 'sent'
      },
      {
        id: 'e557',
        subject: 'draft Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error, adipisci fugiat, minima nam rem est ipsa natus unde praesentium ratione, neque illum quas explicabo',
        isRead: true,
        sentAt: 3456733930594,
        from: 'momo@momo.com',
        to: 'dodo@momo.com',
        status: 'draft'
      },
      {
        id: 'e558',
        subject: 'trash Lorem ipsum dolor',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt error, adipisci fugiat, minima nam rem est ipsa natus unde praesentium ratione, neque illum quas explicabo',
        isRead: true,
        sentAt: 3456733930594,
        from: 'momo@momo.com',
        to: 'dodo@momo.com',
        status: 'trash'
      }
    ]
    storageService.saveToStorage(EMAIL_KEY, emails)
  }
  console.log(emails)

}
function getDefaultFilter() {
  return { txt: '', status: 'inbox' }
}
function _filterEmails(emails, criteria = {}) {
  let filtered

  // filter by status
  let status = criteria.status
  if (!status) {
    status = 'inbox'
  }
  filtered = emails.filter(email => email.status === status)

  // filter by search term
  if (criteria.txt) {
    filtered = filtered.filter(email =>
      email.subject.toLowerCase().includes(criteria.txt) ||
      email.body.toLowerCase().includes(criteria.txt))
  }

  // filter by read 
  if (criteria.isRead === true || criteria.isRead === false) {
    filtered = filtered.filter(email => email.isRead === criteria.isRead)
  }

  // filter by starred 
  if (criteria.isStarred === true) {
    filtered = filtered.filter(email => email.isStarred)
  }

  console.log('emailService _filterEmails', filtered)

  return filtered
}

function query(criteria = {}) {
  console.log('emailService query criteria', criteria)
  return asyncStorageService.query(EMAIL_KEY)
    .then(emails => _filterEmails(emails, criteria))
}

function remove(emailId) {
  return asyncStorageService.remove(EMAIL_KEY, emailId)
}

function get(emailId) {
  return asyncStorageService.get(EMAIL_KEY, emailId)
}
