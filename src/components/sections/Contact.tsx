import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const Contact = () => (
  <section id="contact" className="bg- from-gray-100 to-gray-200 dark:from-black dark:to-gray-1000">
    <Container>
      <div className="text-center mb-8">
        <Title>Get In Touch</Title>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Have questions? We're here to help you get started on your sports journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-600 shadow-lg">
          <div className="font-semibold mb-2 text-gray-800 dark:text-white">Contact Information</div>
          <div className="mb-2 text-gray-600 dark:text-gray-300">Address: IIT Palakkad, Kerala, India - 678623</div>
          <div className="mb-2 text-gray-600 dark:text-gray-300">Phone: +91 4923 232 300</div>
          <div className="mb-2 text-gray-600 dark:text-gray-300">Email: sports@iitpkd.ac.in</div>
        </div>
        <form className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-600 shadow-lg flex flex-col gap-4">
          <input 
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" 
            placeholder="Name" 
          />
          <input 
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none" 
            placeholder="Email" 
          />
          <textarea 
            className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none min-h-[120px]" 
            placeholder="Message" 
          />
          <button className="py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg hover:shadow-purple-500/25">
            Send Message
          </button>
        </form>
      </div>
    </Container>
  </section>
);