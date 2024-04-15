import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { id, image_url, estate_title, status, location, price, description } =
    service;
  return (
    <div className="card  glass">
      <figure>
        <img src={image_url} alt="car!" className="object-cover" />
      </figure>
      <div className="card-body pl-6">
        <h2 className="card-title">{estate_title}</h2>
        <div className="flex justify-between items-center">
          <p>Price: {price}</p>
          <p>Status: For {status}</p>
        </div>
        <p>Location: {location}</p>
        <p>
          {description.length > 100
            ? description.slice(0, 100) + ".........."
            : description}
        </p>
        <div className="card-actions justify-center mt-5">
          <Link
            to={`/property/${id}`}
            className="px-5 py-2 relative rounded  group overflow-hidden font-medium bg-purple-50 text-[#267188] inline-block border-[1px] border-[#267188]"
          >
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#267188] group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white font-bold">
              View Property
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
