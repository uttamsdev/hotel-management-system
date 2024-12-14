import React, { useState } from "react";
import { Modal } from "antd";
import DeleteMsg from "../modalContent/deleteModalContent";
import { handleDelete } from "./handleDelete";

const DeleteModal = ({ open, setOpen, url, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  //   const { messageApi, contextHolder } = useMessage();

  const onDelete = async () => {
    await handleDelete({
      url,
      setIsLoading,
      setOpen,
      refetch,
    });
  };

  return (
    <>
      <Modal title={false} open={open} footer={false} closeIcon={false}>
        <DeleteMsg setOpen={setOpen} btnFun={onDelete} isLoading={isLoading} />
      </Modal>
    </>
  );
};

export default DeleteModal;
