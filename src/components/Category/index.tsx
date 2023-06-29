import { CategoryCard } from './category-card';

// static data
import decoreCategory from '../../assets/images/decore-category.svg';

// static images
import { CategoryData } from '../../static-data/category-data';

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
          {CategoryData.map((items) => {
            return (
              <CategoryCard
                key={items.id}
                path={items.pathImage}
                alt={items.alt}
                title={items.title}
                content={items.content}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
