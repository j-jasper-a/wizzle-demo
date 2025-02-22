import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-center text-5xl font-bold tracking-tight md:text-6xl">
      {children}
    </h1>
  );
};

export default H1;
