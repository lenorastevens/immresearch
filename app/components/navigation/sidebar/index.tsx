import Link from "next/link";
import { JSX } from "react";
import { Close } from '@mui/icons-material';

const Sidebar = ({
  isOpen,
  toggle,
  }: {
    isOpen: boolean;
    toggle: () => void;
  }): JSX.Element => {
  return (
    <>
      <div
        className={`sidebar-container fixed w-64 h-full overflow-hidden justify-center bg-background grid pt-[120px] right-0 z-10 transition-all duration-300 ${
         isOpen ? "opacity-100 top-0" : "opacity-0 -top-full"}`}
      >  
        <button type="button" title="Close Menu" className="absolute right-0 p-5" onClick={toggle}>
          <Close fontSize="large"/>
        </button>

        <ul>
          <li>
          <Link href="/" onClick={toggle}><span> Home</span></Link>
          <Link href="/go" onClick={toggle}><span> What Money?</span></Link>
          <Link href="/stop" onClick={toggle}><span> I think I know about my money!!!</span></Link>
          <Link href="/contact" onClick={toggle}><span> Contact Us</span></Link>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Sidebar;