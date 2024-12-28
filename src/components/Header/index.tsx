import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../context";
import { useAuth } from "../../hooks/useAuth";
import Button from "../Button";
import MobileSidebar from "../MobileSidebar";
import NavigationLinks from "../NavigationLinks";
import UserMenu from "../UserMenu";
import LOGO from "/LOGO.png";

export default function Header() {
  const location = useLocation();
  const { logout, token } = useAuth();
  const { isOpen, toggleSidebar, setIsOpen } = useSidebar();

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  return (
    <motion.header className="flex items-center justify-between px-6 md:px-[15%] w-full h-[12vh] bg-white z-[100]">
      <Link to={"/"} className="font-bold">
        <img src={LOGO} alt="" className="w-10 h-10" />
      </Link>

      <MobileSidebar
        className={`md:hidden flex justify-between items-center py-12 flex-col z-50 gap-8 fixed top-0 left-0 h-full w-[75%] bg-white text-white transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 shadow-xl shadow-black/30"
            : "-translate-x-full"
        }`}
        isOpen={isOpen}
      >
        <NavigationLinks
          className="flex w-full flex-col md:flex items-center justify-center md:gap-20"
          linkClassName="w-full py-4 text-center text-[#0B4fff] md:text-black font-bold border-b"
        />
        <UserMenu className="flex flex-col" logout={logout} token={token} />
      </MobileSidebar>

      <NavigationLinks
        className="hidden md:flex md:gap-8"
        linkClassName="md:font-bold md:hover:text-[#0B4FFF] transition-colors"
      />

      <UserMenu className="hidden" logout={logout} token={token} />

      <Button
        label={isOpen ? <X /> : <Menu />}
        className="md:hidden"
        onClick={() => toggleSidebar()}
      />
    </motion.header>
  );
}
