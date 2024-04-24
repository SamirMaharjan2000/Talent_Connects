import React from 'react'
import {DevicePhoneMobileIcon , EnvelopeOpenIcon ,MapPinIcon} from '@heroicons/react/24/solid'

const Contact = () => {
  return (
        <div className=" py-12 px-4 z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <div className="flex justify-center items-stretch gap-20">
          {/* Contact Information Card */}
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl text-gray-900 font-bold mb-3">Get in Touch</h3>
              <ul className="text-gray-600">
              <li className="mb-3 flex items-center space-x-2">
                <DevicePhoneMobileIcon className="w-8 text-gray-500" />
                <span>
                    <strong>Phone:</strong> <br />+977-9801850670, +977-9801850670
                </span>
                 </li>
                <li className="mb-3 flex items-center space-x-2">
                <EnvelopeOpenIcon className="w-8 text-gray-500" />
                  <span>
                  <strong>Email:</strong> gip@talentconnects.com.np
                  </span>
                </li>
                <li className="mb-3 flex items-center space-x-2 ">
                <MapPinIcon className="w-8 text-gray-500" />
                  <span>
                    <strong>Address:</strong> Ekantakuna , Lalitpur , 44600
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Paragraph Card */}
          <div className="flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl text-gray-900 font-bold mb-3">About Us</h3>
              <p className="text-gray-600">
              Have questions or need more information? Reach out to our dedicated team. We're here to help you navigate your journey to international professional growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
