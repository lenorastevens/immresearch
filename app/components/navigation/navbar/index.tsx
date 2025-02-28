import React from "react";
import Link from "next/link";
import { MenuOpen } from "@mui/icons-material";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8 h-full">
          <div className="flex justify-between items-end h-full">
            <h1 className="text-4xl mr-4">Help Me Get My Money</h1>
            <button type="button" title="Open Menu" className="inline-flex items-center md:hidden"
              onClick={toggle}>
                <MenuOpen fontSize="large"/>
            </button>
            <ul className="text-sm hidden md:flex gap-x-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/go">What Money?</Link>
              </li>
              <li>
                <Link href="stop/">I think I know about the money!!!</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
             
        </div>
      </div>
    </>
  )

};

export default Navbar;