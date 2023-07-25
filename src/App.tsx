import { Header } from './components/Header';
import { Toaster } from './components/ui/toaster';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <Toaster />
    </>
  );
}

export default App;
