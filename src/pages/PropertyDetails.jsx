import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const PropertyDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((item) => item.id === parseInt(id));

  const {
    image_url,
    estate_title,
    status,
    location,
    price,
    description,
    segment_name,
    facilities,
    rating,
  } = service;
  return (
    <div className="my-12 flex flex-col md:flex-row gap-12 lg:justify-between ">
      <Helmet>
        <title className="lowercase">details {estate_title}</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="rounded-2xl bg-[#1313130D]  lg:w-[48%]"
      >
        <Swiper
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={image_url}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image_url}
              alt="image"
              className=" object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image_url}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image_url}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image_url}
              alt="image"
              className="object-cover md:h-[800px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-[48%]">
        <h1 className="text-[#131313] text-[40px]  leading-none playfair font-bold">
          {estate_title}
        </h1>
        <p className="text-[20px] text-[#131313CC] work-sans font-medium mt-4 mb-6">
          Segment : {segment_name}
        </p>
        <div className="border-[1px] border-solid border-[#13131326] "></div>
        <p className="my-4 text-[#131313CC] text-[20px] font-medium">
          RESIDENTIAL
        </p>
        <div className="border-[1px] border-solid border-[#13131326] "></div>
        <p className="my-6 text-[#131313] text-[16px] font-bold work-sans">
          Description:{" "}
          <span className="text-[16px] font-normal text-[#131313B2] work-sans">
            {description}
          </span>
        </p>
        <div className="gap-4">
          <p className="font-bold text-[#131313] pb-3">Facilities</p>
          <ul className="flex flex-col md:flex-row md:items-center gap-4">
            {facilities.map((facility, idx) => (
              <li className="text-[#131313B2]" key={idx}>
                #{facility}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-[1px] border-solid border-[#13131326] my-6"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-12">
            <p className="col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Location :
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {location}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <p className=" col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Status:
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {status}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <p className=" col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Price:
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {price}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <p className=" col-span-5 text-[16px] text-[#131313B2] work-sans font-normal">
              Rating:
            </p>
            <p className="col-span-7 work-sans text-[#131313] text-[16px] font-semibold">
              {rating}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-bold">
              Go Back
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
