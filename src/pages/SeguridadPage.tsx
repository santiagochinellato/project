import { useSearchParams } from 'react-router-dom';
import PageBackLink from '../components/layout/PageBackLink';
import Safety from '../components/sections/Safety';

export default function SeguridadPage() {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'terminos';

  return (
    <main className="pt-6 pb-16">
      <PageBackLink label="Volver al inicio" />
      <Safety initialLegalTab={tab} />
    </main>
  );
}
