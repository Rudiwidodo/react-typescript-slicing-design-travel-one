import { useState, useEffect } from 'react';

import { Navlink } from './navlink';
import { ResponsiveNavbar } from './responsive-navbar';

// static images
import logo from '../../assets/images/Logo.svg';
import arrowDownIcon from '../../assets/icons/arrow-down-active-icon.svg';
import hamburgerIcon from '../../assets/icons/hamburger-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';

export const Navbar: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      setHeight(this.window.scrollY);
    });
    height > 15 ? setChecked(true) : setChecked(false);
  }, [height]);

  const hanldeShowNavbar = (): void => {
    showNavbar ? setShowNavbar(false) : setShowNavbar(true);
  };

  return (
    <>
      <header className="relative">
        <nav
          className={`fixed z-20 pt-12 pb-3 p-0 left-0 flex items-center w-full transition duration-500 ease-in-out ${
            checked ? 'bg-white shadow' : ''
          } max-sm:py-5 max-md:px-5 md:px-[90px]`}
        >
          <div className="flex-1">
            <a href="#">
              <img src={logo} alt="travel landing page logo" />
            </a>
          </div>
          <div className="max-lg:hidden">
            <ul className="flex gap-x-14 mr-20">
              <Navlink to="#destination">Desitnations</Navlink>
              <Navlink to="#">Hotels</Navlink>
              <Navlink to="#">Flights</Navlink>
              <Navlink to="#">Bookings</Navlink>
            </ul>
          </div>
          <div className="flex items-center gap-x-10 max-xl:hidden">
            <Navlink to="#">Login</Navlink>
            <button
              type="button"
              className="text-gray-800 text-[17px] font-poppins font-medium rounded-md ring-1 ring-gray-800 py-2 px-5"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="text-gray-800 text-[17px] font-poppins font-medium flex items-center justify-between w-[40px]"
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
      </header>
    </>
  );
};
