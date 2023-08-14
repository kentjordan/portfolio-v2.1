import "styles/Navbar.css";
import _Navbar from "./styled/_Navbar.styled";

import { AnimNavbar, TransNavbar, InitNavbar } from "./animations/navbar.anim";

import { useContext } from "react";
import SET_SWITCH, { SWITCH_1 } from "./enums/switch.enum";

import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import { SwitchNavContext } from "pages/Home/contexts/Home.context";

const Navbar = () => {
  // Contexts
  const { switchNav } = useContext(SwitchNavContext);

  // States
  const openNavMenu = () => switchNav[SWITCH_1](SET_SWITCH.ON);

  return (
    <_Navbar animate={AnimNavbar} transition={TransNavbar} initial={InitNavbar}>
      <div
        className='DownloadCV cursor-pointer'
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/149PTJqvzNqqHtncaiwU3Z8v3PmE2UdSc/view?usp=sharing"
          )
        }>
        <p className='font-bold'>DOWNLOAD CV</p>
        <div className='Line'></div>
      </div>

      <div className='SocialMedia'>
        <BsGithub
          onClick={() => window.open("https://github.com/kentjordan")}
          size={27}
          className='SocialMediaIcons cursor-pointer'
        />
        <BsTwitter
          onClick={() => window.open("https://twitter.com/_kentjordan")}
          size={29}
          className='SocialMediaIcons cursor-pointer'
        />
        <FaFacebookF
          onClick={() => window.open("https://www.facebook.com/kentaki.dev")}
          size={28}
          className='SocialMediaIcons cursor-pointer'
        />

        <div onClick={openNavMenu} className='HamburgerMenu'>
          <div className='Line'></div>
          <div className='Line'></div>
        </div>
      </div>
    </_Navbar>
  );
};

export default Navbar;
