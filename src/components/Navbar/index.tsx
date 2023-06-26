import { useState } from 'react';

import { Container } from '../Container';
import { Navlink } from '../Navlink';
import { ResponsiveNavbar } from './responsive-navbar';

// static images
import logo from '../../assets/images/Logo.svg';
import arrowDownIcon from '../../assets/icons/arrow-down-active-icon.svg';
import hamburgerIcon from '../../assets/icons/hamburger-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';

export const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const hanldeShowNavbar = (): void => {
    showNavbar ? setShowNavbar(false) : setShowNavbar(true);
  };

  return (
    <>
      <header>
        <Container>
          <nav className="fixed flex items-center max-sm:py-3 max-sm:w-full sm:w-4/5 sm:top-12 max-sm:px-5">
            <div className="flex-1">
              <img src={logo} alt="travel landing page logo" />
            </div>
            <div className="max-lg:hidden">
              <ul className="flex gap-x-14 mr-20">
                <Navlink to="#">Desitnations</Navlink>
                <Navlink to="#">Hotels</Navlink>
                <Navlink to="#">Flights</Navlink>
                <Navlink to="#">Bookings</Navlink>
              </ul>
            </div>
            <div className="flex items-center gap-x-10 max-xl:hidden">
              <Navlink to="#">Login</Navlink>
              <button
                type="button"
                className="text-gray-800 text-[17px] font-poppins font-bold rounded-md ring-1 ring-gray-800 py-2 px-5"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="text-gray-800 text-[17px] font-poppins font-bold flex items-center justify-between w-[40px]"
              >
                EN{' '}
                <span>
                  <img
                    src={arrowDownIcon}
                    alt="travel landing page arrow down icon"
                  />
                </span>
              </button>
            </div>
            {/* responsive navbar */}
            {/* haburger icon */}
            <div className="hidden max-xl:flex max-xl:items-center">
              <div onClick={hanldeShowNavbar}>
                <img
                  src={hamburgerIcon}
                  alt="travel landing page hamburger icon"
                />
              </div>
            </div>
            {/* end hamburger icon */}
            {/* navbar responsive */}
            {showNavbar && (
              <ResponsiveNavbar
                pathLogo={logo}
                pathClose={closeIcon}
                onclik={hanldeShowNavbar}
              />
            )}
          </nav>
        </Container>
      </header>
    </>
  );
};
