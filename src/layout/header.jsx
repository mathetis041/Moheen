/* eslint-disable react/prop-types */
import { Logo } from "../assets";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

function Header({ cart }) {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Products", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header>
      <nav className="gradient px-6 w-full">
        <div className="flex items-center justify-between py-3 max-w-[1120px] mx-auto text-white">
          <div className="flex items-center gap-3">
            <a href="tel:090000000" className="flex gap-1 items-center">
              <MdIcons.MdOutlinePhone />
              <span className="max-md:hidden">090 000 000</span>
            </a>
            <a
              href="mailto:ajayimichael@gmail.com"
              className="flex gap-1 items-center"
            >
              <MdIcons.MdMail />
              <span className="max-md:hidden">Moheen@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-xl">
            <a href="#">
              <RiIcons.RiInstagramLine size="1rem" />
            </a>
            <a href="#">
              <MdIcons.MdFacebook size="1rem" />
            </a>
            <a href="#">
              <RiIcons.RiTwitterXFill size="0.8rem" />
            </a>
          </div>
        </div>
      </nav>
      <nav className="flex items-center justify-between py-3 max-lg:px-6 lg:max-w-[1120px] mx-auto bg-white">
        <img src={Logo} alt="Moheen Collection" />
        <nav className="flex items-center gap-4 max-md:hidden">
          {navLinks.map((link, id) => (
            <div key={id + link.name} className="cursor-pointer">
              {link.name}
            </div>
          ))}
        </nav>
        <nav className="flex items-center gap-3 py-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral cursor-pointer hover:text-secondary hover:border-secondary">
            <MdIcons.MdSearch size="1.2rem" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral cursor-pointer hover:text-secondary hover:border-secondary relative">
            <MdIcons.MdOutlineShoppingBag size="1.2rem" />
            <span className="absolute -bottom-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full border border-neutral text-[10px] font-semibold bg-white">
              {cart}
            </span>
          </div>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
