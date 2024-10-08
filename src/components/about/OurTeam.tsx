import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Card } from "antd";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import { useGetAllTeamMembersQuery } from "../../redux/api/teamApi";
import { ITeamResponse } from "types/types";
import Spinner from "../../utils/Spinner";

const OurTeam = () => {
  const { data, isLoading } = useGetAllTeamMembersQuery("", {
    pollingInterval: 5000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  console.log(data);
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
    <>
      {isLoading ? (
        <div className="text-center">
          <Spinner />
        </div>
      ) : (
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
                {data?.data &&
                  data?.data.map((item: ITeamResponse, index: number) => {
                    return (
                      <Card
                        key={index}
                        className="h-full shadow-lg"
                        style={{ width: 260 }}
                      >
                        <div className="overflow-hidden">
                          <img
                            src={item.image.url}
                            alt=""
                            className="w-full h-[250px] object-content  hover:scale-105 transition-all duration-300 ease-in-out"
                          />
                        </div>
                        <div className="text-center font-bold my-4 text-3xl">
                          <h1 className="text-lg font-bold hover:text-red-400">
                            {item.name}
                          </h1>
                        </div>
                        <div className="text-center  text-gray-700">
                          <h1 className="text-lg font-semibold">
                            {" "}
                            {item.role}{" "}
                          </h1>
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
                    );
                  })}
              </Slider>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default OurTeam;
