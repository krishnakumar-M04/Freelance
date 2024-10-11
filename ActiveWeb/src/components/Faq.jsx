
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
const Faq = () => {
    const faqs = [
        {
          question: "How to download and register?",
          answer: "Download and register using the app from the Play Store or App Store.",
        },
        {
          question: "What are the payment methods?",
          answer: "You can pay via credit card, debit card, or PayPal.",
        },
        {
          question: "Is there a refund policy?",
          answer: "Yes, we offer a 30-day money-back guarantee.",
        },
      ];
    
   
      const [openIndex, setOpenIndex] = useState(null);
    
    
      const toggleFAQ = (index) => {
   
        if (openIndex === index) {
          setOpenIndex(null);
        } else {

          setOpenIndex(index);
        }
      };
    
    return (
        <div className='bg-white items-center flex justify-center '>
           <div>
            <div className='text-center pt-20' data-aos="fade-up">
                <h1 className='font-medium text-xl'>Plans</h1>
                <h2 className='text-2xl font-bold pt-4'>Frequently Asked Questions</h2>
            </div>
            <div className=' w-[1260px] mt-10 bg-gray-100 '>
            <div>
                {faqs.map((faq, index) => (
                    <div key={index} className='  pt-5 ml-10  font-roboto font-bold cursor-pointer' >
                   
                        <p onClick={() => toggleFAQ(index)} className="cursor-pointer pb-5" data-aos="fade-up">
                            <IoIosArrowDown className='inline'/> {faq.question}
                        </p>
                 
                        <p className={`val ${openIndex === index ? "block" : "hidden"} font-medium pt-3 pl-8 pb-2`}>
                            {faq.answer}
                        </p>
                    </div>
                ))}
                </div>
                </div>
                </div>
        </div>
    );
   
}

export default Faq
