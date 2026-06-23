import React from 'react'

function ContactUsui() {
  return (
    <section class="text-gray-600 body-font relative">
      <div class="absolute inset-0 bg-gray-300">
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d27229.367056890802!2d74.41612800000001!3d31.450726400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x391908851a9021f5%3A0x664be8ddaf32861f!2sLahore%20Leads%20University%20-%20LLU%2C%20Kamahan%20-%20Lidher%20Rd%2C%20Formanites%20Housing%20Scheme%20Lahore%2C%20Pakistan!3m2!1d31.4474655!2d74.41512159999999!5e0!3m2!1sen!2s!4v1781959165034!5m2!1sen!2s" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}></iframe>
      </div>
      <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
          <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  )
}

export default ContactUsui
