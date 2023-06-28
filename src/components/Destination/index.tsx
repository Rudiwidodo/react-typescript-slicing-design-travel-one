import { DestionationCard } from './destination-card';

// static image
import destinationImage1 from '../../assets/images/destination-1-1.png';
import destinationImage2 from '../../assets/images/destination-2-1.png';
import destinationImage3 from '../../assets/images/destination-3-1.png';
import sendIcon from '../../assets/icons/navigation-destination-icon.svg';
import decoreDestination from '../../assets/images/decore-destination.svg';

export const Destination: React.FC = () => {
  return (
    <>
      <section className="mt-24 mb-20" id="destination">
        <div className="text-center">
          <p className="text-lg font-poppins font-normal">Top Selling</p>
          <h5 className="text-5xl font-volkhov font-bold mt-2 max-sm:text-3xl">
            Top Destinations
          </h5>
        </div>
        <div className="relative gap-12 flex justify-between mt-14 pb-6 px-2 max-xl:overflow-x-scroll change-scroll">
          <DestionationCard
            pathImage={destinationImage1}
            alt="travel landing page destination image 1"
            location="Rome, Italty"
            price={5.42}
            sendIcon={sendIcon}
            dayTrips="10 Days Trip"
          />
          <DestionationCard
            pathImage={destinationImage2}
            alt="travel landing page destination image 2"
            location="London, UK"
            price={4.2}
            sendIcon={sendIcon}
            dayTrips="12 Days Trip"
          />
          <DestionationCard
            pathImage={destinationImage3}
            alt="travel landing page destination image 3"
            location="Full Europe"
            price={15}
            sendIcon={sendIcon}
            dayTrips="28 Days Trip"
          />
          <img
            src={decoreDestination}
            alt="travel landing page decore destination image"
            className="absolute bottom-4 -right-14 -z-10 max-lg:hidden"
          />
        </div>
      </section>
    </>
  );
};
