import React from 'react'
import emailjs from 'emailjs-com'

function Mailer() {
  function sendMail(e){
      e.preventDefault();

      emailjs.sendForm(
          'service_kwurj0j',
          'template_0vpujlu',
          e.target,
          'Zbk2e_JjzLLQFZQ6E'
      ).then(res => {
          console.log(res);
      }).catch(err => {
          console.log(err);
      })
  }

  return (
    <div className="pb-10 mt-10">
        <h2 className="text-2xl font-semibold underline underline-offset-1 decoration-emerald-500 mb-8">Send your message to us..</h2>
        <form className="max-w-[600px]" onSubmit={sendMail}>
            <div className="flex flex-col mb-4">
                <label className="text-md mb-1">Name</label>
                <input type="text" name="name" className='border-2 border-gray-500 rounded px-2 py-2 outline-none' required/>
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-md mb-1">Email</label>
                <input type="email" name="user_email" className='border-2 border-gray-500 rounded px-2 py-2 outline-none' required />
            </div>
            <div className="flex flex-col mb-4">
                <label className="text-md mb-1">Message</label>
                <textarea name="message" rows="4" className='border-2 border-gray-500 rounded px-2 py-2 outline-none' required ></textarea>
            </div>
            <button type="submit" className="bg-emerald-100 text-emerald-500 font-semibold px-8 py-2 rounded text-md">Send</button>
        </form>
    </div>
  )
}

export default Mailer