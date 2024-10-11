
import Bannerslide2 from '../components/Bannerslide2'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Subhead from '../components/Subhead'
import Testimonials from '../components/Testimonials'
import RunningSlide from './RunningSlide'

const About = () => {
  return (
    <div>
      <Subhead sectionName='About'/>
      <Bannerslide2 />
      <Card />
      <Card2 />
      <RunningSlide/>
     <Testimonials/>
      
    </div>
  )
}

export default About
