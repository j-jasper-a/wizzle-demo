import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto h-screen max-w-screen-lg bg-blue-700">
      {children}
    </div>
  );
};

export default Container;
