import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../public/logo.svg";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content z-10">
      <aside>
        <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
        <p>
          JR Residence Ltd.
          <br />
          Providing reliable estate since 2000
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a
          target="_blank"
          href="https://propertyinspect.com/blog/what-is-multifamily-housing-and-benefits/"
          className="link link-hover"
        >
          Multiple-Family Homes
        </a>
        <a
          target="_blank"
          href="https://www.booking.com/hotel/th/beach-bungalow-at-lanta-resort.html"
          className="link link-hover"
        >
          Beach-Bungalow
        </a>
        <a
          target="_blank"
          href="https://zums.edu.bd/student-housing/"
          className="link link-hover"
        >
          Student Housing
        </a>
        <a
          target="_blank"
          href="https://www.vacasa.com/"
          className="link link-hover"
        >
          Vacation Rentals
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact-us" className="link link-hover">
          Contact
        </Link>
        <Link to="/login" className="link link-hover">
          Login
        </Link>
        <Link to="/register" className="link link-hover">
          Register
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="flex justify-center gap-3">
          <a
            target="_blank"
            href="https://www.facebook.com/"
            className="link link-hover"
          >
            <FaFacebook size={30} color="#0866ff" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/"
            className="link link-hover"
          >
            <BsInstagram size={30} />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/home"
            className="link link-hover"
          >
            <RiTwitterXLine size={30} />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
