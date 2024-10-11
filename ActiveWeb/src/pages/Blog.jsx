 
import Subhead from "../components/Subhead"
import ig1 from "../assets/img/blog/blog-1.jpg"
import ig2 from "../assets/img/blog/blog-2.jpg"
import ig3 from "../assets/img/blog/blog-3.jpg"


const Blog = () => {
  const blog = [
    {
      img:ig1,
      name: "Sorts",
      date: "Jan 2022",
      description:"Dolorum optio tempore voluptas dignissimos"
    },
    {
      img:ig2,
      name: "Webs",
      date: "Jan 2022",
      description:"Dolorum optio tempore voluptas dignissimos"
    },
    {
      img: ig3,
      name: "Maintenance",
      date: "Jan 2022",
      description:"Dolorum optio tempore voluptas dignissimos"
    }
  ]
  return (
    <div>
      <Subhead sectionName='Blog' />
      <div className='flex flex-wrap gap-8 justify-center pt-20 pb-20' >
      {blog.map((val,index) => {
        return (
          <div key={index} >
            <div data-aos="fade-up" >
              
              <img src={val.img} className=" w-[450px] h-[350px]"alt="" />
              <p className='inline '>{val.name}</p>
              <p className='inline pl-3'>{val.date}</p>
              <p className='pt-4 text-xl font-bold  hover: cursor-pointer hover:text-green-500'>{val.description}</p>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Blog
