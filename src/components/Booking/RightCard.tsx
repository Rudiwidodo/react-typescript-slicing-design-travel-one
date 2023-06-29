type Props = {
  pathBooking: string;
  pathOngoing: string;
  leafIcon: string;
  mapIcon: string;
  sendIcon: string;
  buildingIcon: string;
  heartNormalIcon: string;
  heartLikeIcon: string;
  person: number;
};

export const RightCard: React.FC<Props> = ({
  pathBooking,
  pathOngoing,
  leafIcon,
  mapIcon,
  sendIcon,
  buildingIcon,
  heartLikeIcon,
  person,
}) => {
  return (
    <div className="bg-white w-[385px] h-[430px] py-5 px-6 rounded-[26px] hover:cursor-pointer group relative max-xl:h-[480px] max-lg:w-full max-lg:h-full">
      <img
        src={pathBooking}
        alt="travel landing page booking image trip"
        className="max-lg:w-full"
      />
      <div className="mt-6">
        <h5 className="text-lg font-poppins font-medium">Trip To Greece</h5>
        <div className="grid grid-cols-12 mt-3">
          <div className="col-span-7 max-xl:col-span-full">
            <div className="flex gap-x-4 text-base font-poppins font-light">
              <p>14-29 June</p>|<p>by Robbin</p>
            </div>
            <div className="flex items-center mt-5 max-xl:justify-between">
              <div className="flex gap-x-3">
                <img
                  src={leafIcon}
                  alt="travel landing page booking leaf icon"
                  className="hover:scale-125"
                />
                <img
                  src={mapIcon}
                  alt="travel landing page booking map icon"
                  className="hover:scale-125"
                />
                <img
                  src={sendIcon}
                  alt="travel landing page booking send icon"
                  className="hover:scale-125"
                />
              </div>
              <button type="button" className="xl:hidden">
                <img
                  src={heartLikeIcon}
                  alt="tranvel landing page booking heart icon"
                />
              </button>
            </div>
          </div>
          <div className="col-span-5 max-xl:col-span-full">
            <RightCardChildren pathOngoing={pathOngoing} />
          </div>
          <div className="flex justify-between absolute bottom-3 left-6 right-6 max-xl:hidden">
            <div className="flex gap-x-3">
              <img
                src={buildingIcon}
                alt="travel landing page booking building icon"
              />
              <p className="text-base font-poppins font-medium text-slate-500">
                {person} people going
              </p>
            </div>
            <button type="button">
              <img
                src={heartLikeIcon}
                alt="tranvel landing page booking heart icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type OngoingProps = Pick<Props, 'pathOngoing'>;

const RightCardChildren: React.FC<OngoingProps> = ({ pathOngoing }) => {
  return (
    <div className="relative">
      <img
        src={pathOngoing}
        alt="travel landing page booking ongoing image"
        height={50}
        width={50}
        className="hidden xl:block xl:group-hover:hidden mx-5 my-4"
      />
      <div className="flex justify-center gap-x-3 mt-8 xl:hidden xl:group-hover:w-[273px] xl:group-hover:h-[110px] bg-white xl:group-hover:py-4 xl:group-hover:px-5 xl:group-hover:rounded-[18px] xl:group-hover:flex xl:group-hover:items-start xl:group-hover:gap-x-3 xl:group-hover:shadow-lg xl:group-hover:shadow-slate-200">
        <img
          src={pathOngoing}
          alt="travel landing page booking ongoing image"
          height={50}
          width={50}
        />
        <div className="font-poppins w-full">
          <p className="text-sm font-medium text-slate-500">ongoing</p>
          <h5 className="text-lg font-medium">Trip to rome</h5>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">
              <span className="text-slate-500">40%</span> completed
            </p>
          </div>
          <div className="w-full h-2 bg-blue-200 rounded-full mt-1">
            <div className="w-1/3 h-full text-center text-xs text-white bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
