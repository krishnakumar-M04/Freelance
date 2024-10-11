
import Subhead from '../components/Subhead'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
const Contact  = () => {
  return (
    <>
          <Subhead sectionName='Contact ' />
          <div className='flex flex-wrap gap-20'>
          <div className=' w-[550px] h-[350px] shadow-md mt-20 mb-10 ml-20 bg-slate-100 '>
              <h1 className='text-2xl font-bold text-center '>Get in Touch </h1>
              <div className='flex flex-wrap mt-6 ml-20'>
                  <IoLocationSharp className='text-[40px] text-green-500 pt-1 m-2 '/>
                  <div className='pl-5'>
                      <h1 className='text-xl font-bold '>Loctaion </h1>
                      <h4  className='text-[18px] font-semibold ' >A108 Adam Street, New York, NY 535022</h4>

                  </div>
              </div>
              <div className='flex flex-wrap mt-6 ml-20'>
                  <MdOutlineMarkEmailUnread className='text-[40px] text-green-500 pt-1 m-2 '/>
                  <div className='pl-5' >
                    
                  
                      <h1 className='text-xl font-bold '>Email: </h1>
                      <h4  className='text-[18px] font-semibold '>hityueo@gmail.com</h4>

                  </div>
              </div>
              <div className='flex flex-wrap mt-6 ml-20'>
                  <IoMdPhonePortrait className='text-[40px] text-green-500 pt-1 m-2 '/>
                  <div className='pl-5'>
                      <h1 className='text-xl font-bold '>
                      Call: </h1>
                      <h4  className='text-[18px] font-semibold mb-10 '>
                        +91 8766678654
                      </h4>

                  </div>
              </div>
          </div>
          <div className='bg-slate-100 mt-10 mb-10'>
              <form className=''>
                  <input type="text" placeholder='Enter name' className='w-[300px] h-[50px] mt-10 ml-14 text-xl text-center font-medium  mb-5 mr-5 border-black' />
                  <input type="email" placeholder='Enter email'  className='w-[300px] text-xl text-center font-medium h-[50px] mt-10  mb-5 mr-5' />
                  <input className='block w-[700px] h-[50px] mt-5 ml-5 mb-5 mr-5 text-xl text-center font-medium' type='text' placeholder='Subject' />
                      < textarea placeholder='Message' className='w-[700px] h-[250px] text-xl text-center font-medium mt-10  ml-5 mb-5 mr-5 block'  />
                      <button type="submit" className='w-48 text-xl font-semibold rounded-md h-14 bg-green-400 ml-60 mb-5 text-white items-center'>SEND MESSAGE</button>
              </form>
              </div>
              </div>
    </>
  )
}

export default Contact 
  