import dynamic from "next/dynamic";
import { ReactFlvPlayerProps } from "./ReactFlvPlayer";

export const NextReactFlvPlayer = dynamic<ReactFlvPlayerProps>(
  () => import("./ReactFlvPlayer"),
  {
    ssr: false,
  }
);

export default (props: ReactFlvPlayerProps) => {
  return <NextReactFlvPlayer {...props} />;
};
