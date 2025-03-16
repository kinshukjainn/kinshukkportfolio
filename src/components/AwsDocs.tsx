import { useState } from "react";
import { FaDatabase, FaArchive, FaCloud } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

// AWS Service Categories with Icons
const awsCategories: Record<
  string,
  { icon: JSX.Element; services: { name: string; description: string; link: string }[] }
> = {
  Compute: {
    icon: <PiComputerTowerFill className="text-xl mr-2" />,
    services: [
      {
        name: "Amazon EC2",
        description: "Scalable compute capacity in the AWS cloud.",
        link: "https://docs.aws.amazon.com/ec2/",
      },
      {
        name: "AWS Lambda",
        description: "Serverless compute service to run code without servers.",
        link: "https://docs.aws.amazon.com/lambda/",
      },
    ],
  },
  Storage: {
    icon: <FaArchive className="text-xl mr-2" />,
    services: [
      {
        name: "Amazon S3",
        description: "Object storage service with high security and scalability.",
        link: "https://docs.aws.amazon.com/s3/",
      },
      {
        name: "Amazon S3 Glacier",
        description: "Long-term archival storage with flexible retrieval.",
        link: "https://docs.aws.amazon.com/s3/",
      },
    ],
  },
  Database: {
    icon: <FaDatabase className="text-xl mr-2" />,
    services: [
      {
        name: "Amazon RDS",
        description: "Managed relational database supporting multiple engines.",
        link: "https://docs.aws.amazon.com/rds/",
      },
      {
        name: "Amazon DynamoDB",
        description: "Managed NoSQL database for high-performance applications.",
        link: "https://docs.aws.amazon.com/dynamodb/",
      },
    ],
  },
  Networking: {
    icon: <FaCloud className="text-xl mr-2" />,
    services: [
      {
        name: "Amazon VPC",
        description: "Isolated cloud environment for AWS resources.",
        link: "https://docs.aws.amazon.com/vpc/",
      },
      {
        name: "AWS Route 53",
        description: "Scalable domain name system (DNS) for traffic routing.",
        link: "https://docs.aws.amazon.com/route53/",
      },
    ],
  },
};

export const AwsDocs = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof awsCategories>("Compute");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white p-4 md:p-6">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full bg-gray-200 border border-black shadow-lg p-4 mb-4 md:mb-0">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> AWS Categories
        </h2>
        <ul className="space-y-2">
          {Object.entries(awsCategories).map(([category, { icon }]) => (
            <li
              key={category}
              className={`cursor-pointer flex items-center p-3 text-lg font-medium transition 
                ${selectedCategory === category ? "bg-black text-white" : "hover:font-bold"}`}
              onClick={() => setSelectedCategory(category as keyof typeof awsCategories)}
            >
              {icon}
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content Section */}
      <main className="md:w-3/4 w-full p-4 md:p-6 bg-gray-100 border border-black shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
          <MdOutlineKeyboardDoubleArrowRight className="mr-2" /> {selectedCategory} Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awsCategories[selectedCategory]?.services?.map((service) => (
            <div
              key={service.name}
              className="bg-gray-200 p-5 shadow-md border border-black transition-transform transform hover:scale-105 "
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-3">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
