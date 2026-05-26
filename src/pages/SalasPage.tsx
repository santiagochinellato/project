import PageBackLink from '../components/layout/PageBackLink';
import Rooms from '../components/sections/Rooms';

export default function SalasPage() {
  return (
    <main className="pt-6 pb-16">
      <PageBackLink label="Volver al inicio" />
      <Rooms />
    </main>
  );
}
