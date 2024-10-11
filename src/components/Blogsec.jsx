import chair from "../assets/img/img_h_4.jpg";
import lamp from "../assets/img/img_h_2.jpg";
import stare from "../assets/img/img_h_3.jpg";
import winston from "../assets/img/team/team-1.jpg";
import gold from "../assets/img/team/team-2.jpg";
import charles from "../assets/img/team/team-3.jpg";

export const Blogsec = () => {
  const blogsec = [
    {
      image: chair,
      title: "Development",
      date: "july/01/2021",
      para1: "There live the blind texts they live",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      authorimage: winston,
      authorname: "winston",
      designation: "Lead product Designer",
    },
    {
      image: lamp,
      title: "Development",
      date: "july/01/2021",
      para1: "There live the blind texts they live",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      authorimage: gold,
      authorname: "winston gold",
      designation: "Lead product Designer",
    },
    {
      image: stare,
      title: "Development",
      date: "july/01/2021",
      para1: "There live the blind texts they live",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      authorimage: charles,
      authorname: "Charles",
      designation: "Lead product Designer",
    },
  ];
  return (
    <>
      <div className="text-center mt-32">
        <h4>Recent Post</h4>
        <h1 className="text-lg font-semibold">Blog Posts</h1>
      </div>
      <div className="flex justify-center  ml-24 mr-24 bg-white">
        {blogsec.map((val, index) => (
          <div
            key={index}
            className="card p-4 m-2 mt-20 rounded"
            data-aos="fade-up"
            >
            <img src={val.image} alt={val.title} className="w-[450px] h-auto rounded" />
            <div className="ml-4 mt-6">
              <h3 className="text-lg  mt-5 inline cursor-pointer ">{val.title}</h3>
              <p className="text-sm pl-4 text-gray-600 inline">{val.date}</p>
              <p className="text-gray-600 w-[280px] font-bold mt-3 cursor-pointer hover:text-lime-700">{val.para1}</p>
              <p className="mt-2">{val.description}</p>

              <div className="flex items-center mt-4">
                <img
                  src={val.authorimage}
                  alt={val.authorname}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="font-bold">{val.authorname}</p>
                  <h3 className="text-sm text-gray-500">{val.designation}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
