type TContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<TContainerProps> = ({ children }) => {
  return (
    <>
      <div className="sm:w-[90%] md:w-[85%] sm:mx-auto max-sm:px-5">
        {children}
      </div>
    </>
  );
};
