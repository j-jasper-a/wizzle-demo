import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Overline = ({ children }: Props) => {
  return (
    <p className="text-sm font-medium uppercase text-neutral-400">{children}</p>
  );
};

export default Overline;
