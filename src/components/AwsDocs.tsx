import { useState, useEffect } from "react";
import { FaBook, FaVideo, FaServer, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const resources = [
  {
    title: "AWS Official Documentation",
    description: "Comprehensive documentation for all AWS services.",
    urls: ["https://docs.aws.amazon.com/"],
    categories: ["docs"],
  },
  {
    title: "Learn Numpy !!!! ",
    description: "Go and programme maths in a new way !!.",
    urls: ["https://youtu.be/x7ULDYs4X84?si=HyIfJ6PZ0I6B3qen"],
    categories: ["videos"],
  },
  {
    title: "python Hitesh chaudhary : Oneshot",
    description:"This video is available on youtube channel name codewithharry ",
    urls: ["https://youtu.be/v9bOWjwdTlg?si=T5U3hBCowfEtBLTo" , "https://youtu.be/Cri8__uGk-g?si=vhyp2e7xApe0kvGQ"],
    categories: ["videos"],
  },
  {
    title: "Linux Complete Documentation Tutorial",
    description:"You can learn linux from the official documentation of linux right now  ",
    urls: ["https://www.kernel.org/doc/html/v4.10/dev-tools/index.html"],
    categories: ["docs"],
  },
  {
    title : "ReactJs Complete Tutorial in Oneshot 2 video Series",
    description : "These 2 videos on youtube will teach you complete reaactjs in oneshot",
    urls : ["https://youtu.be/FxgM9k1rg0Q?si=fMOPeD86CT8h5tQl" , "https://youtu.be/IdlF1zsUN3M?si=kumuPwXx72VMldCC"],
    categories : ["videos"],
  },
  {
    title : "Reactjs Complete Tutorial From thier own Documentation",
    description: "This is the direct link to learn react ( vite ) from ther own documentation",
    urls : ["https://vite.dev/guide/"],
    categories : ["docs"],
  },
  {
    title: "python From thier own Documentation",
    description:"This video is available on youtube channel name codewithharry ",
    urls: ["https://docs.python.org/3/whatsnew/3.13.html"],
    categories: ["docs"],
  },
  {
    title: "AWS Free Tier Explained",
    description: "Learn what AWS Free Tier includes and how to use it effectively.",
    urls: ["https://aws.amazon.com/free/"],
    categories: ["docs"],
  },
  {
    title: "AWS re:Invent 2024 Keynote",
    description: "Latest AWS innovations and updates from re:Invent 2024 by Matt Garman.",
    urls: ["https://youtu.be/LY7m5LQliAo?si=RsrHiCk_Qzx1QfeV"],
    categories: ["videos"],
  },
  {
    title: "Amazon EC2",
    description: "Elastic Compute Cloud for scalable cloud computing.",
    urls: ["https://aws.amazon.com/ec2/"],
    categories: ["services"],
  },
  {
    title: "AWS IAM (Identity and Access Management)",
    description: "IAM helps you securely control access to AWS resources. Learn how to create and manage AWS users, groups, and permissions.",
    urls: [
      "https://aws.amazon.com/iam/",
      "https://youtu.be/MDM8AraFgUE?si=ucaDXDStdAegOKpI"
    ],
    categories: ["services", "videos"],
  },
  {
    title: "AWS Security and Compliance Services",
    description: "AWS Security and Compliance tools ensure the protection of data, applications, and infrastructure hosted on AWS.",
    urls: ["https://aws.amazon.com/products/security/"],
    categories: ["services"],
  },
  // Python Resources
  {
    title: "Python Documentation",
    description: "Official Python documentation for all versions and libraries.",
    urls: ["https://docs.python.org/3/"],
    categories: ["docs", "programming"],
  },
  {
    title: "Python: Code with Harry Playlist",
    description: "Complete Python programming course by Code with Harry.",
    urls: [
      "https://www.youtube.com/watch?v=Tto8TS-fJQU&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg"
    ],
    categories: ["videos", "programming"],
  },
  {
    title: "Python and Boto3: Monk on Cloud Playlist",
    description: "Learn AWS automation with Python Boto3 and Lambda functions.",
    urls: [
      "https://youtube.com/playlist?list=PLjl2dJMjkDjlcI3SQErSq4UMX3okzafvO"
    ],
    categories: ["videos", "programming", "aws"],
  },
  // Java Resources
  {
    title: "Java Documentation",
    description: "Official Java documentation with tutorials and guides.",
    urls: ["https://docs.oracle.com/en/java/"],
    categories: ["docs", "programming"],
  },
  {
    title: "Java Programming: Full Course",
    description: "Complete Java programming tutorial with examples and best practices.",
    urls: [
      "https://www.youtube.com/watch?v=GoXwIVyNvX0"
    ],
    categories: ["videos", "programming"],
  },
  // JavaScript Resources
  {
    title: "JavaScript Documentation",
    description: "Official JavaScript documentation by Mozilla.",
    urls: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
    categories: ["docs", "programming"],
  },
  {
    title: "JavaScript Full Course - Learn JavaScript in 12 Hours",
    description: "Complete JavaScript tutorial",
    urls: [
      "https://www.youtube.com/watch?v=PkZNo7MFNFg"
    ],
    categories: ["videos", "programming"],
  },
  {
    title: "JavaScript Full Course - Playlist",
    description: "Complete JavaScript tutorial for beginners",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=NSNlHw-5cpjOFWdk"
    ],
    categories: ["videos", "programming"],
  },
  {
    title: "JavaScript Full Course - Oneshot video",
    description: "Complete JavaScript tutorial for beginners .",
    urls: [
      "https://youtu.be/sscX432bMZo?si=0flk6bJ_vvsYvxYE" , "https://youtu.be/_TjtAyMkiTI?si=Q4Rbt2TdARav5jwm"
    ],
    categories: ["videos", "programming"],
  },
  // AWS S3 Resources
  {
    title: "Amazon S3 Documentation",
    description: "Learn about Amazon S3, an object storage service for the web.",
    urls: ["https://aws.amazon.com/s3/"],
    categories: ["docs", "services"],
  },
  {
    title: "Amazon S3 Tutorial (with hands-on)",
    description: "AWS S3 tutorial that demonstrates how to manage objects in Amazon S3.",
    urls: [
      "https://www.youtube.com/watch?v=1X0RovGUo7w"
    ],
    categories: ["videos", "services"],
  },
  // AWS Lambda Resources
  {
    title: "AWS Lambda Documentation",
    description: "Learn how to use AWS Lambda for running code in response to events.",
    urls: ["https://docs.aws.amazon.com/lambda/"],
    categories: ["docs", "services"],
  },
  {
    title: "AWS Lambda Tutorial for Beginners",
    description: "Learn AWS Lambda with this comprehensive video tutorial for beginners.",
    urls: [
      "https://www.youtube.com/watch?v=39w7gL1GGak"
    ],
    categories: ["videos", "services"],
  },
  // AWS DynamoDB Resources
  {
    title: "Amazon DynamoDB Documentation",
    description: "Get detailed information about Amazon DynamoDB, a NoSQL database service.",
    urls: ["https://aws.amazon.com/dynamodb/"],
    categories: ["docs", "services"],
  },
  {
    title: "AWS DynamoDB Tutorial",
    description: "A detailed tutorial to help you get started with DynamoDB.",
    urls: [
      "https://www.youtube.com/watch?v=HaIPmFvv7Js"
    ],
    categories: ["videos", "services"],
  },
  // AWS EC2 Auto Scaling Resources
  {
    title: "Amazon EC2 Auto Scaling Documentation",
    description: "Learn how to scale your EC2 instances based on demand with EC2 Auto Scaling.",
    urls: ["https://aws.amazon.com/ec2/autoscaling/"],
    categories: ["docs", "services"],
  },
  {
    title: "EC2 Auto Scaling Video Guide",
    description: "Watch this tutorial on how to configure EC2 Auto Scaling for your application.",
    urls: [
      "https://www.youtube.com/watch?v=_HksLxtL6AY"
    ],
    categories: ["videos", "services"],
  },
  // AWS CloudWatch Resources
  {
    title: "Amazon CloudWatch Documentation",
    description: "CloudWatch documentation for monitoring and observability in AWS.",
    urls: ["https://aws.amazon.com/cloudwatch/" , "https://docs.aws.amazon.com/cloudwatch/"],
    categories: ["docs", "services"],
  },
  {
    title: "CloudWatch Tutorial for Beginners",
    description: "Learn to monitor AWS resources using CloudWatch.",
    urls: [
      "https://www.youtube.com/watch?v=YNZ2ljrGl2I"
    ],
    categories: ["videos", "services"],
  },
  {
    title: "Reactjs Tutorial for Begineners",
    description: "Learn Reactjs from the video tutorial available on youtube.",
    urls: [
      "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=Kb8QEHNkjSL38wAw" , "https://youtu.be/eILUmCJhl64?si=oPR-sr43ENDFYo1a"
    ],
    categories: ["videos"],
  },
];

