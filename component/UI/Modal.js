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
                <p className='text-sm font-medium text-slate-800'>
                  {teamMember?.employeeTitle}
                </p>
                <div className='flex justify-evenly'>
                  <a
                    href='https://www.facebook.com/PeelBYSSI/'
                    target='_blank'
                    className='px-2'
                  >
                    <svg
                      className='h-8 w-8 text-blue-500'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      {" "}
                      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                    </svg>
                  </a>
                  <a
                    href='https://www.instagram.com/peel_byssi/'
                    target='_blank'
                    className='px-2'
                  >
                    <svg
                      className='h-8 w-8 text-red-500 '
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      {" "}
                      <rect
                        x='2'
                        y='2'
                        width='20'
                        height='20'
                        rx='5'
                        ry='5'
                      />{" "}
                      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />{" "}
                      <line x1='17.5' y1='6.5' x2='17.51' y2='6.5' />
                    </svg>
                  </a>
                  <a
                    href='https://twitter.com/Peel_BYSSI'
                    target='_blank'
                    className='px-2'
                  >
                    <svg
                      className='h-8 w-8 text-blue-300'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      {" "}
                      <path d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' />
                    </svg>
                  </a>
                </div>
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
