import React from 'react'

function Footer({name, email, phone, website, bankName, bankAccount}) {
  return (
    <>
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li><span className="font-bold">Your name :</span> {name}</li>
            <li><span className="font-bold">Your email :</span> {email}</li>
            <li><span className="font-bold">Phone number :</span> {phone}</li>
            <li><span className="font-bold">Bank Name :</span> {bankName}</li>
            <li><span className="font-bold">Account holder name :</span> {name}</li>
            <li><span className="font-bold">Account number :</span> {bankAccount}</li>
            <li><span className="font-bold">Website :</span> 
            <a target='_blank' href={website} rel="noopener noreferrer">{website}</a></li>
          </ul>
        </footer>
    </>
  )
}

export default Footer