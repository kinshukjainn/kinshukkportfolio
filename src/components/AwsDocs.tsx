// AwsDocs.tsx
import { useState } from "react";
import { FaBook, FaVideo, FaServer, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

const resources = [
  {
    title: "AWS Official Documentation",
    description: "Comprehensive documentation for all AWS services.",
    url: "https://docs.aws.amazon.com/",
    category: "docs",
  },
  {
    title: "AWS Free Tier Explained",
    description: "Learn what AWS Free Tier includes and how to use it effectively.",
    url: "https://aws.amazon.com/free/",
    category: "docs",
  },
  {
    title: "AWS re:Invent 2023 Keynote",
    description: "Latest AWS innovations and updates from re:Invent 2023.",
    url: "https://www.youtube.com/watch?v=dPZmYAGuF34",
    category: "videos",
  },
  {
    title: "Amazon EC2",
    description: "Elastic Compute Cloud for scalable cloud computing.",
    url: "https://aws.amazon.com/ec2/",
    category: "services",
  },
];

export const AwsDocs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Resources" },
    { id: "docs", label: "Documentation" },
    { id: "videos", label: "Video Tutorials" },
    { id: "services", label: "AWS Services" },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar - lower z-index than header */}
        <div className="mb-6 relative z-10">
          <div className="relative bg-white text-black border border-black font-semibold  shadow-md p-3 flex items-center">
            <FaSearch className="text-blue-500 mr-3" />
            <input
              type="text"
              placeholder="Search AWS resources..."
              className="flex-1 outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2  text-sm transition ${
                selectedCategory === category.id
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
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
              className="bg-gray-200 text-black p-4 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start mb-3">
                <div className="text-xl mr-3">{getIcon(resource.category)}</div>
                <div className="flex-1">
                  <h3 className="font-medium text-lg">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-xs text-gray-500 capitalize">{resource.category}</span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <FaExternalLinkAlt />
                </a>
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