import React from 'react';

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white p-5">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4 text-lg">
        Feel free to reach out via email at: 
        <a href="mailto:ashii14245@gmail.com" className="text-yellow-300 underline ml-1">ashii14245@gmail.com</a>
      </p>
      <p className="text-lg mb-4">If you have any questions or feedback, don't hesitate to contact us!</p>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="name">Name:</label>
          <input type="text" id="name" className="p-2 w-full rounded" placeholder="Your Name" required />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="message">Message:</label>
          <textarea id="message" className="p-2 w-full rounded" rows="4" placeholder="Your Message" required></textarea>
        </div>
        <button type="submit" className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-400 transition duration-200">Send Message</button>
      </form>
    </main>
  );
};

export default ContactPage;
