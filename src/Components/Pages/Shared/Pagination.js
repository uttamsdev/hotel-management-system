import React from "react";
import { Pagination } from "antd";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <div className="text-sm text-pagination-btn px-3 py-[5px] border border-gray-100 rounded bg-[#25b0cf] text-white">
        Previous
      </div>
    );
  }
  if (type === "next") {
    return (
      <div className="text-sm text-pagination-btn px-3 py-[5px] border border-gray-100 rounded bg-[#25b0cf] text-white">
        Next
      </div>
    );
  }
  return originalElement;
};

const ReactPagination = ({ total, perPage, currentPage, onPageChange }) => (
  <Pagination
    pageSize={perPage}
    total={total}
    current={currentPage}
    onChange={onPageChange}
    itemRender={itemRender}
    showSizeChanger={false} // Hides the select box for changing page size
  />
);

export default ReactPagination;
