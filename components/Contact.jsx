import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl font-bold text-neutral-100">
        Get In Touch
      </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-lg font-medium text-neutral-200">
          {CONTACT.address}
        </p>
        <p className="my-4 text-lg font-medium text-neutral-200">
          {CONTACT.phoneNo}
        </p>
        <a
          href="#"
          className="my-4 inline-block text-lg font-medium text-purple-600 hover:text-purple-700 transition duration-300 underline"
        >
          {CONTACT.email}
        </a>
      </div>

      {/* Contact form */}
      <form className="mt-10 mx-auto max-w-md">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-neutral-100 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded border border-neutral-500 focus:outline-none focus:border-neutral-700 text-neutral-300 placeholder-neutral-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-neutral-100 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded border border-neutral-500 focus:outline-none focus:border-neutral-700 text-neutral-800 placeholder-neutral-800"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-lg font-medium text-neutral-500 mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded border border-neutral-500 focus:outline-none focus:border-neutral-700 text-neutral-300 placeholder-neutral-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
