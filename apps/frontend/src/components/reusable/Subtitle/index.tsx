import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Subtitle = ({ children }: Props) => {
  return <p className="text-center text-sm text-neutral-400">{children}</p>;
};

export default Subtitle;
