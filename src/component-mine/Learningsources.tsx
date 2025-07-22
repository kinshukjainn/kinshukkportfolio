import { FaLaptopCode } from 'react-icons/fa';

// We inject the necessary CSS keyframes directly into the component using a <style> tag
// to adhere to the single-file requirement. This is generally not recommended for
// larger projects but is a clean solution for this specific use case.
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes backgroundPan {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -200% -200%;
    }
  }
  .animate-fadeInUp {
    animation: fadeInUp 0.7s ease-out forwards;
    opacity: 0; /* Start as invisible */
  }
`;

/**
 * A responsive, animated placeholder page inspired by modern design principles.
 * Features a subtle animated background, staggered fade-in animations for content,
 * and a clean, monochromatic color scheme with a single accent for status.
 */
const LearningSources = () => {
  return (
    <>
      <style>{animationStyles}</style>
      <style>{animationStyles}</style>
      <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
        {/* Animated Background: A subtle, moving dot pattern with a vignette effect */}
        <div
          className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000,transparent_90%)] background-pan"
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 space-y-6 md:space-y-8">
          {/* Animated Icon */}
          <div className="animate-fadeInUp delay-1">
            <FaLaptopCode className="text-neutral-600 h-14 w-14 md:h-16 md:w-16" />
          </div>

          {/* Animated Main Heading */}
          <h1
            className="animate-fadeInUp delay-2 text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"
          >
            Learning Hub
          </h1>

          {/* Animated Subtitle */}
          <p
            className="animate-fadeInUp delay-3 text-base md:text-xl max-w-2xl text-neutral-400"
          >
            This section is undergoing a major upgrade. We're crafting a new,
            curated learning experience just for you. Stay tuned!
          </p>

          {/* Animated Status Badge */}
          <div
            className="animate-fadeInUp delay-4 flex items-center justify-center space-x-2.5 rounded-full bg-neutral-800/70 px-4 py-2 text-sm text-neutral-300 ring-1 ring-neutral-700/80 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span>Status: In Progress</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default LearningSources;