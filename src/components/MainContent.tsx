import Rightcontent from "../Content/Rightcontent";
import Leftcontent from "../Content/Leftcontent";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start p-4 gap-4 bg-white rounded-lg w-full max-w-7xl mx-auto font-inter">
        <Rightcontent className="w-full md:w-1/2" />
        <Leftcontent className="w-full md:w-1/2" />
      </div>
    </>
  );
};

export default MainContent;
