import {FaLink , FaGithub , FaChartLine} from "react-icons/fa";

const WebsiteOptimization = () => {
    
  const performanceOptimization = {
    title: "Website Performance Optimization",
    description:
      "Optimized portfolio for SEO and speed using Lighthouse and Core Web Vitals, achieving top scores across all metrics.",
    liveUrl: "https://pagespeed.web.dev/",
    technologies: ["Lighthouse", "Core Web Vitals", "SEO Optimization", "Performance Monitoring"],
    status: "Optimized",
    performanceScores: [
      {
        score: 97,
        label: "Desktop Performance",
        color: "text-green-600",
        description: "Excellent loading speed",
      },
      {
        score: 71,
        label: "Mobile Performance",
        color: "text-orange-600",
        description: "Good mobile experience",
      },
      {
        score: 89,
        label: "Accessibility",
        color: "text-orange-600",
        description: "Strong accessibility",
      },
      {
        score: 100,
        label: "SEO Score",
        color: "text-green-600",
        description: "Perfect SEO optimization",
      },
    ],
    scoreRanges: [
      { color: "bg-red-500", range: "0-49", label: "Poor" },
      { color: "bg-orange-500", range: "50-89", label: "Needs Improvement" },
      { color: "bg-green-500", range: "90-100", label: "Good" },
    ],
  }
  return (
            <section>
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-lg p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#252525] rounded-lg">
                    <FaChartLine className="text-red-500" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">Website Performance Optimization</h2>
                </div>
    
                <p className="text-gray-300 mb-4">{performanceOptimization.description}</p>
    
                <div className="flex flex-wrap gap-3 mb-6">
                  <a
                    href={performanceOptimization.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-lg transition-colors"
                  >
                    <FaLink />
                    Check Performance Score
                  </a>
                  <a
                    href="https://blog.cloudkinshuk.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#252525] hover:bg-[#303030] text-white rounded-lg transition-colors"
                  >
                    <FaGithub />
                    Read Blog
                  </a>
                </div>
    
                <div className="space-y-4">
                  <h3 className="font-semibold border-b border-gray-800 pb-2">Performance Metrics</h3>
    
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {performanceOptimization.performanceScores.map((score, idx) => (
                      <div key={idx} className="text-center p-4 bg-[#1e1e1e] rounded-lg">
                        <div className="text-3xl font-bold mb-2 text-red-500">{score.score}</div>
                        <p className="font-semibold text-sm mb-1">{score.label}</p>
                        <p className="text-xs text-gray-400">{score.description}</p>
                      </div>
                    ))}
                  </div>
    
                  <div className="text-sm text-gray-400 p-4 bg-[#1e1e1e] rounded-lg">
                    <p className="mb-2">
                      Performance scores calculated using Google Lighthouse and may vary based on network conditions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {performanceOptimization.scoreRanges.map((range, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-3 h-3 ${range.color} rounded`}></div>
                          <span className="text-xs">
                            {range.range} - {range.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
    
                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="font-semibold mb-2">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {performanceOptimization.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-[#252525] text-white px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
  )
}

export default WebsiteOptimization
