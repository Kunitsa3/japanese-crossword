import { useEffect, useState } from 'react';
import AuthenticationModal from './Authentication';
import { Button } from '../common/Button';
import { useLockedBody } from 'usehooks-ts';
import { useSelector } from 'react-redux';
import { RootState } from './Authentication/AuthForm';

export type AuthModalTypes = 'signIn' | 'signUp';

export const Header = () => {
  const [openedModal, setOpenedModal] = useState<AuthModalTypes | null>(null);
  const [isScrollLocked, setScrollLocked] = useState(false);

  const currentUser = useSelector((state: RootState) => state.currentUser.currentUser);

  const closeModal = () => {
    setOpenedModal(null);
    setScrollLocked(false);
  };

  const onButtonClick = (modalType: AuthModalTypes) => {
    setOpenedModal(modalType);
    setScrollLocked(true);
  };

  useEffect(() => {
    if (currentUser) {
      closeModal();
    }
  }, [currentUser]);

  useLockedBody(isScrollLocked, 'root');

  return (
    <header className="shadow">
      <div className="m-auto flex  h-20 max-w-screen-lg items-center justify-between p-4 ">
        <div className="flex items-center">
          <img className="h-10 w-10" src="images/puzzle.png" alt="" />
          <p className="text-3xl text-cyan-700">Nonograms</p>
        </div>
        {currentUser ? (
          <img src="images/user.png" className="w-14" />
        ) : (
          <div className="flex items-center gap-5">
            <Button children="Register" onClick={() => onButtonClick('signUp')} variant="secondary" />
            <Button children="Sign In" onClick={() => onButtonClick('signIn')} />
          </div>
        )}
      </div>
      {openedModal && (
        <AuthenticationModal toggleModal={closeModal} openedModal={openedModal} setOpenedModal={setOpenedModal} />
      )}
    </header>
  );
};
