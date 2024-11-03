import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./App.css";

import Explore from "./component/Explore";
import Navbar from "./component/Navbar";
import Sponsor from "./component/Sponsor";
import Post from "./component/post";
import Footer from "./component/Footer";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Section6 from "./component/Section6";
import Section9 from "./component/Section9";
import Section7 from "./component/Section7";

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Explore />
      <Section5 />
      <Sponsor />
      <Section6 />
      <Section7 />
      <Post />
      <Section9 />
      <Footer />
    </>
  );
}

export default App;
