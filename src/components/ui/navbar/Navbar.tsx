import { IoMenu } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi";
import { navLinks } from "./navLinks";
import MenuNavigation from "./MenuNavigation";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
// get
const Logo = () => {
  return (
    <h1 className="flex gap-x-2 items-center">
      <BiCameraMovie className="text-amber-400 text-xl" />
      <span className="text-sm">Movies app</span>
    </h1>
  );
};

const MobileNavbar = () => {
  return (
    <nav className="flex justify-between py-4 px-8">
      <Logo />
      <button className="w-7 h-7 flex items-center justify-center">
        <IoMenu />
      </button>
    </nav>
  );
};

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  if (isMobile) return <MobileNavbar />;
  return (
    <nav className="flex items-center justify-between py-4 flex-wrap w-full max-nav:px-8 h-nav-y">
      <div className="flex items-center gap-x-16">
        <Logo />
        <MenuNavigation items={navLinks} />
      </div>
      <div className="flex gap-x-8 items-center">
        <SearchBar />
        <button className="cursor-pointer">
          <Avatar />
        </button>
      </div>
    </nav>
  );
};

export { Navbar };
