import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  setModalClosed: () => void;
}

export const Modal: FC<ModalProps> = ({ children, setModalClosed }) =>
  createPortal(
    <div className="fixed	inset-x-0 inset-y-0 top-20 z-10">
      <div className="h-full bg-neutral-200 opacity-90" onClick={setModalClosed} />
      <div className="fixed left-1/2 top-36 z-10 w-1/2 -translate-x-1/2 ">
        <div className="relative m-auto max-w-lg bg-white px-7 py-10 shadow">
          <div
            className="absolute right-8 top-2 cursor-pointer text-3xl text-cyan-700 hover:text-cyan-600"
            onClick={setModalClosed}
          >
            ×
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );

export default Modal;
