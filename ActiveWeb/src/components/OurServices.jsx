import { FaSearch } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";

const OurServices = () => {
    const service = [{
        image: <FaSearch/>,
        title: "Square",
        description:"Separated they live in Bookmarksgrove right at the coast"
    },
    {
        image: <GrTechnology/>,
        title: "Technology",
        description:"Separated they live in Bookmarksgrove right at the coast"
        },
        {
            image: <HiOutlineSquares2X2/> ,
            title: "Brilliant Ideas",
            description:"Separated they live in Bookmarksgrove right at the coast"
        },
        {
            image:<TbWorld/> ,
            title: "Blueprint",
            description:"Separated they live in Bookmarksgrove right at the coast"
        }]
  return (
    <div className="flex flex-wrap justify-center mt-20 gap-8">
    <div className="w-full md:w-[500px] p-4" data-aos="fade-up">
        <h4 className="text-xl font-bold">Our Services</h4>   
        <h1 className="text-2xl pt-4">Far far away, behind the word mountains, far from the countries Vokalia</h1>
        <p className="text-[16px] pt-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
        <p className="text-[16px] pt-4">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <button className="mt-16 w-36 h-10 text-[18px] rounded-full bg-[rgb(52,191,73)] text-white hover:bg-white hover:text-black">Get Started</button>
    </div>

    {/* Service cards */}
    <div className="w-full md:w-1/2 flex flex-wrap">
        {service.map((val) => (
            <div key={val.title} className="w-full sm:w-1/2 p-4">
                <div className="card p-4 rounded " data-aos="fade-up">
                    <div className="text-4xl text-lime-500 mb-4">{val.image}</div>
                    <h3 className="text-lg font-bold mt-2">{val.title}</h3>
                    <p className="text-gray-600 mt-3">{val.description}</p>
                </div>
            </div>
        ))}
    </div>
</div>
);
}

export default OurServices
