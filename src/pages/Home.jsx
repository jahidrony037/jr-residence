import Banner from "../components/Banner";
import Services from "../components/Services";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <Services />
      <Teams />
      <Testimonials />
    </div>
  );
};

export default Home;
