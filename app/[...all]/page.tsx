import dynamic from 'next/dynamic';
import { lists } from '../../mock';

const App = dynamic(() => import('../../components/AppShell'), {
  ssr: false,
});

export async function generateStaticParams() {
  return [
    { all: ['dashboard'] },
    { all: ['lists'] },
    ...lists.map(list => ({ all: ['lists', list.id] })),
    { all: ['settings'] },
    { all: ['login'] },
  ];
}

export default function Page() {
  return <App />;
}