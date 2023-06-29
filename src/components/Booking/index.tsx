import { BookingTitle, LeftCard } from './LeftCard';
import { RightCard } from './RightCard';

// static images
import bookingImage1 from '../../assets/images/book-trip-image.svg';
import bookingOngoing from '../../assets/images/book-trip-ongoing-image.svg';
import bookingMapIcon from '../../assets/icons/map-icon.svg';
import bookingSendIcon from '../../assets/icons/send-icon.svg';
import bookingLeafIcon from '../../assets/icons/leaf-icon.svg';
import bookingBuildingIcon from '../../assets/icons/building-icon.svg';
import bookingHeartIconNormal from '../../assets/icons/heart-normal-icon.svg';
import bookingHeartLinkIcon from '../../assets/icons/heart-like-icon.svg';

export const Booking: React.FC = () => {
  return (
    <>
      <section id="booking" className="bg-color-4 py-20">
        <div className="sm:w-[90%] md:w-[85%] sm:mx-auto max-sm:px-5">
          <div className="grid grid-cols-12 max-sm:gap-y-5 sm:gap-y-10">
            <div className="col-span-5 max-lg:col-span-full">
              <BookingTitle />
              <div className="mt-8 grid grid-rows-3 gap-y-11 max-sm:gap-y-5">
                <LeftCard />
              </div>
            </div>
            <div className="col-span-6 col-start-7 flex justify-center items-center max-lg:col-span-full">
              <RightCard
                pathBooking={bookingImage1}
                pathOngoing={bookingOngoing}
                leafIcon={bookingLeafIcon}
                mapIcon={bookingMapIcon}
                sendIcon={bookingSendIcon}
                buildingIcon={bookingBuildingIcon}
                heartLikeIcon={bookingHeartLinkIcon}
                heartNormalIcon={bookingHeartIconNormal}
                person={24}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
