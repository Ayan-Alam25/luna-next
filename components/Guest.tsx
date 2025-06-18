import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const Guest = () => {
    const Testimonials = [
      {
        quote:
          `"Luna helped me identify my late-night screen time as the main cause of my poor sleep quality."`,
        author: "Emily K.",
        role: "Graphic Designer",
      },
      {
        quote:
          `"I've gained an extra hour of productive time each day thanks to better sleep with Luna."`,
        author: "John D.",
        role: "Software Engineer",
      },
      {
        quote:
          `"The sleep recommendations actually work! My energy levels have never been better."`,
        author: "Saina S.",
        role: "Teacher",
      },
    ];

    const Faqs = [
      {
        question: "How does Luna track my sleep?",
        answer:
          "Luna uses your device's sensors or manual input to analyze sleep duration and quality. Our algorithms detect sleep patterns and provide detailed insights about your sleep cycles.",
      },
      {
        question: "Is my sleep data private and secure?",
        answer:
          "Absolutely. We prioritize your privacy and all sleep data is encrypted. We never share your personal information with third parties without your consent.",
      },
      {
        question: "Do I need special equipment to use Luna?",
        answer:
          "No special equipment needed! Luna works with your smartphone or wearable device. For best results, we recommend keeping your device nearby while you sleep.",
      },
      {
        question: "How can Luna help improve my sleep?",
        answer:
          "Luna identifies patterns in your sleep habits, provides personalized recommendations, and helps you establish healthy bedtime routines through science-backed methods.",
      },
      {
        question: "Is there a free version available?",
        answer:
          "Yes, Luna offers a free version with basic tracking features. Our premium version unlocks advanced analytics and personalized sleep improvement plans.",
      },
    ];

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-4 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-700  to-violet-700 bg-clip-text text-transparent">
            Transform Your Sleep with Luna
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Discover personalized sleep insights, track your patterns, and wake
            up feeling refreshed with our science-backed sleep tracking
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <SignInButton>
              <button className="bg-gradient-to-r from-blue-400 via-blue-700  to-violet-700 hover:from-blue-500 hover:via-blue-800 hover:to-violet-800  text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all hover:shadow-lg">
                Get Started - It's Free
              </button>
            </SignInButton>
            <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/sleep-analysis.jpg"
            width={600}
            height={400}
            alt="Luna Sleep Dashboard Preview"
            className="w-full max-w-lg rounded-xl shadow-xl border border-gray-200"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {Faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* Support CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-6 py-2 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by Thousands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-700 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-blue-600 font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guest;
