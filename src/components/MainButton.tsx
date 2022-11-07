import { FunctionComponent } from "react";

type MainButtonType = {
  title?: string;
  icon?: string;
};

const MainButton: FunctionComponent<MainButtonType> = ({
  title = "Button",
  icon,
}) => {
  return (
    <button className="cursor-pointer [border:none] p-[10px_14px] bg-gray-200 rounded-[10px] flex flex-row box-border items-center justify-start gap-[6px] hover:bg-gray-100">
      <img className="relative w-[22px] h-[22px] shrink-0" alt="" src={icon} />
      <b className="relative text-base tracking-[-0.02em] leading-[150%] capitalize inline-block font-dm-sans text-gray-700 text-left">
        {title}
      </b>
    </button>
  );
};

export default MainButton;
