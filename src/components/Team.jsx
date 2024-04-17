import PropTypes from "prop-types";
const Team = ({ team }) => {
  const { employee_name, profession, image } = team;
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="1000"
      data-aos-delay="500"
      className="mt-10"
    >
      <div className="  relative">
        <img
          src={image}
          alt="this is image"
          className="h-[425px] object-cover rounded-3xl"
        />
        <div className="absolute bottom-10 left-4 text-white">
          <p className="text-xl font-medium">{employee_name}</p>
          <p className="text-lg font-normal">{profession}</p>
        </div>
      </div>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired,
};

export default Team;
