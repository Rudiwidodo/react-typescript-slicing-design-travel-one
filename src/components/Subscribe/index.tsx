import mailSmallIcon from '../../assets/icons/mail-small-icon.svg';
import sendLargeIcon from '../../assets/icons/send-large-icon.svg';
import decoreTopRight from '../../assets/images/decore-subscribe-top-right.svg';
import decoreBottomLeft from '../../assets/images/decore-sbscribe-bottom-left.svg';
import decorSubscribe from '../../assets/images/subscribe-decore.svg';
import notificationIcon from '../../assets/icons/notifications_active_icon.svg';

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
      <img
        src={sendLargeIcon}
        alt="travel landing page send large icon"
        className="absolute -top-6 -right-4 max-md:hidden"
      />
      <img
        src={decorSubscribe}
        alt="travel landing page decore subscribe"
        className="absolute -bottom-16 -right-20 max-lg:hidden"
      />
      <div className="bg-slate-200 origin-top-left w-full h-[407px] rounded-tl-[130px] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] flex flex-col justify-center items-center max-lg:px-3">
        <h3 className="text-center w-[867px] text-[33px] font-poppins font-bold text-color-5 leading-[54px] max-lg:text-2xl max-lg:w-full max-md:text-lg">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="relative mt-[74px] max-sm:flex max-sm:justify-between">
          <input
            type="email"
            placeholder="Your Email"
            className="outline-none focus:ring-2 focus:ring-sky-400 invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 py-[18px] pl-[66px] w-[421px] rounded-md text-base font-poppins font-medium max-md:w-max max-md:py-4 max-sm:w-full max-sm:pl-[40px]"
          />
          <img
            src={mailSmallIcon}
            alt="travel landing page mail small icon"
            className="absolute top-1/2 -translate-y-1/2 left-8 max-sm:left-2"
          />
          <button
            type="button"
            className="hover:-translate-y-2 transition duration-500 ease-in ml-6 w-[160px] py-[16px] bg-gradient-to-b from-red-400 to-red-400 rounded-lg text-lg text-white font-poppins font-medium max-md:w-max max-md:py-3 max-md:px-5 max-sm:ml-1 max-sm:w-1/5 max-sm:h-full max-sm:px-3"
          >
            <span className="max-sm:hidden">subscribe</span>
            <img
              src={notificationIcon}
              alt="travel landing page notification icon"
              className="sm:hidden"
            />
          </button>
        </div>
      </div>
    </section>
  );
};
