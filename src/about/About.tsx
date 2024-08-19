import image from "../assets/images/Image-9-1.png";
import image2 from "../assets/images/about img.avif";
import image1 from "../assets/images/player-bg.png";
import image3 from "../assets/images/team1.png";
import image4 from "../assets/images/sports.jpg";

import { GiCornerFlag } from "react-icons/gi";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRunning,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineSportsHandball } from "react-icons/md";
import { Button, Card } from "antd";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import Contact from "../home/Contact";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <main className="my-2 md:my-0 relative ">
      <section className="w-screen h-full md:h-[420px] relative">
        <div className="w-full h-full bg-[#1f1d1d] bg-opacity-20">
          <img
            src={image4}
            alt="sports-image"
            className="size-full object-content  "
          />
        </div>
        <div className="absolute top-40 w-full h-full">
          <h1 className="text-7xl font-bold text-center text-red-500 ">
            About Us
          </h1>
        </div>
      </section>
      <section className="w-full h-auto md:h-[850px] border p-1">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full  relative py-10 md:py-16">
            <img className=" w-full h-[700px] rounded-lg " src={image} alt="" />
            <div className="w-56 h-56 md:w-72 md:h-72  flex-col justify-items-center justify-center rounded-full bg-red-500 border-8 border-white p-8 md:p-14 absolute ml-10 translate-x-64 md:translate-x-80 -translate-y-48 md:-translate-y-72 sm:translate-x-72">
              <img className="size-8 md:size-16 mx-auto " src={image2} alt="" />
              <h1 className="text-center text-xl md:text-5xl text-white my-2">
                20 +
              </h1>
              <h1 className="text-center text-white text-xl my-2">
                Years of experience
              </h1>
            </div>
          </div>
          <div className="w-full h-full p-5 md:py-16 md:px-20">
            <div className="mb-8">
              <h1 className="text-start font-semibold text-2xl text-red-500">
                About Us
              </h1>
            </div>
            <div className="text-5xl text-[#3F3F3F] font-bold">
              <h1> We Are The Best Sports Academy</h1>
            </div>
            <div className="text-justify my-10">
              <p>
                Welcome to SportsMI, where we are committed to transforming
                athletes into champions. Founded on the principles of
                excellence, dedication, and passion, SportsMI aims to provide a
                supportive and dynamic environment for athletes of all ages and
                skill levels.
              </p>
            </div>
            {/*  right site */}
            <div className="my-6 ">
              <div className="flex justify-start justify-items-center my-4  ">
                <div className="w-14 h-14 border rounded-md flex justify-center justify-items-center p-2 mr-4">
                  <span>
                    <GiCornerFlag size={30} color="red" />
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-[#3F3F3F] ">
                    Professional Team
                  </h1>
                  <p className="text-md text-gray-500 ">
                    Modern & latest equipment with expert coaching
                  </p>
                </div>
              </div>
              <div className="flex justify-start justify-items-center my-4">
                <div className="w-14 h-14 border rounded-md flex justify-center justify-items-center p-2 mr-4">
                  <span>
                    <MdOutlineSportsHandball size={30} color="red" />;
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-[#3F3F3F]">
                    Professional Trainings
                  </h1>
                  <p className="text-md text-gray-500">
                    Modern & latest equipment with expert coaching
                  </p>
                </div>
              </div>
              <div className="flex justify-start justify-items-center my-4">
                <div className="w-14 h-14 border rounded-md flex justify-center justify-items-center p-2 mr-4">
                  <span>
                    <FaRunning size={30} color="red" />
                  </span>
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-[#3F3F3F]">
                    Practice Facilities
                  </h1>
                  <p className="text-md text-gray-500">
                    Modern & latest equipment with expert coaching
                  </p>
                </div>
              </div>
              <div className="w-full h-28 flex justify-end">
                <img src={image1} alt="" className="w-32 h-32 md:h-48" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* our mission and vision section */}
      <section className="w-screen h-full md:h-auto my-10">
        <div className="w-screen h-full px-1 md:px-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="w-full h-full py-10 border px-1">
              <div className="my-2">
                <h1 className="text-red-400 font-bold text-3xl">Our Mission</h1>
                <h1 className="text-5xl font-bold text-[#0D0E10] my-5">
                  Innovating for Success:
                </h1>
                <h1 className="text-5xl font-bold text-[#0D0E10] my-4">
                  Our Sports Mission
                </h1>
                <div className="">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur quod cum omnis fugit hic temporibus
                    dolores laudantium nulla dolorem rerum architecto, nesciunt
                    voluptate commodi necessitatibus recusandae adipisci,
                    officia consequatur id consequuntur eos. Minus rem,
                    doloremque non quae reiciendis ut? Nisi nihil nemo
                    doloremque, eligendi beatae minus ratione possimus adipisci?
                  </p>
                  <p className="my-5 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur velit sint praesentium blanditiis consequatur
                    sed placeat voluptatem sapiente dicta amet aspernatur,
                    excepturi accusamus, deleniti, cupiditate odit? Alias
                    voluptatum nihil aperiam pariatur iste quis sequi magni cum
                    enim itaque minima dolore dolorem eum corrupti, aspernatur
                    totam provident voluptatem suscipit similique quisquam?
                  </p>
                </div>
              </div>
              <div>
                <Button type="default" className="py-6 px-8 uppercase">
                  Know More
                </Button>
              </div>
            </div>
            {/* under visions part */}
            <div className="w-full h-full py-10 border">
              <img src={image1} className="w-full h-[500px]" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full h-full py-10 border">
              <div className="w-full h-auto">
                <img src={image2} className="w-full h-[250px]" alt="" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img src={image3} className="w-full h-[250px]" alt="" />
                </div>
                <div>
                  <img src={image4} className="w-full h-[250px]" alt="" />
                </div>
              </div>
            </div>
            <div className="w-full h-full py-10 border px-1">
              <div className="my-2">
                <h1 className="text-red-400 font-bold text-3xl">Our Vision</h1>
                <h1 className="text-5xl font-bold text-[#0D0E10] my-5">
                  Driving Innovation :
                </h1>
                <h1 className="text-5xl font-bold text-[#0D0E10] my-4">
                  Our Vision at
                </h1>
                <div className="">
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta consectetur quod cum omnis fugit hic temporibus
                    dolores laudantium nulla dolorem rerum architecto, nesciunt
                    voluptate commodi necessitatibus recusandae adipisci,
                    officia consequatur id consequuntur eos. Minus rem,
                    doloremque non quae reiciendis ut? Nisi nihil nemo
                    doloremque, eligendi beatae minus ratione possimus adipisci?
                  </p>
                  <p className="my-5 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur velit sint praesentium blanditiis consequatur
                    sed placeat voluptatem sapiente dicta amet aspernatur,
                    excepturi accusamus, deleniti, cupiditate odit? Alias
                    voluptatum nihil aperiam pariatur iste quis sequi magni cum
                    enim itaque minima dolore dolorem eum corrupti, aspernatur
                    totam provident voluptatem suscipit similique quisquam?
                  </p>
                </div>
              </div>
              <div>
                <Button type="default" className="py-6 px-8 uppercase">
                  Know More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact SECTION  */}
      <section>
        <Contact />
      </section>

      {/* OUR TEAM SECTION start from here */}
      <section className="border bg-[#EEEEEE] py-2">
        <div className="my-5 w-full h-auto md:h-[700px]">
          <div>
            <h1 className="text-center text-2xl text-red-500 font-semibold my-3">
              Our Team
            </h1>
          </div>
          <div>
            <h1 className="text-center text-5xl">Meet Our Experts</h1>
          </div>
          <div className="w-2/3 mx-auto my-5">
            <h1 className="text-center leading-8">
              SportsMI Sports Academy is a Sports Academy with a history that
              goes back to XX century. From a cricket Academy to soccer
              tournaments
            </h1>
          </div>
          <div className="md:px-32">
            <Slider {...settings}>
              <Card className="h-full shadow-lg" style={{ width: 260 }}>
                <div className="overflow-hidden">
                  <img
                    src={image3}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="h-full shadow-lg" style={{ width: 260 }}>
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="h-full shadow-lg" style={{ width: 260 }}>
                <div className="overflow-hidden">
                  <img
                    src={image1}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="h-full shadow-lg" style={{ width: 260 }}>
                <div className="overflow-hidden">
                  <img
                    src={image2}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="h-full shadow-lg" style={{ width: 260 }}>
                <div className="overflow-hidden">
                  <img
                    src={image3}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="h-full shadow-lg" style={{ width: 260 }}>
                <div className="overflow-hidden">
                  <img
                    src={image2}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
              <Card className="h-full shadow-lg">
                <div className="overflow-hidden">
                  <img
                    src={image3}
                    alt=""
                    className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="text-center  text-gray-500">
                  <h1 className="text-lg font-bold hover:text-red-400">
                    Team Member{" "}
                  </h1>
                </div>
                <div className="text-center text-sm text-gray-500">
                  <h1 className="text-lg">Team Member </h1>
                </div>
                <div className="my-6">
                  <ul className="space-x-2 flex justify-center justify-items-center ">
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="text-[#1877F2] hover:text-[#4267B2] ease-in-out duration-300">
                          <FaFacebook size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.linkedin.com/in/jamir-ali-36755b1b7/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#0A66C2] hover:text-[#000000] ease-in-out duration-300">
                          <FaLinkedin size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.instagram.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#E1306C] hover:text-[#bd3c67] ease-in-out duration-300">
                          <FaInstagram size={25} />
                        </span>
                      </Link>
                    </li>
                    <li className="w-10 h-10 rounded-md border p-2">
                      <Link
                        to="https://www.twitter.com"
                        target="_blank"
                        className="flex justify-start justify-items-center gap-3 "
                      >
                        <span className="text-[#1DA1F2] hover:text-[#14171A] ease-in-out duration-300">
                          <FaTwitter size={25} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </Card>
            </Slider>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