export const AwsDocs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [contentLoaded, setContentLoaded] = useState(false);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; vx: number; vy: number }[]>([]);

  // Set content loaded after a small delay to ensure smooth animations
  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Particles animation effect for background
  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    
    const updateParticles = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
          y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight
        }))
      );
    }, 50);
    
    return () => clearInterval(updateParticles);
  }, []);

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "docs", label: "Documentation" },
    { id: "videos", label: "Video Tutorials" },
    { id: "services", label: "AWS Services Learning (Personal)" },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const getIcon = (category: string) => {
    switch (category) {
      case "docs":
        return <FaBook className="text-cyan-300" />;
      case "videos":
        return <FaVideo className="text-blue-400" />;
      case "services":
        return <FaServer className="text-cyan-400" />;
      default:
        return <FaExternalLinkAlt className="text-blue-300" />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 font-mono p-4 md:p-8 relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
            }}
            initial={false}
            animate={{
              x: particle.vx * 10,
              y: particle.vy * 10,
              transition: { repeat: Infinity, duration: 2, ease: "linear" }
            }}
          />
        ))}
      </div>
      
      {/* Glowing cloud effect */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse z-0"></div>

      <motion.div
        initial="hidden"
        animate={contentLoaded ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10"
      >
        
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div 
            className="mb-6 relative"
            variants={itemVariants}
          >
            <div className="relative backdrop-blur-sm bg-gray-900/70 border border-gray-700 hover:border-cyan-500/50 transition-all rounded-lg shadow-md p-4 flex items-center">
              <FaSearch className="text-cyan-400 mr-3 text-xl" />
              <input
                type="text"
                placeholder="Search your respective resources..."
                className="flex-1 outline-none bg-transparent text-gray-100 placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div 
            className="mb-6 flex flex-wrap gap-2"
            variants={itemVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-md"
                    : "bg-gray-800/60 backdrop-blur-sm text-gray-300 border border-gray-700 hover:border-cyan-500/50"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(8, 145, 178, 0.1)" }}
                className="backdrop-blur-sm bg-gray-900/70 border border-gray-700 hover:border-cyan-500/50 transition-all rounded-lg p-5 shadow-lg"
              >
                <div className="flex items-start mb-4">
                  <div className="text-2xl mr-3">{getIcon(resource.categories[0])}</div>
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-cyan-400">{resource.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{resource.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-700 pt-3">
                  <div className="flex flex-wrap gap-1">
                    {resource.categories.map((category, idx) => (
                      <span key={idx} className="text-xs rounded-full bg-blue-900/60 text-blue-300 border border-blue-700 px-2 py-1">
                        {category}
                      </span>
                    ))}
                  </div>
                  <div className="space-x-2">
                    {resource.urls.map((url, idx) => (
                      <motion.a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-cyan-400 hover:text-cyan-300 p-1"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <motion.div 
              variants={itemVariants}
              className="backdrop-blur-sm bg-gray-900/70 border border-gray-700 rounded-lg text-center py-12 text-gray-400"
            >
              No resources found matching your search
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};