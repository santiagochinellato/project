import { Download, QrCode, Ticket } from 'lucide-react';
import type { CompletedReservation } from '../../types/booking';
import { downloadReservationFile, getQrImageUrl } from '../../lib/reservation';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface ReservationConfirmationProps {
  reservation: CompletedReservation;
  membershipRequested?: boolean;
}

export default function ReservationConfirmation({
  reservation,
  membershipRequested,
}: ReservationConfirmationProps) {
  const qrUrl = getQrImageUrl(reservation);

  return (
    <Card variant="featured" className="max-w-2xl mx-auto" hover={false}>
      <div className="text-center mb-6">
        <p className="font-body text-xs uppercase tracking-widest text-purple-400/70 mb-2">
          Reserva confirmada
        </p>
        <h3 className="font-heading text-2xl font-semibold text-eroscape-text-primary mb-2">
          ¡Tu experiencia está reservada!
        </h3>
        {membershipRequested && (
          <p className="font-body text-sm text-eroscape-gold mb-2">
            Hemos recibido tu solicitud de Membresía VIP. Revisa tu email en las próximas 24 h.
          </p>
        )}
        <p className="font-body text-eroscape-text-muted text-sm">
          Guarda tu código único y descarga tu entrada para presentarla en recepción.
        </p>
      </div>

      <div className="bg-black/40 border border-purple-500/30 rounded-xl p-6 mb-6 text-center">
        <p className="font-body text-xs text-eroscape-text-muted uppercase tracking-wider mb-2">
          Código de reserva único
        </p>
        <p className="font-mono text-2xl md:text-3xl font-bold text-gradient-brand tracking-wider">
          {reservation.code}
        </p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="bg-white p-3 rounded-xl mb-3">
          <img
            src={qrUrl}
            alt={`QR reserva ${reservation.code}`}
            width={200}
            height={200}
            className="block"
          />
        </div>
        <p className="font-body text-xs text-eroscape-text-muted flex items-center gap-1">
          <QrCode size={14} />
          Escanea en recepción · {reservation.roomName}
        </p>
      </div>

      <div className="space-y-2 text-sm font-body text-eroscape-text-secondary mb-8 text-left max-w-md mx-auto">
        <p>
          <span className="text-purple-300">Invitado:</span> {reservation.guestName}
        </p>
        <p>
          <span className="text-purple-300">Sala:</span> {reservation.roomName} · {reservation.city}
        </p>
        <p>
          <span className="text-purple-300">Fecha:</span> {reservation.date || 'Por confirmar'} ·{' '}
          {reservation.time || '—'}
        </p>
        <p>
          <span className="text-purple-300">Nivel:</span> {reservation.intensity}
        </p>
        <p>
          <span className="text-purple-300">Total:</span>{' '}
          <strong className="text-eroscape-text-primary">€{reservation.total}</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          fullWidth
          onClick={() => downloadReservationFile(reservation, 'entrada')}
          className="gap-2"
        >
          <Ticket size={18} />
          Descargar entrada
        </Button>
        <Button
          variant="outline"
          fullWidth
          onClick={() => downloadReservationFile(reservation, 'reserva')}
          className="gap-2"
        >
          <Download size={18} />
          Descargar reserva
        </Button>
      </div>
    </Card>
  );
}
