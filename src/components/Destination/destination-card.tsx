type Props = {
  pathImage: string;
  alt: string;
  location: string;
  price: number;
  sendIcon: string;
  dayTrips: string;
};

export const DestionationCard: React.FC<Props> = ({
  pathImage,
  alt,
  location,
  price,
  sendIcon,
  dayTrips,
}) => {
  return (
    <>
      <div className="relative w-[355px] h-[517px] rounded-[24px] shadow-xl shadow-slate-300 p-1 max-xl:flex-none max-sm:w-[320px]">
        <img src={pathImage} alt={alt} className="w-full h-full object-fill" />
        <div className="absolute bottom-0 left-0 w-full h-[147px] rounded-b-[24px] bg-white p-6">
          <div className="flex justify-between text-lg font-poppins font-medium text-gray-500">
            <p>{location}</p>
            <p>${price}k</p>
          </div>
          <div className="mt-5 flex gap-4 text-base font-poppins font-medium text-gray-500">
            <img
              src={sendIcon}
              alt="travel landing page send icon"
              height={22}
              width={22}
            />
            <span>{dayTrips}</span>
          </div>
        </div>
      </div>
    </>
  );
};
