"use client"
import { motion } from "framer-motion"
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
  FaHashtag,
} from "react-icons/fa"
import { GoRocket } from "react-icons/go"
import { BiLinkExternal } from "react-icons/bi"
import { SiKubernetes, SiCanva, SiTerraform, SiTailwindcss } from "react-icons/si"
import { MdOutlineViewInAr, MdDarkMode } from "react-icons/md"
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
    { icon: <FaAws className="text-yellow-500" />, name: "AWS Cloud" },
    { icon: <FaReact className="text-yellow-500" />, name: "React" },
    { icon: <FaPython className="text-yellow-500"/>, name: "Python / Boto3" },
    { icon: <SiTailwindcss className="text-yellow-500" />, name: "TailwindCSS" },
    { icon: <FaDocker className="text-yellow-500"/>, name: "Docker" },
    { icon: <SiKubernetes className="text-yellow-500" />, name: "Kubernetes" },
    { icon: <SiTerraform className="text-yellow-500"/>, name: "Terraform" },
  ]

  // tools stack
  const toolsStack = [
    { icon: <FaDiscord className="text-yellow-500" />, name: "Discord" },
    { icon: <SiCanva className="text-yellow-500" />, name: "Canva : Graphic Designing" },
    { icon: <FaGithub className="text-yellow-500" />, name: "Github / Git / Github Actions" },
    { icon: <FaLinux className="text-yellow-500"/>, name: "Linux" },
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardHover = {
    rest: { scale: 1, transition: { duration: 0.2 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  }

  return (
    <div className="bg-[#171717] font-meduim  text-white min-h-screen ">
      {/* Hero section */}
      <motion.header
        className="py-16 md:py-24 relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-meduim tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Hi, I'm <span>Kinshuk Jain</span>
          </motion.h1>
          <motion.p
            className="text-lg font-semibold sm:text-xl md:text-2xl text-white mb-8 sm:mb-10 max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Aspiring Cloud Engineer | Tech Enthusiast | Open to Collaborate
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="https://blog.cloudkinshuk.in"
              className="inline-flex items-center p-3 px-6 bg-blue-600 rounded-full text-white text-base font-medium transition-all duration-200 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdOutlineViewInAr className="text-xl mr-2" />
              View My Blogs
            </motion.a>
          </motion.div>
        </div>

        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-[#303134] to-transparent pointer-events-none"></div>
      </motion.header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <motion.section
          id="contact"
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-blue-500 font-semibold"
            variants={fadeInUp}
          >
            <span className=" mr-3"><FaHashtag/></span>
            Open to Collaborate / Work
          </motion.h2>

          <motion.div
            className="relative pl-6 sm:pl-8 mt-4 py-8 px-6 sm:px-8 text-base rounded-4xl bg-[#202124]  shadow-lg"
            variants={fadeInUp}
          >
            <motion.p className="text-sm sm:text-base text-white mb-4 leading-relaxed" variants={fadeInUp}>
              Hey there! I'm always open to connecting with fellow peers, engineers, developers, or anyone curious about
              tech, cloud, or just building cool things together. Whether you're just starting out, exploring new paths,
              or already deep into your journey — feel free to reach out!
            </motion.p>
            <motion.p className="text-sm sm:text-base text-white mb-4 leading-relaxed" variants={fadeInUp}>
              I believe learning is better when shared. So if you've got ideas, want to brainstorm, collab on a project,
              or simply talk tech (or life), I'm just a message away. Let's grow, learn, and build something meaningful
              — together.
            </motion.p>

            <motion.div className="space-y-1 sm:space-y-2 text-sm sm:text-base" variants={fadeInUp}>
              <h3>
                <span className="text-yellow-500">Email: </span> kinshuk25jan04@gmail.com
              </h3>
              <h3>
                <span className="text-yellow-500">Alternate Email: </span> jkinshuk@outlook.com
              </h3>

              <motion.div
                className="flex flex-wrap items-center gap-4 sm:gap-6 p-4 sm:p-5 mt-4  rounded-lg"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: <FaGithub size={40} className="text-black" />, label: "", url: "https://github.com/kinshukjainn" },
                  { icon: <FaLinkedin size={40} className="text-blue-500" />, label: "", url: "https://linkedin.com/in/kinshukjainn/" },
                  { icon: <FaTwitter size={40} className="text-blue-500" />, label: "", url: "https://x.com/realkinshuk04" },
                  { icon: <FaInstagram size={40} className="text-yellow-500" />, label: "", url: "https://instagram.com/kinshukjain._/" },
                  { icon: <FaBlog size={40} className="text-purple-900" />, label: "", url: "https://blog.cloudkinshuk.in" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    className="flex items-center space-x-1 text-white  transition-colors duration-300"
                    aria-label={item.label}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className=" text-lg ">{item.label}</span>
                    {item.icon}
                  </motion.a>
                ))}
                <motion.button
                  onClick={handleClick}
                  className="flex cursor-pointer items-center space-x-1 text-white hover:text-blue-400 transition-colors duration-300"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp size={40} className="mr-1 text-green-500 text-lg" />
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        {/* Tech Stack Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-blue-500 font-semibold"
            variants={fadeInUp}
          >
            <span className="mr-3 text-blue-500">
              <FaHashtag />
            </span>
            Tech Stack
          </motion.h2>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" variants={staggerContainer}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 py-3 px-4 bg-[#202124] rounded-full  transition-all duration-300"
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                custom={index}
              >
                <span className="text-white text-2xl">{tech.icon}</span>
                <span className="text-sm sm:text-base tracking-wide text-white">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl sm:text-4xl mb-8 sm:mb-10 flex items-center text-blue-500 font-semibold"
            variants={fadeInUp}
          >
            <span className="mr-3 text-blue-500">
              <FaHashtag />
            </span>
            Tools
          </motion.h2>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" variants={staggerContainer}>
            {toolsStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 py-3 px-4 bg-[#202124] rounded-full transition-all duration-300"
                variants={fadeInUp}
                whileHover="hover"
                initial="rest"
                animate="rest"
                custom={index}
              >
                <span className="text-white text-2xl">{tech.icon}</span>
                <span className="text-sm sm:text-base tracking-wide text-white">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl sm:text-3xl mb-8 sm:mb-10 flex items-center text-blue-500 font-semibold"
            variants={fadeInUp}
          >
            <span className="mr-3 text-blue-500">
              <FaHashtag />
            </span>
            Cloud Certifications
          </motion.h2>

          {/* AWS Journey Banner */}
          <motion.div
            className="mb-8 sm:mb-12 relative pl-6 sm:pl-8 py-6 sm:py-8 px-6 sm:px-8 rounded-4xl bg-[#202124]"
            variants={fadeInUp}
          >
            <motion.h3
              className="text-lg sm:text-xl flex items-center mb-3 sm:mb-4 text-yellow-500 font-medium"
              variants={fadeInUp}
            >
              <FaAws className="mr-3 text-4xl text-yellow-500" /> My AWS Certification Journey
            </motion.h3>
            <motion.p className="text-md sm:text-base text-white leading-relaxed" variants={fadeInUp}>
              I recently scored 679/1000 on the AWS Certified Cloud Practitioner exam (CLF-C02). While just shy of
              passing, this experience has
              <span className="text-blue-300 font-medium"> strengthened my resolve </span>
              to master cloud fundamentals and accelerated my preparation for the more advanced Solutions Architect
              Associate certification by Q3 2025.
            </motion.p>
          </motion.div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4" variants={staggerContainer}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative pl-6 py-6 sm:py-8 px-6 rounded-4xl bg-[#202124] transition-all duration-300"
                variants={fadeInUp}
                whileHover={cardHover.hover}
                initial={cardHover.rest}
                animate={cardHover.rest}
              >
                <div className="flex items-start">
                  <FaAws className="text-yellow-500 text-4xl mr-3 mt-1" />
                  <h3 className="text-base sm:text-lg text-yellow-500 font-medium">{cert.title}</h3>
                </div>
                <motion.a
                  href={cert.link}
                  className="text-white p-2 rounded-full font-semibold bg-blue-600 text-sm inline-flex items-center mt-4 transition-colors duration-200 hover:bg-blue-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                  <TbExternalLink className="ml-2 text-lg" />
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl sm:text-3xl mb-8 sm:mb-10 flex items-center text-blue-500 font-semibold"
            variants={fadeInUp}
          >
            <span className="mr-3 text-blue-500">
              <FaHashtag />
            </span>
            Education
          </motion.h2>

          <motion.div className="space-y-6 sm:space-y-8" variants={staggerContainer}>
            <motion.div
              className="relative pl-6 sm:pl-8 p-6 sm:p-8 rounded-4xl bg-[#202124] transition-all duration-300"
              variants={fadeInUp}
              whileHover={cardHover.hover}
              initial={cardHover.rest}
              animate={cardHover.rest}
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl text-yellow-500 font-medium">
                    Bachelor of Technology, Electrical Engineering
                  </h3>
                  <p className="text-white text-sm sm:text-base mt-2 sm:mt-3">JSS Academy of Technical Education</p>
                  <p className="text-white text-xs mt-1">Noida, Uttar Pradesh</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="text-yellow-500 text-lg font-semibold bg-blue-900/30 px-3 py-1 rounded-full">
                    2022 - 2026
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative pl-6 sm:pl-8 p-6 sm:p-8 rounded-4xl bg-[#202124] transition-all duration-300"
              variants={fadeInUp}
              whileHover={cardHover.hover}
              initial={cardHover.rest}
              animate={cardHover.rest}
            >
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl text-yellow-500 font-medium">Higher Secondary Education (XII)</h3>
                  <p className="text-white text-sm sm:text-base mt-2 sm:mt-3">Sri Chaitnya Junior College</p>
                  <p className="text-white text-xs mt-1">Pune, Maharashtra, India</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className="text-yellow-500 text-lg font-semibold bg-blue-900/30 px-3 py-1 rounded-full">
                    2020 - 2022
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2
            className="text-2xl sm:text-3xl mb-8 sm:mb-10 flex items-center text-blue-400 font-semibold"
            variants={fadeInUp}
          >
            <span className="mr-3 text-blue-500">
              <FaHashtag />
            </span>
            Projects / Work
          </motion.h2>

          {/* Project 1 */}
          <motion.div
            className="mb-12 sm:mb-16 relative pl-6 sm:pl-8 py-8 sm:py-10 px-6 sm:px-8 rounded-4xl bg-[#202124] transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <motion.h3 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-0 text-yellow-500" variants={fadeInUp}>
                Portfolio Website
              </motion.h3>
              <motion.a
                href="https://cloudkinshuk.in"
                className="inline-flex items-center text-xs text-white transition-all bg-blue-600 p-2 w-max rounded-md hover:bg-blue-700 shadow-md hover:shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Live
              </motion.a>
            </div>

            <motion.h3 className="text-xl sm:text-2xl font-medium mt-6 mb-3 text-yellow-500" variants={fadeInUp}>
              Description :
            </motion.h3>
            <motion.p className="text-sm sm:text-base text-white mb-6 sm:mb-8 leading-relaxed" variants={fadeInUp}>
              Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog
              integration and full cloud-backed deployment.
            </motion.p>

            <motion.h3 className="text-xl sm:text-2xl font-medium mb-3 text-yellow-500" variants={fadeInUp}>
              Challenges:
            </motion.h3>

            <motion.div className="space-y-3 mb-6" variants={staggerContainer}>
              {[
                "Deploying my website on a cloud platform like AWS was a completely new experience for me. AWS is a vast platform with numerous complexities, and navigating through its features felt overwhelming at times.",
                "I was unfamiliar with the best practices for optimizing SEO (Search Engine Optimization) while building the website. Despite several attempts, I struggled to implement the right methods to enhance my website's SEO performance and overall user experience.",
                "As a beginner, I constantly worried about the potential high costs associated with deploying the website on AWS. The thought of exceeding the free-tier traffic limits and accumulating an unexpected, hefty bill added to my stress.",
                "When I purchased my own domain from Hostinger, I had no idea how to link it to my website. I faced several challenges in correctly redirecting my custom URL to the site and encountered failures multiple times before getting it right.",
              ].map((challenge, index) => (
                <motion.p
                  key={index}
                  className="text-sm sm:text-base text-white leading-relaxed"
                  variants={fadeInUp}
                >
                  {challenge}
                </motion.p>
              ))}
            </motion.div>

            <motion.h3 className="text-xl sm:text-2xl font-medium mt-6 mb-3 text-yellow-500" variants={fadeInUp}>
              Learnings:
            </motion.h3>

            <motion.div className="space-y-3 mb-6" variants={staggerContainer}>
              {[
                "Gained hands-on experience with AWS services and understood how to deploy static and dynamic websites using cost-effective practices. I also learned how to monitor resources to avoid unexpected charges.",
                "Understood the importance of SEO and gradually adopted key best practices such as setting up proper meta tags, improving load speed, using semantic HTML, and ensuring mobile responsiveness.",
                "Learned how to stay calm and analytical under pressure. I developed the habit of reading official documentation and community threads to troubleshoot issues instead of panicking.",
                "Mastered the process of linking a custom domain to a hosted website. I now understand DNS records, domain pointing, and the importance of patience and debugging while working with hosting and domain providers.",
              ].map((learning, index) => (
                <motion.p
                  key={index}
                  className="text-sm sm:text-base text-white leading-relaxed"
                  variants={fadeInUp}
                >
                  {learning}
                </motion.p>
              ))}
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 sm:mt-8" variants={staggerContainer}>
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg sm:text-xl font-medium mb-3 text-yellow-500">Key Features</h4>
                <ul className="space-y-3 text-sm sm:text-base text-white">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Implemented responsive and dynamic design using Tailwind CSS and React 19, ensuring a seamless
                    experience across devices
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Migrated from Netlify to AWS Amplify, to make it more cost-effective and scalable
                  </li>
                </ul>
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h4 className="text-lg sm:text-xl font-medium mb-3 text-yellow-500">Technical Details</h4>
                <ul className="space-y-3 text-sm sm:text-base text-white">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Configured Amazon Route 53 for SSL and DNS management. Route 53 Hosted zones manages my DNS and SSL
                    Certificates
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">→</span>
                    Used AI tools like chat gpt and claude to write code and to boost development efficiency
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.div className="mt-8 pt-6 border-t border-gray-700" variants={fadeInUp}>
              <h4 className="text-sm font-medium text-yellow-500 mb-3">Technologies:</h4>
              <motion.div className="flex flex-wrap gap-2 mt-2" variants={staggerContainer}>
                {["React 19", "TypeScript", "Tailwind CSS", "AWS Amplify", "Route 53", "Hostinger"].map(
                  (tech, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-xs bg-blue-900 px-3 py-1 text-white rounded-full hover:-translate-y-1 transition-transform duration-200"
                      variants={fadeInUp}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ),
                )}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* SEO Section - Simplified text-based version */}
          <motion.div
            className="max-w-4xl mx-auto rounded-4xl bg-[#202124] p-6 sm:p-8 mb-12 sm:mb-16"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <motion.h3 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-0 text-yellow-500" variants={fadeInUp}>
                SEO of my website
              </motion.h3>
              <motion.a
                href="https://pagespeed.web.dev/"
                className="inline-flex items-center text-xs text-white transition-all bg-blue-600 p-2 w-max rounded-full hover:bg-blue-700 shadow-md hover:shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Here <BiLinkExternal className="ml-1" />
              </motion.a>
            </div>

            <motion.p className="text-sm sm:text-base text-white mb-6 leading-relaxed" variants={fadeInUp}>
              Built and deployed a personal portfolio website using React 19, TypeScript, Tailwind CSS with live blog
              integration and full cloud-backed deployment.
            </motion.p>

            <motion.div className="mb-8" variants={fadeInUp}>
              <h4 className="text-xl sm:text-2xl font-medium text-yellow-500 mb-4">Performance Scores</h4>

              <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6" variants={staggerContainer}>
                {[
                  { score: 97, label: "Desktop Performance" },
                  { score: 71, label: "Mobile Performance" },
                  { score: 89, label: "Accessibility" },
                  { score: 100, label: "SEO Score" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 text-center"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className={`text-3xl font-bold ${
                        item.score >= 90 ? "text-green-400" : item.score >= 50 ? "text-yellow-400" : "text-red-400"
                      }`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      {item.score}
                    </motion.div>
                    <p className="text-sm text-white mt-2">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-xs text-yellow-400 mb-3">
                Values are estimated and may vary. The performance score is calculated directly from these metrics.
              </p>

              <motion.div className="flex justify-center gap-6 mt-4 text-xs" variants={staggerContainer}>
                {[
                  { color: "bg-red-500", range: "0-49" },
                  { color: "bg-yellow-500", range: "50-89" },
                  { color: "bg-green-500", range: "90-100" },
                ].map((item, index) => (
                  <motion.div key={index} className="flex items-center" variants={fadeInUp}>
                    <div className={`w-3 h-3 ${item.color} rounded-full mr-2`}></div>
                    <span className="text-white">{item.range}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="relative pl-6 sm:pl-8 py-8 sm:py-10 px-6 sm:px-8 rounded-4xl bg-[#202124]  transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <motion.h3 className="text-2xl sm:text-3xl font-medium mb-3 md:mb-0 text-yellow-500" variants={fadeInUp}>
                Blog Page : Custom Domain || Hashnode
              </motion.h3>
              <motion.a
                href="https://blog.cloudkinshuk.in"
                className="inline-flex items-center text-xs text-white transition-all bg-blue-600 p-2 w-max rounded-md hover:bg-blue-700 shadow-md hover:shadow-blue-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Blog
              </motion.a>
            </div>

            <motion.p className="text-sm sm:text-base text-white mb-6 sm:mb-8 leading-relaxed" variants={fadeInUp}>
              Created and deployed a fully functional tech blog using Hashnode as the content platform, with custom
              domain integration and professional DNS configuration.
            </motion.p>

            <motion.h3 className="text-xl sm:text-2xl font-medium mb-3 text-yellow-500" variants={fadeInUp}>
              Learning :
            </motion.h3>

            <motion.ul
              className="space-y-3 text-sm sm:text-base text-white mb-6 sm:mb-8"
              variants={staggerContainer}
            >
              {[
                "Built a personal brand using a custom-named blog (e.g., blog.yourname.com). Showcased your knowledge and skills through public writing. Shared blog links on LinkedIn, GitHub, and resume to show expertise.",
                "Gained hands-on experience with Hashnode, a powerful blogging platform that simplifies the process of creating and managing content.",
                "The major reason of why i made this blog page was due to the gap which i was getting in while i was learning new skills.",
                "Gained hands-on experience with Hashnode, a powerful blogging platform that simplifies the process of creating and managing content.",
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start" variants={fadeInUp}>
                  <span className="text-blue-400 mr-2 mt-1">
                    <GoRocket />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.h3 className="text-xl sm:text-2xl font-medium mb-3 text-yellow-500" variants={fadeInUp}>
              Description
            </motion.h3>

            <motion.ul
              className="space-y-3 text-sm sm:text-base text-white mb-6 sm:mb-8"
              variants={staggerContainer}
            >
              {[
                "Set up a developer blog with a custom domain (blog.cloudkinshuk.in)",
                "Configured DNS records (A, CNAME, TXT) in Route 53 for domain verification and HTTPS",
                "Publishing technical articles covering AWS, serverless architecture, and React development",
              ].map((item, index) => (
                <motion.li key={index} className="flex items-start" variants={fadeInUp}>
                  <span className="text-blue-400 mr-2 mt-1">
                    <GoRocket />
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="mt-8 pt-6 border-t border-gray-700" variants={fadeInUp}>
              <h4 className="text-sm font-medium text-yellow-500 mb-3">Technologies:</h4>
              <motion.div className="flex flex-wrap gap-2 mt-2" variants={staggerContainer}>
                {["Hashnode", "Amazon Route 53", "Hostinger", "DNS Management", "Custom Domain", "CDN"].map(
                  (tech, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-xs bg-blue-900/30   px-3 py-1 text-white rounded-full hover:-translate-y-1 transition-transform duration-200"
                      variants={fadeInUp}
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ),
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>

      <motion.div
        className=" rounded-4xl mt-12 mb-4 mr-4 ml-4  py-12 sm:py-16 bg-[#202124]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="flex flex-col md:flex-row justify-between items-start gap-8" variants={fadeInUp}>
            {/* Left Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaCode className="text-blue-500 text-xl" />
                <h3 className="text-xl sm:text-2xl font-medium text-blue-500">Fork it. Star it. Make it yours.</h3>
              </div>

              <p className="text-base sm:text-lg text-white max-w-3xl leading-relaxed">
                This portfolio is fully open-source and free to fork. Found the design helpful? Feel free to use or
                modify it for your own site. If it saved you time or gave you a good starting point, a ⭐ would mean a
                lot. Contributions, feedback, and improvements are always welcome.
              </p>

              <div className="flex gap-6 sm:gap-8">
                <motion.div
                  className="flex items-center text-sm text-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaStar className="text-yellow-200 mr-2" />
                  <span>Star to show love</span>
                </motion.div>
                <motion.div
                  className="flex items-center text-sm text-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCodeBranch className="text-blue-400 mr-2" />
                  <span>Fork and remix</span>
                </motion.div>
              </div>
            </div>

            {/* Right Button */}
            <motion.a
              href="https://github.com/kinshukjain01/kinshukkportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-white transition-colors duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-2xl" />
              <span className="text-sm group-hover:border-blue-400">@kinshukkportfolio</span>
              <HiOutlineExternalLink className="text-sm" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        className="bg-[#171717] border-t border-gray-800 py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.p className="text-xs sm:text-sm text-white" variants={fadeInUp}>
            Want to explore my Thinking? click on "Learning journey" to Check out the{" "}
            <Link
              to="/my-personal-learning-resources"
              className="text-blue-400  pb-px hover:text-blue-300  transition-colors duration-200"
            >
              Learning Journey
            </Link>{" "}
            Page
          </motion.p>

          <motion.div className="mt-4 flex items-center justify-center text-white text-xs" variants={fadeInUp}>
            <MdDarkMode className="mr-2" />
            Dark Mode Enabled
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}

export default MainContent
