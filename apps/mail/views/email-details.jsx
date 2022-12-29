const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import {EmailAside} from "../cmps/email-aside.jsx"
import {EmailSearch} from "../cmps/email-search.jsx"
import {emailService} from "../../mail/services/email.service.js"

export function EmailDetails (){

  const [email, setEmail] = useState(null)
  const {emailId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadEmail()
}, [])

function loadEmail() {
  emailService.get(emailId)
  .then((email) => setEmail(email))
}
function onGoBack() {
  navigate(-1)
}

if (!email) return <div>Loading...</div>
  return <section className="email-details">
            <EmailAside/>
            <div className="app-main">
                <EmailSearch/>
                <button className="back-btn" onClick={onGoBack}>Go back</button>
            </div>
        </section>
}


// const { Link } = ReactRouterDOM


