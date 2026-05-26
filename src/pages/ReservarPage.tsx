import PageBackLink from '../components/layout/PageBackLink';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import BookingSection from '../components/booking/BookingSection';

export default function ReservarPage() {
  return (
    <main className="pt-6 pb-16">
      <PageBackLink label="Volver al inicio" />
      <Section className="!pt-0 !pb-0">
        <SectionHeader
          eyebrow="RESERVA"
          title="Reserva tu experiencia"
          intro="Elige ciudad, sala, intensidad y extras. El mismo proceso que en la página principal."
        />
      </Section>
      <BookingSection variant="page" />
    </main>
  );
}
