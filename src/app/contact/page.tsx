// pages/contact.js or app/contact/page.js
"use client";

import React, { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  })

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  const handleWhatsAppContact = () => {
    const phoneNumber = "+254714891020" // Replace with your actual WhatsApp number
    const message = "Hello! I'm interested in your event planning services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-[#111418]">
      <div className="px-1 sm:px-8 lg:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          
          {/* Hero Section */}
        

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row gap-8 px-4 py-8">
            
            {/* Contact Form */}
            <div className="flex-1">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                Send Us a Message
              </h2>
              <p className="text-[#9dabb8] text-base font-normal leading-normal pb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-white text-sm font-medium block mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 bg-[#1a1f24] border border-[#2a3038] rounded-lg text-white placeholder-[#9dabb8] focus:border-[#1672ce] focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full h-12 px-4 bg-[#1a1f24] border border-[#2a3038] rounded-lg text-white placeholder-[#9dabb8] focus:border-[#1672ce] focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="text-white text-sm font-medium block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-12 px-4 bg-[#1a1f24] border border-[#2a3038] rounded-lg text-white placeholder-[#9dabb8] focus:border-[#1672ce] focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

    

                <div>
                  <label className="text-white text-sm font-medium block mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#1a1f24] border border-[#2a3038] rounded-lg text-white placeholder-[#9dabb8] focus:border-[#1672ce] focus:outline-none transition-colors resize-vertical"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#1672ce] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-80 flex-shrink-0">
              <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
                Get in Touch
              </h2>
              <p className="text-[#9dabb8] text-base font-normal leading-normal pb-6">
                Ready to start planning? Reach out to us through any of these channels.
              </p>

              <div className="space-y-6">
                {/* WhatsApp Contact */}
                <div className="bg-[#1a1f24] rounded-lg p-4 border border-[#2a3038]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">WhatsApp</h3>
                      <p className="text-[#9dabb8] text-sm">Quick response guaranteed</p>
                    </div>
                  </div>
                  <button
                    onClick={handleWhatsAppContact}
                    className="w-full h-10 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#20b858] transition-colors"
                  >
                    Start Chat
                  </button>
                </div>

                {/* Email */}
                <div className="bg-[#1a1f24] rounded-lg p-4 border border-[#2a3038]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1672ce] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-[#9dabb8] text-sm">destyeventsltd@gmail.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#1a1f24] rounded-lg p-4 border border-[#2a3038]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1672ce] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <p className="text-[#9dabb8] text-sm">+254 714 891 020</p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="bg-[#1a1f24] rounded-lg p-4 border border-[#2a3038]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1672ce] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Office Hours</h3>
                      <p className="text-[#9dabb8] text-sm">Mon - Fri: 9AM - 6PM</p>
                      <p className="text-[#9dabb8] text-sm">Sat: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
         

        </div>
      </div>
    </div>
  )
}