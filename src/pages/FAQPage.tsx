import PageBackLink from '../components/layout/PageBackLink';
import FAQ from '../components/sections/FAQ';

export default function FAQPage() {
  return (
    <main className="pt-6 pb-16">
      <PageBackLink label="Volver al inicio" />
      <FAQ />
    </main>
  );
}
