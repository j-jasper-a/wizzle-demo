import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-center text-6xl font-bold tracking-tight">
      {children}
    </h1>
  );
};

export default H1;
