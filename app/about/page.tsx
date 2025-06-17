import Image from "next/image";
import Link from "next/link";

const Features = [
    {
      title: "Smart Sleep Tracking",
      description:
        "Automatically records your sleep duration and quality with easy manual adjustments.",
      icon: "⏱️", 
    },
    {
      title: "Personalized Insights",
      description:
        "Sleep analysis identifies what affects your sleep and suggests improvements.",
      icon: "🧠", 
    },
    {
      title: "Sleep Trends",
      description:
        "Visualize your progress over time with interactive charts and weekly reports.",
      icon: "📊", 
    },
  ]

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero section */}
      <section className="flex flex-col items-center py-20 px-8 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-700 to-violet-700 bg-clip-text text-transparent">
          About Luna
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl text-center">
          Your intelligent sleep companion, designed to help you understand and
          optimize your rest.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Vision for Better Sleep
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <Image
                src="/sleep-analysis.jpg"
                width={450}
                height={100}
                alt="Sleep analysis"
                priority
                className="rounded-lg mt-10 shadow-lg  my-auto bg-cover"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 mb-6">
                At Luna, we believe quality sleep is the foundation of a healthy
                life. Our mission is to empower you with data-driven insights
                that transform your sleep from an afterthought into a priority.
              </p>
              <p className="text-lg text-gray-600">
                By combining sleep science with intuitive technology, we help
                you uncover patterns, set goals, and build sustainable sleep
                habits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            How Luna Helps You Rest Better
          </h2>
          <p className="text-xl text-gray-500 text-center mb-12 max-w-3xl mx-auto">
            Discover the features that make Luna different
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/sleepy-woman.jpg"
                width={550}
                height={400}
                alt="Sleep analysis"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Born From Personal Experience
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Luna began as a personal project when I realized how difficult
                it was to track sleep meaningfully. Existing apps either showed
                raw data without insights or made exaggerated claims without
                evidence. I wanted to build something that actually helps people
                understand their sleep patterns.
              </p>

              <p className="text-lg text-gray-600">
                What started as a coding challenge evolved into a full-fledged
                sleep tracker. Every feature - from the analytics to the
                intuitive interface - was crafted through research, user
                feedback, and countless iterations. It's still growing, but the
                goal remains: create tools that make sleep improvement
                accessible and data-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-20 px-8 bg-gradient-to-br from-indigo-600 to-violet-600 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Sleep?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who've improved their sleep with Luna
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium shadow-md transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
