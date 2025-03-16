import SocialMedia from "../socialmedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t border-gray-700 rounded-xl shadow-lg font-poppins text-black py-8">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Name & Tagline */}
        <h2 className="text-2xl font-semibold text-black">Kinshuk Jain / cloud </h2>
        <p className="text-black mt-2 max-w-lg">
          Cloud Engineer / DevOps & Infrastructure Automation  
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4">
          <SocialMedia />
        </div>

        {/* Call-to-Action */}
        <p className="text-sm text-black mt-6">
          Open to opportunities in cloud engineering, DevOps, and security.  
          <span className="text-black font-medium"> Let's build something amazing together!</span>
        </p>

        {/* Copyright */}
        <p className="text-black text-xs mt-4">
          © {new Date().getFullYear()} Kinshuk Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
