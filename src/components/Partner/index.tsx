import { useState } from 'react';
import { supportData } from '../../static-data/support-data';

// static images
import chevronLeftIcon from '../../assets/icons/chevron_left_icon.svg';
import chevronRightIcon from '../../assets/icons/chevron_right_icon.svg';

export const Partner: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handlePrev = (): void => {
    count == 0 ? setCount(supportData.length - 1) : setCount(count - 1);
  };

  const handleNext = (): void => {
    count == supportData.length - 1 ? setCount(0) : setCount(count + 1);
  };

  return (
    <section id="partner">
      <div className="mt-32 flex justify-between items-center max-xl:pb-4 max-xl:overflow-x-scroll max-xl:gap-x-10 max-sm:overflow-hidden max-sm:gap-x-0 change-scroll relative max-sm:mt-8">
        {supportData.map((items) => {
          let keyID: number = count + 1;
          return (
            <div
              key={items.id}
              className={`flex justify-center items-center hover:shadow-lg hover:shadow-slate-300 hover:rounded-3xl p-3 max-xl:flex-none transition duration-500 ease-in-out max-sm:${
                keyID == items.id ? 'block mx-auto' : 'hidden'
              }`}
            >
              <img
                src={items.pathImage}
                alt="travel landing page support images"
                className="rounded-2xl w-40 h-40"
              />
            </div>
          );
        })}
        <button
          onClick={handlePrev}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center sm:hidden"
        >
          <img
            src={chevronLeftIcon}
            alt="travel landing page chevron left icon"
          />
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center sm:hidden"
        >
          <img
            src={chevronRightIcon}
            alt="travel landing page chevron left icon"
          />
        </button>
      </div>
    </section>
  );
};
