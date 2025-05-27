import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const H2 = ({ children }: Props) => {
  return <h2 className="text-2xl font-medium leading-tight">{children}</h2>;
};

export default H2;
