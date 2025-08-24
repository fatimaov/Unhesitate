"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navitems = [
  { label: "Dreams", href: "/dreams" },
  { label: "Motivation", href: "/motivation" },
];

type NavlistProps = {
  mobile?: boolean;
  onClickLink?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Navlist = ({ mobile = false, onClickLink }: NavlistProps) => {
       const pathname = usePathname();
  return (
    <nav className={`flex ${mobile ? "flex-col gap-4 z-50" : "gap-6 items-center"}`}>
      {navitems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-white hover:text-amber-400 transition cursor-pointer${
            pathname === item.href ? "font-semibold text-amber-400" : ""
          }`}
          onClick={onClickLink}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navlist;
