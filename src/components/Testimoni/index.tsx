// static images
import testimonialImageProfile from '../../assets/images/testimoni-profile-image.svg';
import testimonialArrowDownIcon from '../../assets/icons/arrow-down-active-icon.svg';
import testimonialArrowTopIcon from '../../assets/icons/arrow-top-normal-iocn.svg';

export const Testimonial: React.FC = () => {
  return (
    <>
      <section id="testimonial" className="py-20">
        <div className="grid grid-cols-12">
          <div className="col-span-6 max-lg:col-span-full">
            <TestimonialTitle />
          </div>
          <div className="col-span-6 max-lg:col-span-full">
            <TestimonialCard />
          </div>
        </div>
      </section>
    </>
  );
};

const TestimonialTitle: React.FC = () => {
  return (
    <div>
      <p className="text-lg font-poppins font-bold text-slate-500">
        Testimonials
      </p>
      <h5 className="text-5xl w-[413px] leading-[60px] font-volkhov text-color-2 font-bold mt-3 max-sm:text-3xl max-sm:w-full">
        What People Say About Us.
      </h5>
    </div>
  );
};

const TestimonialCard: React.FC = () => {
  return (
    <div className="grid grid-cols-12 mt-20">
      <div className="col-span-9 max-md:col-span-11">
        <div className="py-7 px-7 shadow-xl shadow-slate-200 rounded-[10px] relative">
          <img
            src={testimonialImageProfile}
            alt="travel landing page testimonial image profile"
            className="absolute -top-10 -left-10 max-lg:left-0"
          />
          <p className="text-lg font-poppins font-light max-lg:mt-7">
            <q>
              On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.
            </q>
          </p>
          <h5 className="text-lg font-poppins font-bold">Mike taylor</h5>
          <p className="text-base font-poppins font-medium text-slate-500">
            Lahore, Pakistan
          </p>
        </div>
      </div>
      <div className="col-span-3 flex justify-end items-center max-md:col-span-1">
        <div className="flex flex-col justify-end items-center gap-y-14">
          <button type="button">
            <img
              src={testimonialArrowTopIcon}
              alt="travel landning page testimonial arrow top icon"
            />
          </button>
          <button type="button" className="">
            <img
              src={testimonialArrowDownIcon}
              alt="travel landning page testimonial arrow down icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
