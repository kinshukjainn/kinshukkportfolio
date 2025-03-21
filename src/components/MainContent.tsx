import RightContent from "../Content/Rightcontent";
import LeftContent from "../Content/Leftcontent";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-start p-4 gap-4 bg-black rounded-lg w-full max-w-7xl mx-auto font-inter">
        <LeftContent className="w-full md:w-1/2" />
        <RightContent className="w-full md:w-1/2" />
      </div>
    </>
  );
};

export default MainContent;
