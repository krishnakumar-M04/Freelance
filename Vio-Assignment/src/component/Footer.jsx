import captcha from "../assets/capatcha.png";
import { GoArrowRight } from "react-icons/go";
const Footer = () => {
  return (
    <>
      <div className="bg-[#411A74]">
        <div className=" footer flex  md:flex gap-8 flex-wrap justify-around pt-32">
          <div>
            <img
              className="pb-5 ml-7"
              src="https://placehold.co/80x80"
              alt=""
            />
            <img src="https://placehold.co/140x50" alt="" />
          </div>

          <div className="footer-cont">
            <h1 className="text-[#9c71d4] font-semibold text-2xl ">
              industries
            </h1>
            <ul className="list">
              <li>Ecommerce</li>
              <li>Consumer durables</li>
              <li>logistics</li>
              <li>travel</li>
              <li>fintech</li>
              <li>health</li>
            </ul>
          </div>
          <div className="footer-cont">
            <h1 className="text-[#9c71d4] font-semibold text-2xl ">Solution</h1>
            <ul className="list">
              <li>Assistance</li>
              <li>protection & warranties</li>
              <li>logistics</li>
              <li>motor</li>
              <li>health</li>
            </ul>
          </div>
          <div className="footer-cont">
            <h1 className="text-[#9c71d4] font-semibold text-2xl ">Company</h1>
            <ul className="list">
              <li>about us</li>
              <li>raise a request</li>
              <li>contact</li>
              <li>blog</li>
            </ul>
          </div>
          <div className="footer-cont">
            <h1 className="text-[#9c71d4] font-semibold text-2xl ">
              Get the latest
            </h1>
            <p className="w-80 pt-4 pb-4 text-white text-lg">
              Sign up to receive benefits in your inbox once a month
            </p>
            <input
              className="w-56 h-10 bg-transparent border-2 "
              type="email"
              placeholder="Email*"
            />

            <GoArrowRight className="border-2 inline ml-0 h-11 bg-white w-10 text-center text-2xl " />

            <div className="w-72 mt-7 h-24 bg-white pt-8 gap-10 text-xl pl-5 flex flex-wrap">
              <label htmlFor="" className="footer-label">
                <input type="checkbox" className="transform scale-150" />
                <h6 className="inline ml-2">I&apos;m not robot</h6>
              </label>
              <img className="w-[50px] h-[50px]" src={captcha} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[90%] h-1 bg-white ml-16 mt-16 line"></div>
        <p className="mt-16 text-white text-lg w-[90%] ml-16 line ">
          A huge differentiator between corporate medical insurance plans is the
          waiting period. A group mediclaim insurance for employees doesn&apos;t
          have this limitation. By paying a small amount, employees get group
          medical coverage for pre-existing diseases from the first day of the
          policy. This waived-off waiting period is extended to your spouse as
          well. With corporate group insurance, the primary difference is the
          requirement for pre-medical tests. A best group mediclaim policy in
          India doesn&apos;t require it and even without it, the policies are
          valid. Unlike individual insurance, group health care plans come with
          a range of added benefits such as free and unlimited primary health
          care, maternity benefit, pre and post-hospitalization costs, room and
          boarding, surgical fees, drugs, and medicines, ambulance charges, etc.
        </p>
        <div className="flex flex-wrap justify-between ml-16 pb-10 mr-16 mt-16 text-white">
          <div>
            <h1 className="text-xl ">XXXX</h1>
            <h1>IRDAI Registration No. 585 Valid up to 19/02/2023</h1>
          </div>
          <p className="mt-5">privacy | terms of services</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
