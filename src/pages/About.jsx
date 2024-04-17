import { Helmet } from "react-helmet-async";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineRequestPage } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { RiHomeSmileFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="mb-10 px-2 md:px-0">
      <Helmet>
        <title>about</title>
      </Helmet>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className={` bg-no-repeat object-contain bg-contain h-auto flex justify-center items-center lr relative`}
      >
        <div>
          <img
            src="https://i.ibb.co/gDryvdk/team.jpg"
            alt="team-image"
            className="w-full md:h-[600px] object-cover brightness-50"
          />
        </div>
        <h2 className="md:text-[52px] text-xl text-center text-white absolute">
          More About US
        </h2>
      </div>

      <div
        className=" mt-[100px]"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <h2 className="text-center text-[34px] mb-7">About our company</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:text-left text-justify gap-y-14 ">
          <div>
            <h3 className="text-[20px] font-bold">Our Mission</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              With over $2 Billion in sales, Our agency is the industry’s top
              luxury producer with over 27 years of experience in marketing
              Seattles’s most prestigious waterfront properties.{" "}
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Our Vision</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              Due to our unparalleled results, expertise and dedication, we rank
              amongst the Top 6 agencies in Seattle and our area. She is also
              and is an elite member to Corcoran’s Presidents Council.{" "}
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Our Values</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              With her years of experience, impressive property portfolio,
              celebrity clientele, and unparalleled knowledge of the market and
              pedigree estates, Simone estimable business is sophisticated and
              renowned.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">Our Resources</h3>
            <p className="md:pr-10 text-[17px] font-normal pt-3">
              With her years of experience, impressive property portfolio,
              celebrity clientele, and unparalleled knowledge of the market and
              pedigree estates, Simone estimable business is sophisticated and
              renowned.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[200px]">
        <div className="grid md:grid-cols-12 items-center   gap-14 ">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="md:col-span-6 grid grid-cols-12 md:gap-4 gap-2"
          >
            <div className="col-span-4 ">
              <img
                src="https://i.ibb.co/1RhHJ6p/first-image.webp"
                alt="view-image"
                className="object-cover  h-[564px] rounded-[20px]"
              />
            </div>
            <div className="col-span-4">
              <img
                src="https://i.ibb.co/sQ4SbK5/second-image.jpg"
                alt="slider-image"
                className="h-[564px] w-auto object-cover rounded-[20px]"
              />
            </div>
            <div className="col-span-4">
              <img
                src="https://i.ibb.co/nwGTCSG/dalan.jpg"
                alt="dalan-image"
                className="h-[564px] w-auto object-cover rounded-[20px]"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:col-span-6"
          >
            <h2 className="text-[34px] font-bold">
              Find your new home <br /> with us
            </h2>
            <p className="text-[17px] py-10">
              You can contact us through various social site and we sell home,
              rent home, free services , free potshot also and many other
              services we provided.
            </p>
            <div className="grid md:grid-cols-2 gap-5 ">
              <div className="flex items-center gap-5">
                <div>
                  <PiHandshakeLight size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Sell your home</p>
                  <p className="text-[14px] font-normal">free service</p>
                </div>
              </div>
              <div className="flex items-center  gap-5">
                <div>
                  <BsGraphUpArrow size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Buy a home</p>
                  <p className="text-[14px] font-normal">No fees asked</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <MdOutlineRequestPage size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Free Appraisal</p>
                  <p className="text-[14px] font-normal">No fees asked</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <RiHomeSmileFill size={50} />
                </div>
                <div>
                  <p className="text-[16px] font-medium">Free Photoshoot</p>
                  <p className="text-[14px] font-normal">
                    Professional service
                  </p>
                </div>
              </div>
            </div>
            <div className="text-left mt-10">
              <Link
                to="/contact-us"
                className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white font-bold">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
