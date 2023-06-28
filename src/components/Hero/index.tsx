// static images
import heroDecoration from '../../assets/images/decore-hero.svg';
import heroImage from '../../assets/images/hero-image.png';
import playIcon from '../../assets/icons/play-icon.svg';
import closeIcon from '../../assets/icons/close-icon.svg';
import { HeroLeft } from './hero-left';
import { HeroRight } from './hero-right';
import { useState } from 'react';
import { Video } from '../Video';

export const Hero: React.FC = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false);

  const handleShowVideo = (): void => {
    showVideo ? setShowVideo(false) : setShowVideo(true);
  };

  return (
    <>
      <section className="pt-20">
        <img
          src={heroDecoration}
          alt="travel landing page hero decoration"
          className="absolute -z-10 top-0 -right-5 max-lg:top-0 max-md:right-0 max-lg:-right-4"
        />
        <div className="grid grid-cols-12 mt-6">
          <div className="col-span-6 flex items-center max-lg:col-span-12">
            <HeroLeft path={playIcon} onclik={handleShowVideo} />
          </div>
          <div className="col-span-6 max-lg:row-start-1 max-lg:col-span-12">
            <HeroRight path={heroImage} />
          </div>
        </div>
        {showVideo && <Video closeIocn={closeIcon} onclick={handleShowVideo} />}
      </section>
    </>
  );
};
