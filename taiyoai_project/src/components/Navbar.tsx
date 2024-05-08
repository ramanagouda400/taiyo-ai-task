import { Link } from "react-router-dom";

const buttonStyle = "bg-black hover:bg-white hover:text-black p-2 text-white";
const linkStyle = "w-fit";

const Navbar = () => {
  return (
    <nav className="bg-darkseagreen p-6 flex basis-50% gap-4 flex-row md:flex-col">
      <Link to="/contacts" className={linkStyle}>
        <button className={buttonStyle} >Contacts</button>
      </Link>
      <hr />
      <Link to="/chartandmaps" className={linkStyle}>
        <button className={buttonStyle}>Charts & Maps</button>
      </Link>
    </nav>
  );
};

export default Navbar;
