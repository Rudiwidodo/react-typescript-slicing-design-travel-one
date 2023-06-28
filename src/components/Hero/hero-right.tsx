type Props = {
  path: string;
};

export const HeroRight: React.FC<Props> = ({ path }) => {
  return (
    <>
      <img
        src={path}
        alt="travel landing page hero image"
        className="w-full h-full min-h-[680px] max-md:min-h-full"
        // className="h-[764px] max-lg:h-[680px] max-md:w-full max-md:h-full"
      />
    </>
  );
};
