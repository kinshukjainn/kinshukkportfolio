"use client"

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
  FaBlog,
} from "react-icons/fa"
import { GoRocket } from "react-icons/go"
import { BiLinkExternal } from "react-icons/bi"
import { GoHash } from "react-icons/go"
import { SiKubernetes, SiCanva, SiTerraform, SiTailwindcss } from "react-icons/si"
import { MdOutlineViewInAr } from "react-icons/md"
import { TbExternalLink } from "react-icons/tb"
import { HiOutlineExternalLink } from "react-icons/hi"
import { Link } from "react-router-dom"

const MainContent = () => {
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
    { icon: <FaAws />, name: "AWS Cloud" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaPython />, name: "Python / Boto3" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiTerraform />, name: "Terraform" },
  ]

  // tools stack
  const toolsStack = [
    { icon: <FaDiscord />, name: "Discord" },
    { icon: <SiCanva />, name: "Canva : Graphic Designing" },
    { icon: <FaGithub />, name: "Github / Git / Github Actions" },
    { icon: <FaLinux />, name: "Linux" },
  ]

  // Certifications data
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (Upcomming)",
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
    <div className="bg-[#f6fdd9] text-gray-800 min-h-screen font-sans">
      {/* Hero section */}
      <header className="py-8 sm:py-12 md:py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6">
            Hi, I'm <span className="text-gray-900">Kinshuk Jain</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
           Aspiring Cloud Engineer | Tech Enthusiast | Open to Collaborate
          </p>
          <Link
            to="/blogs"
            className="inline-flex items-center p-2 px-4 bg-black rounded-md text-gray-100 text-base font-medium transition-all duration-200 hover:bg-gray-800"
          >
            <MdOutlineViewInAr className="text-lg mr-2" />
            View My blogs
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <section id="contact" className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl mb-6 sm:mb-8 flex items-center text-gray-900">
            <span className="w-6 h-px bg-gray-400 mr-3"></span>
            Open to Collaborate / Work :
          </h2>

          <div className="relative pl-6 sm:pl-8 mt-4 py-6 px-4 sm:px-6  text-base rounded-lg ">

            <p className="text-sm sm:text-base text-black mb-4 leading-relaxed">
              Hey there! I'm always open to connecting with fellow peers , engineers, developers, or anyone curious about tech,
              cloud, or just building cool things together. Whether you're just starting out, exploring new paths, or
              already deep into your journey — feel free to reach out!
            </p>
            <p className="text-sm sm:text-base text-black mb-4 leading-relaxed">
              I believe learning is better when shared. So if you've got ideas, want to brainstorm, collab on a project,
              or simply talk tech (or life), I'm just a message away. Let's grow, learn, and build something meaningful
              — together.
            </p>

            <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <h3>
                <span className="font-semibold">Email: </span> kinshuk25jan04@gmail.com
              </h3>
              <h3>
                <span className="font-semibold">Alternate Email: </span> jkinshuk@outlook.com
              </h3>

              <div className="flex flex-wrap items-center gap-3 sm:gap-5 p-3 sm:p-4 mt-2">
                <a
                  href="https://github.com/kinshukjainn"
                  className="flex items-center space-x-1 text-black hover:text-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  <span className="underline text-sm">@github</span>
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/kinshukjainn/"
                  className="flex items-center space-x-1 text-black hover:text-gray-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="underline text-sm">@linkedin</span>
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://x.com/realkinshuk04"
                  className="flex items-center space-x-1 text-black hover:text-gray-900 transition-colors"
                  aria-label="Twitter"
                >
                  <span className="underline text-sm">@twitter</span>
                  <FaTwitter size={20} />
                </a>
                <a
                  href="https://instagram.com/kinshukjain._/"
                  className="flex items-center space-x-1 text-black hover:text-gray-900 transition-colors"
                  aria-label="instagram"
                >
                  <span className="underline text-sm">@instagram</span>
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://blog.cloudkinshuk.in"
                  className="flex items-center space-x-1 text-black hover:text-gray-900 transition-colors"
                  aria-label="Hashnode"
                >
                  <span className="underline text-sm">@Hashnode</span>
                  <FaBlog size={20} />
                </a>
                <button
                  onClick={handleClick}
                  className="underline flex cursor-pointer items-center space-x-1 text-black hover:text-gray-900 transition-colors"
                >
                  <FaWhatsapp size={20} className="mr-1" />
                  <span className="text-sm">@WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Education Section */}

        {/* Tech Stack Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-gray-900">
            <span className="mr-3">
              <GoHash />
            </span>
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 py-2 px-2"
              >
                <span className="text-gray-600 text-xl">{tech.icon}</span>
                <span className="text-sm sm:text-base tracking-wide text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-gray-900">
            <span className="mr-3">
              <GoHash className="font-bold" />
            </span>
            Tools
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2">
            {toolsStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 py-2 px-2 "
              >
                <span className="text-gray-600 text-xl">{tech.icon}</span>
                <span className="text-sm sm:text-base tracking-wide text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-gray-900">
            <span className="mr-3">
              <GoHash />
            </span>
            Cloud Certifications
          </h2>

          {/* AWS Journey Banner */}
          <div className="mb-8 sm:mb-12 relative pl-6 sm:pl-8 py-4 sm:py-6  rounded-md ">
            <h3 className="text-lg sm:text-xl font-medium flex items-center mb-3 sm:mb-4 text-gray-900">
              <FaAws className="mr-3 text-gray-700" /> My AWS Certification Journey
            </h3>
            <p className="text-sm sm:text-base text-gray-900 leading-relaxed">
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner exam (CLF-C02). While just shy of
              passing, this experience has
              <span className="font-medium text-gray-900"> strengthened my resolve </span>
              to master cloud fundamentals and accelerated my preparation for the more advanced Solutions Architect
              Associate certification by Q3 2025.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="relative pl-6 py-4 sm:py-6  rounded-md ">
                <div className="flex items-start">
                  <FaAws className="text-gray-700 text-sm mr-2 mt-1" />
                  <h3 className="text-base sm:text-lg text-black font-medium">{cert.title}</h3>
                </div>
                <a
                  href={cert.link}
                  className="text-white p-2 rounded-md bg-black text-xs inline-flex items-center mt-3 transition-colors duration-200 hover:bg-gray-800"
                >
                  View Certificate
                  <TbExternalLink className="ml-1 text-sm" />
                </a>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-gray-900">
            <span className="mr-3">
              <GoHash className="font-bold" />
            </span>
            Education
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div className="relative pl-6 sm:pl-8  p-4 sm:p-6  rounded-md">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">
                    Bachelor of Technology, Electrical Engineering
                  </h3>
                  <p className="text-gray-900 text-sm sm:text-base mt-1 sm:mt-2">JSS Academy of Technical Education</p>
                  <p className="text-gray-900 text-xs mt-1">Noida, Uttar Pradesh</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-800 text-sm">2022 - 2026</span>
                </div>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8  p-4 sm:p-6  rounded-md">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900">Higher Secondary Education (XII)</h3>
                  <p className="text-gray-900 text-sm sm:text-base mt-1 sm:mt-2">Sri Chaitnya Junior College</p>
                  <p className="text-gray-900 text-xs mt-1">Pune, Maharashtra, India</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-gray-800 text-sm">2020 - 2022</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-gray-900">
            <span className="mr-3">
              <GoHash className="font-bold" />
            </span>
            Projects / Work
          </h2>

          {/* Project 1 */}
          <div className="mb-12 sm:mb-16 relative pl-6 sm:pl-8 py-5 sm:py-6 px-4 sm:px-6  rounded-md ">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h3 className="text-2xl sm:text-3xl font-medium mb-2 md:mb-0 text-gray-900">Portfolio Website</h3>
              <a
                href="https://cloudkinshuk.in"
                className="inline-flex items-center mr-3 text-xs font-medium text-white transition-all bg-black p-2 w-max rounded-md hover:text-gray-200"
              >
                View Live
              </a>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold mt-4">Description : </h3>
            <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 leading-relaxed">
              Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog
              integration and full cloud-backed deployment.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold">Challenges:</h3>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              Deploying my website on a cloud platform like AWS was a completely new experience for me. AWS is a vast
              platform with numerous complexities, and navigating through its features felt overwhelming at times.
            </p>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              I was unfamiliar with the best practices for optimizing SEO (Search Engine Optimization) while building
              the website. Despite several attempts, I struggled to implement the right methods to enhance my website's
              SEO performance and overall user experience.
            </p>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              As a beginner, I constantly worried about the potential high costs associated with deploying the website
              on AWS. The thought of exceeding the free-tier traffic limits and accumulating an unexpected, hefty bill
              added to my stress.
            </p>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              When I purchased my own domain from Hostinger, I had no idea how to link it to my website. I faced several
              challenges in correctly redirecting my custom URL to the site and encountered failures multiple times
              before getting it right.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold mt-4">Learnings:</h3>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              Gained hands-on experience with AWS services and understood how to deploy static and dynamic websites
              using cost-effective practices. I also learned how to monitor resources to avoid unexpected charges.
            </p>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              Understood the importance of SEO and gradually adopted key best practices such as setting up proper meta
              tags, improving load speed, using semantic HTML, and ensuring mobile responsiveness.
            </p>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              Learned how to stay calm and analytical under pressure. I developed the habit of reading official
              documentation and community threads to troubleshoot issues instead of panicking.
            </p>
            <p className="text-sm sm:text-base text-black mb-3 leading-relaxed">
              Mastered the process of linking a custom domain to a hosted website. I now understand DNS records, domain
              pointing, and the importance of patience and debugging while working with hosting and domain providers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 sm:mt-6">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-black">Key Features</h4>
                <ul className="space-y-2 text-sm sm:text-base text-gray-900">
                  <li className="flex items-start">
                    <span className="text-black mr-2">→</span>
                    Implemented responsive and dynamicsal design using Tailwind CSS and React 19, ensuring a seamless
                    experience across devices
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">→</span>
                    Integrated Hashnode API for dynamic blog posts updates and everyone can checkout my latest blogs
                    from my portfolio
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">→</span>
                    Migrated from Netlify to AWS Amplify , to make it more cost-effective and scalable
                  </li>
                </ul>
              </div>
              <div className="mt-4 md:mt-0">
                <h4 className="text-lg sm:text-xl font-medium mb-3 text-black">Technical Details</h4>
                <ul className="space-y-2 text-sm sm:text-base text-black">
                  <li className="flex items-start">
                    <span className="text-black font-semibold mr-2">→</span>
                    Configured Amazon Route 53 for SSL and DNS management . Route 53 Hosted zones manages my DNS and SSL
                    Certificates
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-semibold mr-2">→</span>
                    Used AI tools like chat gpt and claude to write code and to boost development efficiency
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {["React 19", "TypeScript", "Tailwind CSS", "AWS Amplify", "Route 53", "Hostinger"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="inline-block text-xs bg-yellow-100 border border-black font-bold px-3 py-1 text-gray-700 rounded-sm hover:-translate-y-1 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SEO Section - Simplified text-based version */}
          <div className="max-w-4xl mx-auto  rounded-lg  p-4 sm:p-6 mb-8 sm:mb-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h3 className="text-2xl sm:text-3xl font-medium mb-2 md:mb-0 text-gray-900">SEO of my website</h3>
              <a
                href="https://pagespeed.web.dev/"
                className="inline-flex items-center text-sm font-medium text-white transition-all bg-black p-2 w-max rounded-md hover:text-gray-200"
              >
                Check Here <BiLinkExternal className="ml-1" />
              </a>
            </div>

            <p className="text-sm text-black mb-4 leading-relaxed">
              Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog
              integration and full cloud-backed deployment.
            </p>

            <div className="mb-6">
              <h4 className="text-2xl text-gray-900 mb-3">Performance Scores</h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className=" p-3 text-center">
                  <div className="text-2xl  text-black">97</div>
                  <p className="text-sm text-gray-900">Desktop Performance</p>
                </div>
                <div className=" p-3 text-center">
                  <div className="text-2xl  text-black">71</div>
                  <p className="text-sm text-gray-900">Mobile Performance</p>
                </div>
                <div className=" p-3 text-center">
                  <div className="text-2xl  text-black">89</div>
                  <p className="text-sm text-gray-900">Accessibility</p>
                </div>
                <div className="p-3 text-center">
                  <div className="text-2xl  text-black">100</div>
                  <p className="text-sm text-gray-900">SEO Score</p>
                </div>
              </div>

              <p className="text-xs text-gray-900 mb-2">
                Values are estimated and may vary. The performance score is calculated directly from these metrics.
              </p>

              <div className="flex justify-center gap-4 mt-3 text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded mr-1"></div>
                  <span>0-49</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
                  <span>50-89</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded mr-1"></div>
                  <span>90-100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative pl-6 py-5 sm:py-6 px-4 sm:px-6  rounded-md ">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <h3 className="text-2xl sm:text-3xl font-medium mb-2 md:mb-0 text-gray-900">
                Blog Page : Custom Domain || Hashnode
              </h3>
              <a
                href="https://blog.cloudkinshuk.in"
                className="inline-flex items-center mr-3 text-xs font-medium text-white transition-all bg-black p-2 w-max rounded-md hover:text-gray-200"
              >
                View Blog
              </a>
            </div>

            <p className="text-sm sm:text-base text-black mb-4 sm:mb-6 leading-relaxed">
              Created and deployed a fully functional tech blog using Hashnode as the content platform, with custom
              domain integration and professional DNS configuration.
            </p>

            <h3 className="text-xl sm:text-2xl mb-2">Learning : </h3>
            <ul className="space-y-2 text-sm sm:text-base text-black mb-4 sm:mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">
                  <GoRocket />
                </span>
                Built a personal brand using a custom-named blog (e.g., blog.yourname.com). Showcased your knowledge and
                skills through public writing. Shared blog links on LinkedIn, GitHub, and resume to show expertise.
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">
                  <GoRocket />
                </span>
                Gained hands-on experience with Hashnode, a powerful blogging platform that simplifies the process of
                creating and managing content.
              </li>
            </ul>

            <h3 className="text-xl sm:text-2xl mb-2">Description</h3>
            <ul className="space-y-2 text-sm sm:text-base text-black mb-4 sm:mb-6">
              <li className="flex items-start">
                <span className="text-black mr-2">
                  <GoRocket />
                </span>
                Set up a developer blog with a custom domain (blog.cloudkinshuk.in)
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">
                  <GoRocket />
                </span>
                Configured DNS records (A, CNAME, TXT) in Route 53 for domain verification and HTTPS
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">
                  <GoRocket />
                </span>
                Publishing technical articles covering AWS, serverless architecture, and React development
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-black ">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Hashnode", "Amazon Route 53", "Hostinger", "DNS Management", "Custom Domain", "CDN"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="inline-block text-xs bg-yellow-100 border border-black font-bold px-3 py-1 text-gray-700 rounded-sm hover:-translate-y-1 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="border-t border-black mt-8 py-8 sm:py-12 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            {/* Left Content */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaCode className="text-gray-800 text-lg" />
                <h3 className="text-xl sm:text-2xl font-medium text-gray-900">Fork it. Star it. Make it yours.</h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 max-w-3xl leading-relaxed">
                This portfolio is fully open-source and free to fork. Found the design helpful? Feel free to use or
                modify it for your own site. If it saved you time or gave you a good starting point, a ⭐ would mean a
                lot. Contributions, feedback, and improvements are always welcome.
              </p>

              <div className="flex gap-4 sm:gap-6">
                <div className="flex items-center text-xs text-gray-500 hover:text-black transition-colors duration-200">
                  <FaStar className="text-yellow-600 mr-2" />
                  <span>Star to show love</span>
                </div>
                <div className="flex items-center text-xs text-gray-500 hover:text-black transition-colors duration-200">
                  <FaCodeBranch className="text-gray-500 mr-2" />
                  <span>Fork and remix</span>
                </div>
              </div>
            </div>

            {/* Right Button */}
            <a
              href="https://github.com/kinshukjain01/kinshukkportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 underline  text-black  px-4 py-2  transition-colors duration-200"
            >
              <FaGithub className="text-xl" />
              <span className="text-sm font-medium">@kinshukkportfolio</span>
              <HiOutlineExternalLink className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#f6fdd9]  py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Want to explore my Thinking? click on "Blogs" to Check out the{" "}
            <Link
              to="/blogs"
              className="text-gray-900 border-b border-gray-900 pb-px hover:text-gray-600 hover:border-gray-500 transition-colors duration-200"
            >
              Blogs
            </Link>{" "}
            Page
          </p>
        </div>
      </footer>
    </div>
  )
}

export default MainContent
