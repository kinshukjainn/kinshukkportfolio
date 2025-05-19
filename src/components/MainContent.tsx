import {
  FaAws,
  FaDocker,
  FaGithub,
  FaLinux,
  FaPython,
  FaReact,
  FaStar,
  FaCodeBranch,
  FaCode,
  FaInstagram,
  FaWhatsapp,
  FaDiscord,
  FaLinkedin,
  FaTwitter,
  FaHashtag,
} from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { SiKubernetes, SiCanva, SiTerraform, SiTailwindcss } from "react-icons/si"
import { TbExternalLink } from "react-icons/tb"
import { HiOutlineExternalLink } from "react-icons/hi"

export default function Portfolio() {
  const handleClick = async () => {
    const phoneNumber = "919172702501"
    const message = "Hi Kinshuk, I saw your website and wanted to connect."
    const encodedMessage = encodeURIComponent(message)
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    try {
      // Optional: API call to your server or webhook
      await fetch("https://your-api-endpoint.com/log-whatsapp-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          contactType: "WhatsApp",
        }),
      })

      // Redirect to WhatsApp link
      window.open(waUrl, "_blank")
    } catch (error) {
      console.error("Error logging WhatsApp click:", error)
      window.open(waUrl, "_blank") // Still open WhatsApp even if API fails
    }
  }

  // Tech stack data
  const techStack = [
    { icon: <FaAws className="text-gray-900" />, name: "AWS Cloud" },
    { icon: <FaReact className="text-gray-900" />, name: "React" },
    { icon: <FaPython className="text-gray-900" />, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-gray-900" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-gray-900" />, name: "Docker" },
    { icon: <SiKubernetes className="text-gray-900" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-gray-900" />, name: "Terraform" },
  ]

  // tools stack
  const toolsStack = [
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <FaGithub />, name: "Github" },
    { icon: <FaLinux />, name: "Linux" },
  ]

  // Certifications data
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (Upcoming)",
      link: "https://github.com/kinshukjainn/",
    },
    {
      title: "AWS Serverless Cloud Badge",
      link: "https://www.credly.com/badges/0bcd1190-2d68-45ff-91d9-32b65aa93ed8/public_url",
    },
    {
      title: "AWS Machine Learning Badge",
      link: "https://www.credly.com/badges/a0042ec2-cc6e-4a99-84de-a1516ee5775a/public_url",
    },
  ]

  return (
    <div className="bg-white  text-black min-h-screen p-4 md:p-8 max-w-6xl mx-auto">
      {/* Hero section */}
      <header className="py-8 md:py-12 border-b border-gray-800">
        <h1 className="text-4xl font-semibold md:text-4xl mb-4 text-blue-900 ">
          Aspiring <span className="text-gray-900">Cloud Engineer | Tech Enthusiast | Open to Collaborate</span>
        </h1>
        <p className="text-lg md:text-xl text-black mb-6">
          Currently exploring: AWS | Docker | Terraform | Blogging | React | AWS SDK 
        </p>
      </header>

      {/* Contact section */}
      <section id="contact" className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-black">
            <FaHashtag />
          </span>
          Open to Collaborate / Work
        </h2>

        <div className="mb-6">
          <p className="text-black mb-4">
     Hey there! I’m always open to connecting with peers, engineers, developers, or anyone curious about tech, cloud, or simply building cool things together.
          </p>

          <div className="space-y-2 mb-6">
            <p>
              <span className="text-gray-800 font-bold">Email: </span>
              <span className=" underline text-blue-900">kinshuk25jan04@gmail.com</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Alternate Email: </span>
              <span className="underline text-blue-900">jkinshuk@outlook.com</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4 py-4 border-t border-gray-800">
            {[
              {
                icon: <FaGithub size={30} />,
                label: "GitHub",
                url: "https://github.com/kinshukjainn",
              },
              {
                icon: <FaLinkedin size={30} />,
                label: "LinkedIn",
                url: "https://linkedin.com/in/kinshukjainn/",
              },
              {
                icon: <FaTwitter size={30} />,
                label: "Twitter",
                url: "https://x.com/realkinshuk04",
              },
              {
                icon: <FaInstagram size={30} />,
                label: "Instagram",
                url: "https://instagram.com/kinshukjain._/",
              }].map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="flex items-center gap-2 text-gray-900 hover:text-blue-900 transition-colors"
                aria-label={item.label}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
            <button
              onClick={handleClick}
              className="flex items-center gap-2 text-gray-900 hover:text-blue-900 transition-colors cursor-pointer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={30} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-3 p-2">
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-lg text-gray-900">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl md:text-3xl mb-6 flex items-center font-bold text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {toolsStack.map((tech, index) => (
            <div key={index} className="flex items-center gap-2 p-2">
              <span className="text-3xl text-black">{tech.icon}</span>
              <span className="text-lg text-gray-900">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-black">
            <FaHashtag />
          </span>
          Cloud Certifications
        </h2>

        {/* AWS Journey Banner */}
        <div className="mb-8 border-l-4 border-blue-800 pl-4">
          <h3 className="text-xl flex items-center mb-3 text-black font-medium">
            <FaAws className="mr-2 text-2xl" /> My AWS Certification Journey
          </h3>
          <p className="text-gray-900 mb-4">
            I recently scored 679/1000 on the AWS Certified Cloud Practitioner exam (CLF-C02). While just shy of
            passing, this experience has
            <span className="text-blue-900 font-medium"> strengthened my resolve </span>
            to master cloud fundamentals and accelerated my preparation for the more advanced Solutions Architect
            Associate certification by Q3 2025.
          </p>
        </div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="border-l-4 border-blue-800 pl-4">
              <div className="flex items-start">
                <FaAws className="text-black text-2xl mr-2 mt-1" />
                <h3 className="text-lg text-black font-medium">{cert.title}</h3>
              </div>
              <a
                href={cert.link}
                className="inline-flex items-center mt-2 text-white  bg-blue-700 p-1 px-2 border-black border-2  rounded-full hover:text-blue-100 transition-colors"
              >
                Verify through Credly
                <TbExternalLink className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 border-b border-gray-800">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Education
        </h2>

        <div className="space-y-8">
          <div className="border-l-4 border-blue-800 pl-4">
            <div>
              <h3 className="text-xl text-black font-medium">Bachelor of Technology, Electrical Engineering</h3>
              <p className="text-gray-900 mt-2">JSS Academy of Technical Education</p>
              <p className="text-gray-800 text-sm">Noida, Uttar Pradesh</p>
              <p className="mt-2 text-gray-800 font-mono">2022 - 2026</p>
            </div>
          </div>

          <div className="border-l-4 border-blue-800 pl-4">
            <div>
              <h3 className="text-xl text-black font-medium">Higher Secondary Education (XII)</h3>
              <p className="text-gray-900 mt-2">Sri Chaitnya Junior College</p>
              <p className="text-gray-800 text-sm">Pune, Maharashtra, India</p>
              <p className="mt-2 text-gray-800 font-mono">2020 - 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 border-b border-gray-900">
        <h2 className="text-3xl font-bold md:text-3xl mb-6 flex items-center text-black">
          <span className="mr-2 text-gray-900">
            <FaHashtag />
          </span>
          Projects / Work
        </h2>

        {/* Project 1 */}
        <div className="mb-12 border-l-4 border-blue-800 pl-4">
          <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
            <h3 className="text-2xl font-medium text-blue-900">Portfolio Website</h3>
            <a
              href="https://cloudkinshuk.in"
              className="inline-flex items-center text-white  bg-blue-700 p-1 px-2 border-black border-2  rounded-full hover:text-blue-100 transition-colors"
            >
              View Live <BiLinkExternal className="ml-1" />
            </a>
          </div>

          <h3 className="text-xl font-medium mt-6 mb-2 text-gray-800">Description:</h3>
          <p className="text-gray-900 mb-6">
            Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog
            integration and full cloud-backed deployment.
          </p>

          <h3 className="text-xl font-medium mb-2 text-gray-800">Challenges:</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-900">
            <li>
              Deploying my website on a cloud platform like AWS was a completely new experience for me. AWS is a vast
              platform with numerous complexities, and navigating through its features felt overwhelming at times.
            </li>
            <li>
              I was unfamiliar with the best practices for optimizing SEO (Search Engine Optimization) while building
              the website. Despite several attempts, I struggled to implement the right methods to enhance my website's
              SEO performance and overall user experience.
            </li>
            <li>
              As a beginner, I constantly worried about the potential high costs associated with deploying the website
              on AWS. The thought of exceeding the free-tier traffic limits and accumulating an unexpected, hefty bill
              added to my stress.
            </li>
            <li>
              When I purchased my own domain from Hostinger, I had no idea how to link it to my website. I faced
              several challenges in correctly redirecting my custom URL to the site and encountered failures multiple
              times before getting it right.
            </li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-2 text-grays-900">Learnings:</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-900">
            <li>
              Gained hands-on experience with AWS services and understood how to deploy static and dynamic websites
              using cost-effective practices. I also learned how to monitor resources to avoid unexpected charges.
            </li>
            <li>
              Understood the importance of SEO and gradually adopted key best practices such as setting up proper meta
              tags, improving load speed, using semantic HTML, and ensuring mobile responsiveness.
            </li>
            <li>
              Learned how to stay calm and analytical under pressure. I developed the habit of reading official
              documentation and community threads to troubleshoot issues instead of panicking.
            </li>
            <li>
              Mastered the process of linking a custom domain to a hosted website. I now understand DNS records, domain
              pointing, and the importance of patience and debugging while working with hosting and domain providers.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="text-lg font-medium mb-2 text-gray-800">Key Features</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-900">
                <li>
                  Implemented responsive and dynamic design using Tailwind CSS and React 19, ensuring a seamless
                  experience across devices
                </li>
                <li>Migrated from Netlify to AWS Amplify, to make it more cost-effective and scalable</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Technical Details</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-900">
                <li>
                  Configured Amazon Route 53 for SSL and DNS management. Route 53 Hosted zones manages my DNS and SSL
                  Certificates
                </li>
                <li>Used AI tools like chat gpt and claude to write code and to boost development efficiency</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800">
            <h4 className="text-base font-medium text-gray-900 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {["React 19", "TypeScript", "Tailwind CSS", "AWS Amplify", "Route 53", "Hostinger"].map((tech, index) => (
                <span key={index} className="inline-block text-sm bg-yellow-500 px-3 border-3 border-black py-1 rounded-full text-gray-900">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* SEO Section */}
        <div className="mb-12 border-l-4 border-blue-600 pl-4">
          <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
            <h3 className="text-2xl font-medium text-blue-900">SEO of my website</h3>
            <a
              href="https://pagespeed.web.dev/"
              className="inline-flex  items-center text-white  bg-blue-700 p-1 px-2 border-black border-2  rounded-full hover:text-blue-100 transition-colors"
            >
              Check Here <BiLinkExternal className="ml-1" />
            </a>
          </div>

          <p className="text-gray-900 mb-6">
            Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog
            integration link  and full cloud-backed deployment.
          </p>

          <div className="mb-6">
            <h4 className="text-xl font-medium text-blue-900 mb-4">Performance Scores</h4>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[
                { score: 97, label: "Desktop Performance", color: "text-green-900" },
                { score: 71, label: "Mobile Performance", color: "text-yellow-900" },
                { score: 89, label: "Accessibility", color: "text-yellow-900" },
                { score: 100, label: "SEO Score", color: "text-green-900" },
              ].map((item, index) => (
                <div key={index} className="p-3 border-2 border-gray-900">
                  <div className={`text-2xl font-bold ${item.color}`}>{item.score}</div>
                  <p className="text-sm text-gray-900 mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-yellow-900 mb-2">
              Values are estimated and may vary. The performance score is calculated directly from these metrics.
            </p>

            <div className="flex flex-wrap gap-4 text-xs">
              {[
                { color: "bg-red-900", range: "0-49" },
                { color: "bg-yellow-900", range: "50-89" },
                { color: "bg-green-900", range: "90-100" },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-3 h-3 ${item.color} mr-1`}></div>
                  <span className="text-gray-900">{item.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border-l-4 border-blue-900 pl-4">
          <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
            <h3 className="text-2xl font-medium text-blue-900">Blog Page: Custom Domain || Hashnode</h3>
            <a
              href="https://blog.cloudkinshuk.in"
              className="inline-flex items-center text-white  bg-blue-700 p-1 px-2 border-black border-2  rounded-full hover:text-blue-100transition-colors"
            >
              View Blog <BiLinkExternal className="ml-1" />
            </a>
          </div>

          <p className="text-gray-900 mb-6">
            Created and deployed a fully functional tech blog using Hashnode as the content platform, with custom
            domain integration and  DNS configuration.
          </p>

          <h3 className="text-xl font-medium mb-2 text-gray-900">Learning:</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-900">
            <li>
              Developed a personal blog page using a custom domain (e.g., blog.yourname.com) to showcase technical knowledge and writing skills.
            </li>
            <li>
            Published blog posts regularly to demonstrate expertise in cloud computing, DevOps, and emerging technologies. Shared links on LinkedIn, GitHub, and resume to strengthen my personal brand.
            </li>
            <li>
             Created the blog to bridge the gap between learning and understanding new skills by documenting insights, challenges, and solutions in a structured format.
            </li>
            <li>
              Gained hands-on experience with Hashnode, a developer-friendly blogging platform, for content management, custom domain integration, and SEO optimization.
            </li>
          </ul>

          <h3 className="text-xl font-medium mb-2 text-gray-900">Description</h3>
          <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-900">
            <li>Set up a developer blog with a custom domain (blog.cloudkinshuk.in)</li>
            <li>Configured DNS records (A, CNAME, TXT) in Route 53 for domain verification and HTTPS</li>
            <li>Publishing technical articles covering AWS, serverless architecture, and React development</li>
          </ul>

          <div className="mt-6 pt-4 border-t border-gray-800">
            <h4 className="text-base font-medium text-gray-800 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {["Hashnode", "Amazon Route 53", "Hostinger", "DNS Management", "Custom Domain", "CDN"].map(
                (tech, index) => (
                  <span key={index} className="inline-block text-sm bg-yellow-500 px-3 border-3 border-black  rounded-full text-gray-900  py-1 ">
                    {tech}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 border-b border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaCode className="text-black" />
              <h3 className="text-3xl font-medium text-black">
                Fork it. Star it. Make it your own — if it serves your purpose.
              </h3>
            </div>

            <p className="text-gray-900">
              This portfolio project is open-source and available for forking. If the design or structure proved
              useful in your work, you're free to adapt or extend it as needed. A star is appreciated if it saved you
              time or provided a solid foundation — but not required. Feedback, contributions, and practical
              improvements are welcome. Keep it efficient. Keep it clean.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-yellow-900">
                <FaStar className="text-yellow-900 mr-1" />
                <span>Star to show love</span>
              </div>
              <div className="flex items-center text-yellow-900">
                <FaCodeBranch className="text-blue-900 mr-1" />
                <span>Fork and remix</span>
              </div>
            </div>
          </div>

          {/* Right Button */}
          <a
            href="https://github.com/kinshukjain01/kinshukkportfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black bg-blue-400 p-2 rounded-full border-2 border-black font-semibold hover:bg-blue-700 transition-colors"
          >
            <FaGithub />
            <span>@kinshukkportfolio</span>
            <HiOutlineExternalLink />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 mt-8">
        <div className="text-center">
          <p className="text-gray-900">
            Want to explore my Thinking? click on "Learning journey" to Check out the{" "}
            <a href="/my-personal-learning-resources" className="text-blue-900 hover:text-blue-800 transition-colors">
              Learning Journey
            </a>{" "}
            Page
          </p>
        </div>
      </footer>
    </div>
  )
}
