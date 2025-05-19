export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="border-b border-gray-700 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-100"># Blogs !!</h1>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 text-sm">
            Last updated: 19 May 2025
          </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 text-sm">Time : 17:37 PM </span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 text-sm">Blogs Hosted on Hashnode </span>
        </div>

        <div className="space-y-6 leading-relaxed">
          <p>
            Hi everyone. I am a student. I write blogs on various topics, mostly
            related to cloud computing and DevOps. I primarily work with AWS and
            am currently preparing for relevant certifications.
          </p>
          <p>
            Most of my content is technical in nature. I write about
            infrastructure, automation, and other aspects of cloud platforms. I
            also occasionally write non-technical blogs, mostly around personal
            observations and how writing has influenced my thinking
          </p>
          <p>
            Overall, I use blogging to document what I learn and share it with
            others in the field.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-800">
            <a
              href="https://blog.cloudkinshuk.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              → Visit My Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
