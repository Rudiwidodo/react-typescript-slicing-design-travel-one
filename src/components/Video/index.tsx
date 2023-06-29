import beachVideo from '../../assets/video/beach-video.mp4';

type Props = {
  onclick: () => void;
  closeIocn: string;
};

export const Video: React.FC<Props> = ({ onclick, closeIocn }) => {
  return (
    <>
      <div className="fixed z-20 top-0 left-0 bottom-0 w-full bg-white flex justify-center items-center">
        <div className="w-[90%] p-8 shadow-xl shadow-slate-300 rounded-md relative max-md:w-full">
          <div className="w-9 h-9 rounded-full shadow-lg shadow-slate-300 absolute top-0 right-0">
            <button
              type="button"
              className="w-full h-full flex justify-center items-center"
              onClick={onclick}
            >
              <img
                src={closeIocn}
                alt="travel landing page close icon"
                className="w-4/5"
              />
            </button>
          </div>
          <video
            controls
            autoPlay
            className="rounded-md shadow-md shadow-slate-300"
          >
            <source src={beachVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};
