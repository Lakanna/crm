import AddCompanyButton from './components/AddCompanyButton';
import ErrorButton from './components/ErrorButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <ErrorButton />
    </main>
  );
}
