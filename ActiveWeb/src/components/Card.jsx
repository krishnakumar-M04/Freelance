
import tech from "../assets/img/Screenshot 2024-10-09 224907.png"
import web from "../assets/img/Screenshot 2024-10-09 224927.png";
import brand from "../assets/img/Screenshot 2024-10-09 224940.png";
const Card = () => {
    const card = [
        {
            image: tech,
            title: "Technology",
            description: "Separated they live in Bookmarksgrove right at the coast"
        },
        {
            image: web,
            title: "Web Design",
            description: "Separated they live in Bookmarksgrove right at the coast"
        },
        {
            image: brand,
            title: "Branding",
            description: "Separated they live in Bookmarksgrove right at the coast"
        }
    ];
    return (
        <>
         <div className="flex flex-wrap justify-center ml-12">
            {card.map((val,index) => (
                <div key={index}  className="card p-4 m-2 mt-28 ml-16  rounded " data-aos="fade-up" >
                    <img src={val.image} alt={val.title} className="w-[80px] h-auto " />
                    <h3 className="text-lg font-bold mt-5">{val.title}</h3>
                    <p className="text-gray-600 w-[280px] mt-3 ">{val.description}</p>
                </div>
            ))}
        </div>
        </>
    )
}
export default Card
