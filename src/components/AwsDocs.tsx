import { useState } from "react";
import { FaBook, FaCopy, FaVideo, FaServer, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { MdOutlineSpeakerNotes } from "react-icons/md";

const resources = [
  {
    title: "AWS Official Documentation",
    description: "Comprehensive documentation for all AWS services.",
    urls: ["https://docs.aws.amazon.com/"],
    categories: ["docs"],
  },
  {
    title: "python code with harry : Oneshot",
    description:"This video is available on youtube channel name codewithharry ",
    urls: ["https://youtu.be/v9bOWjwdTlg?si=T5U3hBCowfEtBLTo"],
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
      "https://www.youtube.com/watch?v=UrsmFxEIp5k&pp=ygUWY29kZSB3aXRoIGhhcnJ5IHB5dGhvbg%3D%3D"
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
    description: "Complete JavaScript tutorial for beginners by freeCodeCamp.",
    urls: [
      "https://www.youtube.com/watch?v=PkZNo7MFNFg"
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
];

export const AwsDocs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copied, setCopied] = useState(false); // Moved to correct place

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
        return <FaBook className="text-blue-500" />;
      case "videos":
        return <FaVideo className="text-red-500" />;
      case "services":
        return <FaServer className="text-green-500" />;
      default:
        return <FaExternalLinkAlt className="text-gray-500" />;
    }
  };

  const upicopy = () => {
    const upiId = "kinshuk25jan04@oksbi";
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen rounded-sm bg-gradient-to-t from-gray-900 to-black p-4 md:p-8">
      <div className="mb-4 p-4 rounded-lg border-2 border-black white bg-gradient-to-br from-black to-gray-900">
        <h1 className="font-semibold text-2xl text-yellow-500  flex items-center">
          <MdOutlineSpeakerNotes className="text-yellow-500 rounded-sm mr-2" /> Note:
        </h1>
        <p className="text-sm text-white font-semibold ">
          As you explore my website and get to know me a bit more, I’d like to share a small request. If you’ve found the resources and content helpful and would like to support my work, I’d greatly appreciate any donations to help cover the server costs. Your support would go a long way in helping me continue to improve and maintain this site.
          <br />
          <br />
          Thank you so much for your consideration! 😊
        </p>
        <button
          onClick={upicopy} // Corrected function call
          className="flex items-center font-semibold  cursor-pointer text-sm gap-2 rounded-full text-white hover:font-semibold mt-2 px-4 py-2 bg-blue-500 hover:shadow-white transition-all shadow-md"
        >
          <FaCopy className="text-white" />
          {copied ? "UPI ID Copied!" : "Copy UPI ID"}
        </button>
        <span className="mt-3 mb-3 text-white font-semibold">Please Dont transfer more than 500Rs Its a humble reuqest to everyone </span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-6  relative z-10">
          <div className="relative rounded-xl bg-gradient-to-r from-gray-800 to-gray-600 text-white border border-black font-semibold shadow-md p-3 flex items-center">
            <FaSearch className="text-yellow-500 mr-3" />
            <input
              type="text"
              placeholder="Search your respective resources..."
              className="flex-1 outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6  flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 text-sm rounded-lg  transition ${
                selectedCategory === category.id
                  ? "bg-gray-900 text-white font-semibold shadow-md"
                  : "tracking-widebg-gradient-to-br from-gray-800 via-black to-gray-700 text-white k hover:bg-gray-900"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource, index) => (
            <div
              key={index}
              className="tracking-wide bg-gradient-to-r from-gray-900 via-black via-gray-700 via-gray-800 to-gray-900 rounded-xl text-white p-4 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex  items-start mb-3">
                <div className="text-xl mr-3">{getIcon(resource.categories[0])}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{resource.title}</h3>
                  <p className="text-sm text-gray-200">{resource.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-sm bg-gray-700 p-1 px-2 rounded-full text-white capitalize">
                  {resource.categories.join(", ")}
                </span>
                <div className="space-x-2">
                  {resource.urls.map((url, index) => (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-gray-500">No resources found matching your search</div>
        )}
      </div>
    </div>
  );
};
