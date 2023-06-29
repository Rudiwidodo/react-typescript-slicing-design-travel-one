import categoryImage1 from '../assets/images/category-image-1.svg';
import categoryImage2 from '../assets/images/category-image-2.svg';
import categoryImage3 from '../assets/images/category-image-3.svg';
import categoryImage4 from '../assets/images/category-image-4.svg';

interface ICategoryData {
  id: number;
  pathImage: string;
  alt: string;
  title: string;
  content: string;
}

export const CategoryData: ICategoryData[] = [
  {
    id: 1,
    pathImage: categoryImage1,
    alt: 'travel landing page image 1',
    title: 'Calculated Weather',
    content: 'Built Wicket longer admire do barton vanity itself do in it.',
  },
  {
    id: 2,
    pathImage: categoryImage2,
    alt: 'travel landing page image 2',
    title: 'Best Flights',
    content: 'Engrossed listening. Park gate sell they west hard for the.',
  },
  {
    id: 3,
    pathImage: categoryImage3,
    alt: 'travel landing page image 3',
    title: 'Local Events',
    content:
      'Barton vanity itself do in it. Preferd to men it engrossed listening.',
  },
  {
    id: 4,
    pathImage: categoryImage4,
    alt: 'travel landing page image 4',
    title: 'Customization',
    content: 'We deliver outsourced aviation services for military customers.',
  },
];
