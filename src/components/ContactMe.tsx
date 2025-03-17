'use client'

import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

// EmailJS Credentials
const EMAILJS_USER_ID = 'OxRwESLP4OHm3YASX'
const EMAILJS_TEMPLATE_ID = 'template_94yha3r'
const EMAILJS_SERVICE_ID = 'service_dtg5rol'

interface FormData {
  from_name: string
  reply_to: string
  subject: string
  message: string
  [key: string]: string // Add index signature to satisfy Record<string, unknown>
}

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<string>('')

  useEffect(() => {
    // Initialize emailjs only on the client side
    if (typeof window !== 'undefined') {
      emailjs.init(EMAILJS_USER_ID)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        formData
      )
      console.log('Email sent successfully:', result.text)
      setStatus('Message sent successfully!')
      setFormData({ 
        from_name: '', 
        reply_to: '', 
        subject: '', 
        message: '' 
      })
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="py-12 px-4 md:px-16">
      <div className="max-w-3xl mx-auto animate-slide-in-top">
        <h2 className="font-jost font-bold tracking-wider text-2xl md:text-3xl">Contact Me</h2>
        <hr className="my-4" />
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="from_name" className="block mb-2">Name</label>
            <input
              type="text"
              className="w-full bg-navy-blue bg-opacity-30 border border-gray-600 rounded py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-accent"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="reply_to" className="block mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-navy-blue bg-opacity-30 border border-gray-600 rounded py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-accent"
              id="reply_to"
              name="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block mb-2">Subject</label>
            <input
              type="text"
              className="w-full bg-navy-blue bg-opacity-30 border border-gray-600 rounded py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-accent"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              className="w-full bg-navy-blue bg-opacity-30 border border-gray-600 rounded py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-red-accent"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-red-accent hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
        
        {status && (
          <p className={`mt-4 ${status.includes('successfully') ? 'text-green-400' : 'text-yellow-300'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  )
}

export default ContactMe