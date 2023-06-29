import { DestionationCard } from './destination-card';
import { DestinationData } from '../../static-data/destination-data';
import { useState } from 'react';

// static image
import decoreDestination from '../../assets/images/decore-destination.svg';
import chevronLeftIcon from '../../assets/icons/chevron_left_icon.svg';
import chevronRightIcon from '../../assets/icons/chevron_right_icon.svg';

export const Destination: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handlePrev = (): void => {
    count == 0 ? setCount(DestinationData.length - 1) : setCount(count - 1);
  };

  const handleNext = (): void => {
    count == DestinationData.length - 1 ? setCount(0) : setCount(count + 1);
  };
  return (
    <>
      <section className="mt-24 mb-20" id="destination">
        <div className="text-center">
          <p className="text-lg font-poppins font-normal">Top Selling</p>
          <h5 className="text-5xl font-volkhov font-bold mt-2 max-sm:text-3xl">
            Top Destinations
          </h5>
        </div>
        <div className="relative gap-12 flex justify-between mt-14 pb-6 px-2 max-xl:overflow-x-scroll max-lg:overflow-hidden max-lg:justify-center change-scroll">
          {DestinationData.map((items) => {
            return (
              <DestionationCard
                key={items.id}
                keyid={items.id}
                imageId={count + 1}
                pathImage={items.pathImage}
                alt={items.alt}
                location={items.location}
                price={items.price}
                sendIcon={items.seedIcon}
                dayTrips={items.dayTrips}
              />
            );
          })}
          <img
            src={decoreDestination}
            alt="travel landing page decore destination image"
            className="absolute bottom-8 -right-12 -z-10 max-xl:hidden"
          />
          <button
            onClick={handlePrev}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center lg:hidden"
          >
            <img
              src={chevronLeftIcon}
              alt="travel landing page chevron left icon"
            />
          </button>
          <button
            onClick={handleNext}
            type="button"
            className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center lg:hidden"
          >
            <img
              src={chevronRightIcon}
              alt="travel landing page chevron left icon"
            />
          </button>
        </div>
      </section>
    </>
  );
};
