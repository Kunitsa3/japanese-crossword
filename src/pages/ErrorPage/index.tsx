import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

export const ErrorPage = () => (
  <>
    <Header />
    <div className="flex flex-col items-center justify-center">
      <img className="mt-16 w-1/3" src="/images/error.jpg" />
      <Link
        className="rounded border border-cyan-700 px-4 py-1.5 text-base font-medium uppercase text-cyan-700 hover:text-cyan-600"
        to="/"
      >
        Back to the homepage
      </Link>
    </div>
  </>
);
