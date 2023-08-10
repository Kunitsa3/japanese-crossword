import Modal from '@/components/common/Modal';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface SuccessModalProps {
  toggleModal: () => void;
}

export const SuccessModal: FC<SuccessModalProps> = ({ toggleModal }) => {
  return (
    <Modal setModalClosed={toggleModal}>
      <div className="flex flex-col items-center justify-center">
        <p className=" mb-10 text-center text-lg font-semibold text-cyan-700">Completed successfully</p>
        <Link
          className="rounded border border-cyan-700 px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600"
          to="/crosswords"
        >
          Back to all crosswords
        </Link>
      </div>
    </Modal>
  );
};
