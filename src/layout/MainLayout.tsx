import Carousel from "../heroSection/Carousel";

import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <main>
        <Carousel/>
     
        </main>
        <Footer/>
    </>
  )
}

export default MainLayout;