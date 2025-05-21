import { useState, useEffect } from "react";
import { FiExternalLink, FiSearch, FiX } from "react-icons/fi";

const Learningresources = () => {
  // Sample learning resources
  const resources = [
    {
      id: 1,
      title: "Python Tutorial : One shot part-1 Hitesh Chaudhary",
      link: "https://youtu.be/v9bOWjwdTlg?si=ZUQk3quntrvz4Gs6",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter resources based on search term
  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Truncate text helper
  interface TruncateTextParams {
    text: string;
    maxLength: number;
  }

  const truncateText = ({ text, maxLength }: TruncateTextParams): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  // Determine link display length based on screen size
  const getLinkDisplayLength = () => {
    if (windowWidth < 375) return 20;
    if (windowWidth < 640) return 30;
    if (windowWidth < 768) return 40;
    return 60;
  };

  return (
    <div className="min-h-screen font-rubik bg-white flex flex-col">
      {/* Navigation and Menu */}
      <header className="flex flex-col items-center pt-6 pb-4 sm:pt-8 sm:pb-6 px-4">
        <h1 className="text-black font-bold  text-4xl sm:text-4xl md:text-5xl tracking-wide">
          Learning.hub
        </h1>
        <p className="text-blue-900 mt-2 text-center text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md">
          Currently in development. This page will be updated with more resources
        </p>
      </header>

      <main className="flex-grow max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl mx-auto px-4 pb-8 sm:pb-12 w-full">
        {/* Search bar */}
        <div className="relative mb-6 sm:mb-8">
          <div className="flex items-center border-b-2 border-black py-2">
            <FiSearch className="text-black mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent focus:outline-none text-black text-lg sm:text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-yellow-500 p-2 ml-1 flex-shrink-0"
                title="Clear search"
                aria-label="Clear search"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* Resource list */}
        <div className="space-y-4 sm:space-y-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="group  py-3 sm:py-4 transition-all"
              >
                <div className="flex bg-blue-200 border-3 border-black rounded-2xl  p-3  cursor-pointer justify-between items-start">
                  <div className="flex-grow pr-2">
                    <h3 className="text-base sm:text-lg  text-blue-900 font-bold group-hover:text-blue-900 break-words">
                      {resource.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-black mt-1 truncate">
                      {truncateText({
                        text: resource.link,
                        maxLength: getLinkDisplayLength(),
                      })}
                    </p>
                  </div>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white rounded-full  border-2 border-black hover:text-white bg-blue-800 transition-colors p-2 flex-shrink-0 touch-action-manipulation"
                    title={`Visit ${resource.title}`}
                    aria-label={`Visit ${resource.title}`}
                  >
                    <FiExternalLink
                      size={16}
                      className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                    />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 sm:py-12">
              <p className="text-white text-lg sm:text-base">
                No resources found matching "{searchTerm}"
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-white bg-blue-800 hover:bg-blue-600 cursor-pointer rounded-full text-sm sm:text-base py-2 px-4 touch-action-manipulation"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Empty state for when there are no items */}
        {resources.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-yellow-500 text-sm sm:text-base">
              No learning resources available yet.
            </p>
          </div>
        )}
      </main>

      {/* Responsive footer */}
      <footer className=" w-full py-4 px-4 text-center text-xs sm:text-sm text-white ">
        <p>© {new Date().getFullYear()} Learning.hub - All rights reserved</p>
      </footer>
    </div>
  );
};

export default Learningresources;
