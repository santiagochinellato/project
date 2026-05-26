import Booking from '../sections/Booking';

interface BookingSectionProps {
  /** En página dedicada muestra cabecera contextual */
  variant?: 'embedded' | 'page';
}

export default function BookingSection({ variant = 'embedded' }: BookingSectionProps) {
  if (variant === 'page') {
    return (
      <div className="pt-4">
        <Booking />
      </div>
    );
  }

  return <Booking />;
}
