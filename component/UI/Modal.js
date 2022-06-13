import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Modal = ({ teammember }) => {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='relative z-50'
    >
      <div
        className='fixed inset-0 flex items-center justify-center p-4 bg-black/30'
        aria-hidden='true'
      >
        <div className='fixed min-h-full inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='mx-auto max-w-sm rounded bg-white p-4 flex md:flex-row flex-col'>
            <Dialog.Title>{teammember?.employeeName}</Dialog.Title>

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
      </div>
    </Dialog>
  );
};

export default Modal;
