import { Link } from "react-router-dom";
import bookstorelogo from "../../../assets/bookstorelogo.png";

const BrandLogo = () => {
  return (
    <Link to="/">
      <img className="cartIcon" src={bookstorelogo} alt="#" />
    </Link>
  );
};

export default BrandLogo;
