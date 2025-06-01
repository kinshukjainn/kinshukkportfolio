export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4">
                Blogs
              </h1>
              <div className="w-12 h-0.5 bg-blue-500"></div>
            </div>

            {/* Main Content Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 sm:p-8 lg:p-10 mb-8">
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Last updated: 19 May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>17:37 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Hosted on Hashnode</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Hi everyone. I am a student. I write blogs on various topics,
                  mostly related to cloud computing and DevOps. I primarily work
                  with AWS and am currently preparing for relevant
                  certifications.
                </p>
                <p className="text-base sm:text-lg">
                  Most of my content is technical in nature. I write about
                  infrastructure, automation, and other aspects of cloud
                  platforms. I also occasionally write non-technical blogs,
                  mostly around personal observations and how writing has
                  influenced my thinking.
                </p>
                <p className="text-base sm:text-lg">
                  Overall, I use blogging to document what I learn and share it
                  with others in the field.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <a
                  href="https://blog.cloudkinshuk.in"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm text-sm font-medium transition-colors duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Visit My Blog
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4">
                Reasons for Starting Blogging
              </h2>
              <div className="w-12 h-0.5 bg-blue-500"></div>
            </div>

            {/* Content Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 sm:p-8 lg:p-10 mb-8">
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Last updated: 20 May 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>00:09 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Hosted on Hashnode</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  I started blogging in 2025 as a way to stay consistent with my
                  learning and break down complex cloud concepts into simpler
                  terms. Coming from a non-CS background in a tier 3 college, I
                  often struggled to find relatable explanations — so I began
                  writing to fill that gap for myself and others like me.
                </p>
                <p className="text-base sm:text-lg">
                  Writing helps me reinforce what I learn, build a personal
                  knowledge base, and connect with a community of learners and
                  professionals who share similar goals.
                </p>
                <p className="text-base sm:text-lg">
                  Want to know more about the reasons why I started blogging?
                  Check out my detailed blog post on Hashnode for the complete
                  story.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <a
                  href="https://blog.cloudkinshuk.in/reasons-why-you-should-start-blogging-to-build-you-career"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm text-sm font-medium transition-colors duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
      </section>

      {/* Second Section */}
      <section className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-4">
                How i deployed my website on aws ??
              </h2>
              <div className="w-12 h-0.5 bg-blue-500"></div>
            </div>

            {/* Content Card */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 sm:p-8 lg:p-10 mb-8">
              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-400 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Last updated: 1 June 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>12:12 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <span>Hosted on Hashnode</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  In today’s tech-driven world, having a standout portfolio
                  website isn't just a bonus—it’s essential. With the rise of AI
                  tools and competition in every field, I realized it was time
                  for me to build something that would reflect my skills,
                  personality, and projects. So I started my journey, and now, I
                  have my very own portfolio website—hosted with a custom domain
                  and powered by modern web technologies.
                </p>
                <p className="text-base sm:text-lg">
                  In this blog, I’ll guide you step-by-step on: What tools and
                  technologies I used 
                </p>
                <p className="text-base sm:text-lg">
                 How I deployed it on AWS Folder structure
                  & configuration How YOU can clone or replicate it with zero
                  prior experience
                </p>
                <p className="text-base sm:text-lg">
                  In this blog, I’ll guide you step-by-step on: What tools and
                  technologies I used How I deployed it on AWS Folder structure
                  & configuration How YOU can clone or replicate it with zero
                  prior experience
                </p>
                <p className="text-base sm:text-lg">
                  Want to know more about the how i did it ?
                  Check out my detailed blog post on Hashnode for the complete
                  story.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-800/50">
                <a
                  href="https://blog.cloudkinshuk.in/reasons-why-you-should-start-blogging-to-build-you-career"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-sm text-sm font-medium transition-colors duration-200 hover:shadow-lg hover:shadow-blue-600/25"
                >
                  Read Full Article
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
      </section>
    </div>
  );
}
