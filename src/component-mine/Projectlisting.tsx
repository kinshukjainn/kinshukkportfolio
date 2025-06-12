import { FaRocket, FaLink, FaGithub, FaAws, FaReact, FaDocker, FaLinux, FaDiscord, FaCode } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiCanva } from "react-icons/si";
const Projectlisting = () => {
  const projects = [
    {
      title: "Tech Blog Platform",
      description:
        "Built a custom-domain tech blog using Hashnode to share cloud, DevOps, and React insights, optimized for SEO and brand visibility.",
      liveUrl: "https://blog.cloudkinshuk.in",
      technologies: [
        "Hashnode",
        "Amazon Route 53",
        "Hostinger",
        "DNS Management",
        "Custom Domain",
        "CDN",
      ],
      status: "Active",
    },
    {
      title: "PassGentool (Coming Soon)",
      description: "This Project is in pre-building stage.",
      liveUrl: "#",
      repoUrl: "#",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Amazon Route 53",
      ],
      status: "Building stage",
      featured: false,
    },
  ];
  
    const techStack = [
      {
        category: "Cloud & Infrastructure",
        items: [{ name: "AWS", icon: <FaAws />, level: "Intermediate", years: "2+" }],
      },
      {
        category: "Frontend Development",
        items: [{ name: "React", icon: <FaReact />, level: "Intermediate", years: "2+" }],
      },
      {
        category: "Backend & DevOps",
        items: [
          { name: "Docker", icon: <FaDocker /> },
          { name: "Kubernetes", icon: <SiKubernetes /> },
          { name: "Terraform", icon: <SiTerraform /> },
        ],
      },
      {
        category: "Tools & Platforms",
        items: [
          { name: "Git/GitHub", icon: <FaGithub />, level: "Advanced", years: "3+" },
          { name: "Linux", icon: <FaLinux />, level: "Intermediate", years: "2+" },
          { name: "Discord", icon: <FaDiscord />, level: "Advanced", years: "3+" },
          { name: "Canva", icon: <SiCanva />, level: "Advanced", years: "2+" },
        ],
      },
    ]
  

  return (
    <>
      <section>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-lg p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#252525] rounded-lg">
              <FaCode className="text-red-500" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Technical Skills</h2>
          </div>

          <p className="text-gray-300 mb-4">
            Technologies and tools I work with
          </p>

          <div className="space-y-4">
            {techStack.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-semibold text-white mb-2 pb-1 border-b border-gray-800">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {category.items.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-2 p-2 bg-[#1e1e1e] rounded-lg hover:bg-[#252525] transition-colors"
                    >
                      <div className="text-red-500">{tech.icon}</div>
                      <span className="text-sm font-medium truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-lg p-6 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#252525] rounded-lg">
              <FaRocket className="text-red-500" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Other Projects</h2>
          </div>

          <p className="text-gray-300 mb-4">
            Recent work and contributions showcasing technical expertise
          </p>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className="border-b border-gray-800 pb-6 last:border-b-0"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                      FEATURED
                    </span>
                  )}
                  <span className="text-xs bg-[#252525] text-white px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-black rounded-lg transition-colors"
                  >
                    <FaLink />
                    Live Demo
                  </a>
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#252525] hover:bg-[#303030] text-white rounded-lg transition-colors"
                    >
                      <FaGithub />
                      Source Code
                    </a>
                  )}
                </div>

                {project.technologies && (
                  <div className="pt-4 border-t border-gray-800">
                    <h4 className="font-semibold mb-2">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-[#252525] text-white px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projectlisting;
