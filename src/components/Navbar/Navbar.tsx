import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiUser } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

type props = {
  openNav: () => void;
};
export default function Navbar({ openNav }: props) {

  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? " font-semibold border-b-3 border-green-500 pb-1"
      : "hover:text-[#749b3f]";

  return (
    <div
      className=" w-full transition-all bg-[#2D5016] duration-300 h-[12vh] z-1000 "
    >
      <div className="w-[95%] lg:w-[90%] mx-auto flex items-center justify-between h-full ">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <Image
            src="/images/logo.png"
            alt="TriGardening Logo"
            width={50}
            height={50}
            className=""
          />
          <Link href='/'> <h1 className="text-xl lg:text-2xl font-bold text-white">
            TriGardening
          </h1></Link>
        </div>
        {/* navLinks */}
        <div className="hidden md:flex items-center gap-10 text-white">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>
          <Link href="/plantClinic" className={linkClass("/plantClinic")}>
            Plant Clinic
          </Link>
        </div>

        <div className="flex items-center gap-10 text-white">
          {/* Call Now */}
          <button className="hidden md:flex items-center gap-1 bg-[#E17E27] text-white px-3 py-1 rounded-md text-sm hover:bg-[#d36f1e] transition">
            <FaPhone size={16} />
            <span>Call Now</span>
          </button>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-transparent border border-white/50 rounded-full px-3 py-1 text-sm">
            <input
              type="text"
              placeholder="Search plants, tools"
              className="bg-transparent outline-none text-white placeholder:text-white w-40"
            />
            <MdSearch size={16} className="ml-1" />
          </div>

          {/* Cart */}
          <div className="relative hidden sm:flex cursor-pointer">
            <MdShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs rounded-full px-1">
              {/* {cartCount} */}
3
            </span>
          </div>

          {/* User */}
          <BiUser size={20} className="cursor-pointer hidden sm:flex" />

          {/* Hamburger Menu (Mobile) */}
          <RxHamburgerMenu
            onClick={openNav}
            className="w-7 h-7 lg:hidden text-2xl cursor-pointer"
          />
        </div>
      </div>


    </div>
  )
}
