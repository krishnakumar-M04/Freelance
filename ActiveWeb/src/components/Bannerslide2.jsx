
import banner2 from "../assets/img/img_v_3.jpg"
const Bannerslide2 = () => {
  return (
    <div className="flex bg-white mt-[100px] w-[90%] gap-3  justify-between ml-[80px] font-roboto ">
      <div className=" w-2/4 pl-24 pt-20 " data-aos="fade-up">
        <h4 className="">Our Mission</h4>
        <h2 className=" mt-5  w-[410px] text-2xl  font-extrabold">The Big Oxmox advised her not to do so, because there were thousands.</h2>
        <p className="mt-4 w-[410px] ">
        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.
              </p>
              <p className="mt-4 w-[410px] ">
              The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.
              </p>
        <button className="mt-16 w-36 h-10 rounded-full bg-[rgb(52,191,73)] text-white">Get Started</button>
      </div>
          <div  className="w-2/4 mr-12" data-aos="fade-up" >
              <img src={banner2}  className="w-[606px] h-[522px]"  alt="" />
      </div>
    </div>
  )
}

export default Bannerslide2
