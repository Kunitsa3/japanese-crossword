import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Toaster } from './components/ui/toaster';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
};

export default App;
