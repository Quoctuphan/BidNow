import { Modal, ModalProps } from "antd";
import { useState } from "react";

interface AppModalProps extends ModalProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({ trigger, children, ...rest }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        {trigger}
      </button>

      <Modal
        centered
        open={open}
        onClose={() => setOpen(false)}
        onCancel={() => {
          setOpen(false);
        }}
        okButtonProps={{className:'hidden'}}
        cancelButtonProps={{className:'hidden'}}
        {...rest}
      >
        {children}
      </Modal>
    </div>
  );
};

export default AppModal;