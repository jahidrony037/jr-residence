import { useEffect, useState } from "react";
import Loader from "./Loader";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("services.json");
      const data = await res.json();
      setServices(data);
    };
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return !services.length ? (
    <Loader />
  ) : (
    <div>
      <h2 className="lg:text-4xl text-2xl font-bold text-center pb-2">
        OUR PROPERTIES
      </h2>
      <p className="text-sm font-normal text-center py-6">
        Highlight the best of your properties by using the category. <br />
        You can show all properties and exploring all properties for each
        categories.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-x-8 gap-y-8 mt-8">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
