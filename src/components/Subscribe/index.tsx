import mailSmallIcon from '../../assets/icons/mail-small-icon.svg';
import decoreTopRight from '../../assets/images/decore-subscribe-top-right.svg';
import decoreBottomLeft from '../../assets/images/decore-sbscribe-bottom-left.svg';

export const Subscribe: React.FC = () => {
  return (
    <section id="subscribe" className="mt-28 relative">
      <img
        src={decoreTopRight}
        alt="travel landing page decore top right"
        className="absolute top-0 right-0 opacity-20"
      />
      <img
        src={decoreBottomLeft}
        alt="travel landing page decore bottom left"
        className="absolute bottom-0 left-0 opacity-20"
      />
      <div className="bg-slate-200 origin-top-left w-full h-[407px] rounded-tl-[130px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-center items-center max-lg:px-3">
        <h3 className="text-center w-[867px] text-[33px] font-poppins font-bold text-color-5 leading-[54px] max-lg:text-2xl max-lg:w-full max-md:text-lg">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="relative mt-[74px] max-sm:flex max-sm:justify-between">
          <input
            type="text"
            placeholder="Your Email"
            className="py-[25px] pl-[66px] w-[421px] rounded-md text-base font-poppins font-medium max-md:w-max max-md:py-4 max-sm:w-full"
          />
          <img
            src={mailSmallIcon}
            alt="travel landing page mail small icon"
            className="absolute top-1/2 -translate-y-1/2 left-8"
          />
          <button
            type="button"
            className="ml-6 w-[160px] py-[22px] bg-gradient-to-b from-red-400 to-red-400 rounded-lg text-lg text-white font-poppins font-medium max-md:w-max max-md:py-3 max-md:px-5 max-sm:ml-1"
          >
            subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
