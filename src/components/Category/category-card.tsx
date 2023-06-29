type Props = {
  path: string;
  alt: string;
  title: string;
  content: string;
};

export const CategoryCard: React.FC<Props> = ({
  path,
  alt,
  title,
  content,
}) => {
  return (
    <>
      <div className="group max-xl:ml-10">
        <div className="relative w-[267px] h-[314px] group-hover:bg-white group-hover:rounded-[36px] group-hover:shadow-lg after:absolute after:-z-10 after:bottom-0 group-hover:after:h-[100px] group-hover:after:w-[100px] group-hover:after:bg-color-1 group-hover:after:-bottom-6 group-hover:after:-left-10 group-hover:after:rounded-tl-[30px] group-hover:after:rounded-br-[10px] group-hover:after:transition group-hover:after:duration-500 group-hover:after:ease-in-out">
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-[166px] h-[153px] flex justify-center items-center">
              <img src={path} alt={alt} />
            </div>
            <div className="mt-7 text-center">
              <h5 className="text-xl font-serif font-semibold">{title}</h5>
              <p className="text-[16px] text-slate-500 font-normal font-serif w-[180px] mt-3">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
