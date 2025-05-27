import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-(--breakpoint-lg) mx-auto h-screen bg-blue-700">
      {children}
    </div>
  );
};

export default Container;
