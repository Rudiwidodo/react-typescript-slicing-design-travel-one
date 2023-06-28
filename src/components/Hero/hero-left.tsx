type Props = {
  path: string;
  onclik: () => void;
};

export const HeroLeft: React.FC<Props> = ({ path, onclik }) => {
  return (
    <>
      <div>
        <h5 className="font-poppins font-extrabold text-xl text-color-1 max-md:hidden">
          Best Destinations around the world
        </h5>
        <h3 className="text-7xl leading-[80px] font-volkhov font-bold text-color-2 mt-6 max-xl:text-6xl max-xl:leading-[74px] max-md:text-5xl max-md:leading-[60px] max-sm:mt-2 max-sm:text-3xl">
          Travel
          <span className="bg-decore-hero-text bg-no-repeat pr-12 bg-left-bottom max-xl:bg-none max-xl:pr-0">
            , enjoy
          </span>{' '}
          and live a new and full life
        </h3>
        <p className="font-poppins font-extralight text-[16px] leading-[30px] w-[477px] mt-7 max-xl:w-full max-sm:mt-3">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="mt-8 flex gap-10 max-sm:flex-col-reverse max-sm:mt-3">
          <button
            type="button"
            className="w-[170px] h-[60px] rounded-xl bg-color-3 text-white text-[17px] max-sm:w-full"
          >
            Find out more
          </button>
          <div className="flex items-center gap-5 max-sm:mt-3">
            <button
              type="button"
              className="h-[60px] w-[60px] rounded-full bg-color-1 flex justify-center items-center"
              onClick={onclik}
            >
              <img src={path} alt="travel landing page play icon" />
            </button>
            <span className="text-[17px] font-poppins font-extralight">
              Play Demo
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
