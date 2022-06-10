import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Modal = () => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
