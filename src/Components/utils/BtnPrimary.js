import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Spin } from "antd";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { twMerge } from "tailwind-merge";
import { PiSpinnerGap } from "react-icons/pi";
import { ImSpinner3 } from "react-icons/im";

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
        {isLoading && <ImSpinner3 className="animate-spin" style={{ fontSize: "18px" }} />}
      </div>
      {children}
    </button>
  );
};

export default BtnPrimary;
