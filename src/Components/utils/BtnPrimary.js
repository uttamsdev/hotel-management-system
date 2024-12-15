import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Spin } from "antd";
import React from "react";
import { PiPlusMinusLight } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const BtnPrimary = ({
  customClass,
  btnFun,
  children,
  isLoading = false,
  icon,
}) => {
  return (
    <button
      onClick={btnFun}
      className={twMerge(
        "primary-bg px-4 py-2 gap-[2.5px] text-white font-medium rounded text-sm w-auto text-center flex items-center justify-center",
        customClass
      )}
    >
      <div>
        {!isLoading && icon}
        {isLoading && <Spin size="large" style={{ fontSize: "18px" }} />}
      </div>
      {children}
    </button>
  );
};

export default BtnPrimary;
