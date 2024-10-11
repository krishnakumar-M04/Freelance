import Bannerslide from "../components/Bannerslide"
import Bannerslide2 from "../components/Bannerslide2"
import { Blogsec } from "../components/Blogsec"
import Blogsec2 from "../components/Blogsec2"
import Card from "../components/Card"
import Card2 from "../components/Card2"
import Faq from "../components/Faq"
import OurServices from "../components/OurServices"
import Pricecard from "../components/Pricecard"
import Testimonials from "../components/Testimonials"


const Home = () => {
  return (
    <div>
          <Bannerslide />
          <Bannerslide2 />
          <Card />
          <Card2 />
          <Blogsec />
          <Blogsec2 />
          <OurServices />
          <Pricecard />
          <Faq />
          <Testimonials/>
    </div>
  )
}

export default Home
