import { Navlink } from './navlink';

type TResponsiveNavbarProps = {
  pathLogo: string;
  pathClose: string;
  onclik: () => void;
};

export const ResponsiveNavbar: React.FC<TResponsiveNavbarProps> = ({
  onclik,
  pathLogo,
  pathClose,
}) => {
  return (
    <>
      <div
        className="fixed z-20 top-0 left-0 right-0 bottom-0 bg-white xl:hidden"
        onClick={onclik}
      >
        <div className="flex justify-between items-center py-6 shadow px-5 border">
          <a href="#">
            <img src={pathLogo} alt="travel landing page logo" />
          </a>
          <div className="bg-slate-100 w-8 h-8 flex justify-center items-center rounded-lg">
            <img
              src={pathClose}
              alt="travel landing page icon"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col px-4 mt-4">
          <div className="lg:hidden">
            <ul className="flex flex-col gap-y-8">
              <Navlink to="#">Desitnations</Navlink>
              <Navlink to="#">Hotels</Navlink>
              <Navlink to="#">Flights</Navlink>
              <Navlink to="#">Bookings</Navlink>
            </ul>
          </div>
          <div className="flex justify-between items-center flex-1 xl:hidden sm:justify-between lg:flex-col lg:gap-y-8 lg:justify-start">
            <Navlink to="#">Login</Navlink>
            <button
              type="button"
              className="text-gray-800 text-[17px] font-poppins font-medium rounded-md ring-1 ring-gray-800 py-2 px-5"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
