import { CategoryCard } from './category-card';

// static images
import categoryImage1 from '../../assets/images/category-image-1.svg';
import categoryImage2 from '../../assets/images/category-image-2.svg';
import categoryImage3 from '../../assets/images/category-image-3.svg';
import categoryImage4 from '../../assets/images/category-image-4.svg';
import decoreCategory from '../../assets/images/decore-category.svg';

export const Category: React.FC = () => {
  return (
    <>
      <section className="mt-24 relative max-sm:mt-12 sm:mt-16" id="category">
        <img
          src={decoreCategory}
          alt="travel landing page decore category image"
          className="absolute top-0 -right-[72px] -z-20 max-md:hidden"
        />
        <div className="text-center">
          <p className="text-lg font-poppins font-medium">CATEGORY</p>
          <h3 className="text-5xl font-volkhov font-bold mt-2 max-sm:text-3xl">
            We Offer Best Services
          </h3>
        </div>
        <div className="flex mt-16 max-xl:overflow-x-scroll max-xl:gap-5 max-xl:pb-10 max-sm:mt-8 change-scroll">
          <CategoryCard
            path={categoryImage1}
            alt="travel landing page image 1"
            title="Calculated Weather"
            content="Built Wicket longer admire do barton vanity itself do in it."
          />
          <CategoryCard
            path={categoryImage2}
            alt="travel landing page image 2"
            title="Best Flights"
            content="Engrossed listening. Park gate sell they west hard for the."
          />
          <CategoryCard
            path={categoryImage3}
            alt="travel landing page image 3"
            title="Local Events"
            content="Barton vanity itself do in it. Preferd to men it engrossed listening. "
          />
          <CategoryCard
            path={categoryImage4}
            alt="travel landing page image 4"
            title="Customization"
            content="We deliver outsourced
            aviation services for
            military customers"
          />
        </div>
      </section>
    </>
  );
};
