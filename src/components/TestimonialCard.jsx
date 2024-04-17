import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ review }) => {
  const { name, image, description, location } = review;
  return (
    <div className="mt-14  mb-10">
      <div className="bg-base-100 shadow-xl flex flex-col justify-between rounded-xl h-[417px] p-5">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full">
            <img src={image} className="mx-auto" />
          </div>
        </div>
        <div className="card-body justify-between gap-5">
          <div className="flex items-center gap-2 justify-center">
            <FaStar color="#ffc662" size={25} />
            <FaStar color="#ffc662" size={25} />
            <FaStar color="#ffc662" size={25} />
            <FaStar color="#ffc662" size={25} />
            <FaStar color="#ffc662" size={25} />
          </div>
          <p>{description}</p>
          <p className="text-[14px]">
            <span className=" font-semibold">{name}</span>,Happy buyer,
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default TestimonialCard;
