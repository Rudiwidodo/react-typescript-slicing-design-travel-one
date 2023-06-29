import facebookIcon from '../../assets/icons/facebook-icon.svg';
import twitterIcon from '../../assets/icons/twitter-icon.svg';
import instagramIcon from '../../assets/icons/instagram-icon.svg';
import appleIcon from '../../assets/images/Play Store.svg';
import googlePLayIcon from '../../assets/images/Google Play.svg';

export const Footer: React.FC = () => {
  return (
    <section id="footer" className="mt-32 mb-4">
      <div className="sm:w-[90%] md:w-[85%] sm:mx-auto max-sm:px-5">
        <div className="flex gap-x-24 justify-between items-start max-xl:gap-y-5 max-xl:flex-col max-xl:gap-x-0">
          <div>
            <h2 className="text-[44px] font-poppins font-medium mb-[19px]">
              Jadoo.
            </h2>
            <p className="text-sm font-poppins font-medium">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="max-xl:w-full">
            <div className="flex gap-x-[72px] max-xl:justify-between max-xl:gap-x-0">
              <div>
                <h5 className="text-[21px] font-poppins font-medium mb-[19px]">
                  Company
                </h5>
                <ul className="text-sm font-poppins font-medium flex flex-col gap-y-3">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Mobile</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[21px] font-poppins font-medium mb-[19px]">
                  Contact
                </h5>
                <ul className="text-sm font-poppins font-medium flex flex-col gap-y-3">
                  <li>Help/FAQ</li>
                  <li>Press</li>
                  <li>Affilates</li>
                </ul>
              </div>
              <div>
                <h5 className="text-[21px] font-poppins font-medium mb-[19px]">
                  More
                </h5>
                <ul className="text-sm font-poppins font-medium flex flex-col gap-y-3">
                  <li>Airlinefees</li>
                  <li>Airline</li>
                  <li>Low fare tips</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="max-sm:w-full">
            <div className="flex max-sm:justify-between">
              <img
                src={facebookIcon}
                alt="travel landing page icon"
                className="hover:-translate-y-2 hover:cursor-pointer transition duration-500 ease-out"
              />
              <img
                src={instagramIcon}
                alt="travel landing page icon"
                className="hover:-translate-y-2 hover:cursor-pointer transition duration-500 ease-out"
              />
              <img
                src={twitterIcon}
                alt="travel landing page icon"
                className="hover:-translate-y-2 hover:cursor-pointer transition duration-500 ease-out"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-poppins font-medium text-slate-500">
                Discover our app
              </h3>
              <div className="flex mt-3 gap-y-[6px] max-xl:gap-x-10 max-sm:justify-between">
                <img src={googlePLayIcon} alt="travel landing page icon" />
                <img src={appleIcon} alt="travel landing page icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
