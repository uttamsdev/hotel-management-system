import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const DeleteMsg = ({ setOpen, isLoading, btnFun }) => {
  return (
    <div className="px-6 py-5 rounded">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#f44336"
            d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
          ></path>
          <path
            fill="#fff"
            d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
          ></path>
          <path
            fill="#fff"
            d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
          ></path>
        </svg>

        <div>
          <h1 className="mb-1 text-base text-black font-medium">
            Delete Item?
          </h1>
          <p className="text-sm text-[#0b0b0d]">
            Are you sure you want to delete this item?
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4 justify-end">
        <button
          onClick={() => setOpen(false)}
          className="md:px-6 md:py-1.5 font-normal border rounded border-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={btnFun}
          className="md:px-6 md:py-1.5 font-normal bg-red-600 text-white rounded"
        >
          {isLoading ? (
            <LoadingOutlined spin size="large" style={{ fontSize: "18px" }} />
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};

export default DeleteMsg;
