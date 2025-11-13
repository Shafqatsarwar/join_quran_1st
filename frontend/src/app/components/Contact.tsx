// frontend/src/app/components/Contact.tsx
const Contact = () => {
  return (
    <section id="contact-us" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
          <p className="text-lg leading-relaxed text-center mb-6">
            You are welcome to send us suggestions, comments, feedback and complaints by filling this form or by sending us mail.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send Message
              </button>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-gray-700">Phone Number UK: +442081239145</p>
            <p className="text-gray-700">Phone Number Pakistan: +923244279017</p>
            <p className="text-gray-700">Email: onlinequran50@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
