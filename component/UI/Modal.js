import { useState } from "react";
import { Dialog } from "@headlessui/react";
import chenai from "../../public/chennai.png";
import emma from "../../public/emma.png";
import crystel from "../../public/crystel.png";
import parker from "../../public/parker.png";
import sheldon from "../../public/sheldon.png";
import Image from "next/image";
const Modal = ({ teamMember, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} className='relative z-50 '>
      <div
        className='fixed inset-0 flex items-center justify-center p-4 bg-black/70'
        aria-hidden='true'
      >
        <div className='fixed min-h-full inset-0 flex items-center justify-center  '>
          <Dialog.Panel className='mx-auto max-w-sm rounded-xl bg-white px-8 pb-12 pt-8 flex flex-col min-w-fit max-h-fit '>
            <button className='self-end' onClick={onClose}>
              X
            </button>
            <div className='flex sm:flex-col md:flex-row gap-12 mt-6'>
              {/* Image, Name and Title with social links  Item-1*/}
              <div className='flex flex-col justify-center items-center gap-4'>
                {/* Image */}
                <Image
                  src={teamMember.employeeProfilePic}
                  width={250}
                  height={250}
                />
                <Dialog.Title className='text-xl font-semibold text-stone-600'>
                  {teamMember?.employeeName}
                </Dialog.Title>
              </div>
              {/* description */}
              <div className='max-w-5xl leading-7'>
                <Dialog.Description className='flex flex-col gap-4'>
                  {teamMember?.employeeDescription.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </Dialog.Description>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
