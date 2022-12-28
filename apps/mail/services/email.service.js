import { utilService } from "../../../services/util.service.js"
import { asyncStorageService } from '../../../services/async-storage.service.js'
import { storageService } from "../../../services/storage.service.js"


const EMAIL_KEY = 'emailDB'
_createEmails()

export const emailService = {
  query
}

const loggedinUser = { email: 'hila@appsus.com', fullname: 'Hila Shor' }


function _createEmails() {
  let emails = storageService.loadFromStorage(EMAIL_KEY)
  if (!emails || !emails.length) {
    emails = [
      {
        id: 'e101',
        criteria: {
          status: 'send'
        },
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
      },
      {
        id: 'e101',
        criteria: {
          status: 'send'
        },
        subject: 'Sollark invited you to Sollark/app-sus',
        body: 'You can accept or decline this invitation. You can also head over to https://github.com/sollark/app-sus to check out the repository or visit @sollark to learn a bit more about them. This invitation will expire in 7 days.',
        isRead: false,
        sentAt: 1551133936594,
        to: 'momo@momo.com'
      }
    ]
    storageService.saveToStorage(EMAIL_KEY, emails)
  }
  console.log(emails)
}

// function getDefaultFilter() {
//   return { status: '' }
// }

function query() {

  return asyncStorageService.query(EMAIL_KEY)
    .then(emails => {
      return emails
    })
}