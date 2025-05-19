
export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-gray-300 p-8 font-mono">
      <div className="max-w-3xl mx-auto">
        <div className="border-b border-gray-700 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-100"># My Tech Blogs</h1>
        </div>

        <div className="space-y-6 leading-relaxed">
          <p>
            I write blogs to document and share my technical journey — from cloud architecture and DevOps pipelines to
            AWS automation and developer tools. Each blog post reflects a real-world learning curve, distilled into
            clear and actionable insights.
          </p>

          <p>
            As a college student exploring the world of scalable infrastructure, serverless apps, and CI/CD automation,
            my goal is to make complex topics accessible for students like me. I focus on writing technically sound yet
            beginner-friendly content that bridges the gap between theory and hands-on implementation.
          </p>

          <p>
            Whether you're setting up DNS with Route 53, deploying on AWS Amplify, or building your own cloud-native
            blog — these blogs offer the kind of practical knowledge I wish I had when I started. I believe that writing
            is a superpower for developers — it sharpens clarity, builds credibility, and helps the community grow
            together.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-800">
            <a
              href="https://blog.cloudkinshuk.dev"
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
  )
}
