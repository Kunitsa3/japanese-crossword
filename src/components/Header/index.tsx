import { useEffect, useState } from 'react';
import AuthenticationModal from './Authentication';
import { Button } from '../common/Button';
import { useLockedBody } from 'usehooks-ts';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store';

export type AuthModalTypes = 'signIn' | 'signUp';

export const Header = () => {
  const [openedModal, setOpenedModal] = useState<AuthModalTypes | null>(null);
  const [isScrollLocked, setScrollLocked] = useState(false);

  const currentUser = useAppSelector(state => state.user.currentUser);

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
        <Link to={'/'} className="flex cursor-pointer items-center">
          <img className="h-10 w-10" src="/images/puzzle.png" alt="" />
          <p className="text-3xl font-semibold text-cyan-700">Challenger</p>
        </Link>
        {currentUser ? (
          <img src="/images/user.png" className="w-14" />
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
