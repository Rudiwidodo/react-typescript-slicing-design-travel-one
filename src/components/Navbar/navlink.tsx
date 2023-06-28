type TNavlinkProps = {
  to: string;
  children: React.ReactNode;
};

export const Navlink: React.FC<TNavlinkProps> = ({
  to,
  children,
}: TNavlinkProps) => {
  return (
    <>
      <li>
        <a
          href={to}
          className="text-gray-800 text-[17px] font-poppins font-medium"
        >
          {children}
        </a>
      </li>
    </>
  );
};
