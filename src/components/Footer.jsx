import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
const Footer = () => {
  return (
      <>
          <div className="bg-gray-100 ">
      <div className="flex justify-between pt-16 ">
        <div className="ml-20">
          <h1 className="text-xl font-semibold">About Us</h1>
          <p className="w-[300px] pt-6">
            There live the blind texts. Separated they live in Bookmarksgrove
            right at the coast of the Semantics, a large language ocean.
          </p>
          <button className="mt-10 ml-10 rounded-full w-[120px] h-[40px] text-white border-black bg-green-400">Learn More</button>
        </div>
        <div >
                      <h1 className="text-xl font-semibold">Navigation</h1>
                      

                  <div className=" mt-5">
                    <ul>
                          
                      <li><a href="">Overview</a></li>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Find Buyers</a></li>
                      <li><a href="">Overview</a></li>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Find Buyers</a></li>
                    
                    </ul>
          </div>
        </div>
        <div className="">
          <h1 className="text-xl font-semibold">Recent Posts</h1>
          <p className=" mt-5">May 3, 2020</p>
          <p>There live the Blind Texts</p>
          <p>May 3, 2020</p>
          <p>Separated they live in Bookmarksgrove right</p>
                  </div>
                  
                  <div className="mr-10">
                  <h1 className="text-xl font-semibold">Connect</h1>
                  <div className="flex justify-between mt-5 text-2xl">
                          <FaWhatsapp />
                          < IoLogoInstagram />
                          <FaSquareXTwitter />
                          <FaFacebookMessenger />
                          <FaGooglePlay/>
                      </div>
          <h1 className="text-xl font-semibold mt-5">Subscribe</h1>
          <form action="">
            <input className="w-60 h-10 mt-3" type="email" placeholder="Enter Email" />
          </form>
        </div>
              </div>
              <div className="footer-nav w-[1300px] mt-16 h-[2px] ml-[80px] bg-gray-300"></div>
              <p className="text-center text-[16px] pt-5 mb-5">CopyRight@2024</p>
              
              </div>
    </>
  );
};

export default Footer;
