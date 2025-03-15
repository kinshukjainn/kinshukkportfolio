import Rightcontent from "../Content/Rightcontent";
import Leftcontent from "../Content/Leftcontent";
const MainContent = () => {
  return (
    <>
    <div className="flex flex-col font-inter bg-black mr-2 ml-2 mt-2 mb-2 rounded-lg font-sans md:flex-row justify-center items-start p-6 gap-6">
        
        <Rightcontent/>
        <Leftcontent/>
    </div>
    </>
  )
}

export default MainContent