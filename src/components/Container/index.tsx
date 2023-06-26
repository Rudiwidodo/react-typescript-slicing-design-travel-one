type TContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<TContainerProps> = ({ children }) => {
  return (
    <>
      <div className="sm:w-4/5 sm:mx-auto">{children}</div>
    </>
  );
};
