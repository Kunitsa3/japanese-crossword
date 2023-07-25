import { FC } from 'react';
import Modal from '../../common/Modal';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { AuthModalTypes } from '..';

interface AuthenticationModalProps {
  toggleModal: () => void;
  openedModal: AuthModalTypes;
  setOpenedModal: (state: AuthModalTypes) => void;
}

export const AuthenticationModal: FC<AuthenticationModalProps> = ({ toggleModal, openedModal, setOpenedModal }) => {
  return (
    <Modal setModalClosed={toggleModal}>
      {openedModal === 'signIn' ? (
        <SignIn
          setSignUpModalOpened={() => {
            setOpenedModal('signUp');
          }}
        />
      ) : (
        <SignUp
          setSignInModalOpened={() => {
            setOpenedModal('signIn');
          }}
        />
      )}
    </Modal>
  );
};

export default AuthenticationModal;
