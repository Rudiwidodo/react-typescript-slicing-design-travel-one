import { BookingData } from '../../static-data/booking-data';

export const BookingTitle: React.FC = () => {
  return (
    <div>
      <p className="text-lg font-poppins font-bold text-slate-500">
        Easy and Fast
      </p>
      <h5 className="text-5xl leading-[60px] font-volkhov text-color-2 font-bold mt-3 max-sm:text-3xl">
        Book Your Next Trip In 3 Easy Steps
      </h5>
    </div>
  );
};

export const LeftCard: React.FC = () => {
  return (
    <>
      {BookingData.map((items) => {
        return (
          <div className={`flex items-center gap-x-6`} key={items.id}>
            <img src={items.pathImage} alt={items.alt} />
            <div>
              <h5 className="text-lg font-poppins font-bold text-slate-500 max-sm:text-sm">
                {items.title}
              </h5>
              <p className="text-lg font-poppins font-medium text-slate-500 max-sm:text-sm">
                {items.content}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
