"use client";

const ContactPage = () => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const form = e.currentTarget; 
      const formData = new FormData(form);

      const name = formData.get("name")?.toString() || "";
      const email = formData.get("email")?.toString() || "";
      const message = formData.get("message")?.toString() || "";

      // Validate inputs 
      if (!name.trim() || !email.trim() || !message.trim()) {
        alert("Please fill in all fields");
        return;
      }

      // Validate email format
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      try {
        const mailtoLink = `mailto:notty.aayan100@gmail.com?subject=Message from ${encodeURIComponent(
          name
        )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
        form.reset();
      } catch (error) {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      }
    };

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-8 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-700 to-violet-700 bg-clip-text text-transparent">
          Contact Luna
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
          We're here to help you sleep better. Reach out with questions,
          feedback, or support requests.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Contact Form Section */}
        <section className="py-16 px-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-10 ">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
              Send us a message
            </h2>
            <p className="text-gray-500 text-center mb-8">
              We typically respond within 24 hours
            </p>
            <form
              className="max-w-2xl mx-auto space-y-6"
              onSubmit={(e) => {
                handleFormSubmit(e);
              }}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:blue-purple-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:blue-purple-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">support@luna.com</p>
              <p className="text-gray-500 text-sm mt-1">
                Fastest response time
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">+971 12-345-6789</p>
              <p className="text-gray-500 text-sm mt-1">Sun-Thu, 9AM-5PM GST</p>
            </div>

            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">123 Luna St</p>
              <p className="text-gray-600">Abu Dhabi, UAE</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
