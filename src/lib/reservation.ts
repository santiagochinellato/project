import type { BookingFormData, CompletedReservation } from '../types/booking';
import type { ExperienceExtra } from '../types';
import { experienceExtras } from '../data/extras';
import { products } from '../data/products';
import { rooms } from '../data/rooms';

export const FEATURED_EXTRA_IDS = ['champagne', 'rose-petals', 'rose-bouquet'] as const;

export function generateReservationCode(): string {
  const segment = () => Math.random().toString(36).slice(2, 5).toUpperCase();
  const year = new Date().getFullYear().toString().slice(-2);
  return `ERO-${year}-${segment()}${segment()}`;
}

export function getExtraById(id: string): ExperienceExtra | undefined {
  return experienceExtras.find((e) => e.id === id);
}

export function calculateBookingTotal(form: BookingFormData): {
  basePrice: number;
  extrasTotal: number;
  kitsTotal: number;
  total: number;
  roomName: string;
} {
  const room = rooms.find((r) => r.id === form.roomId);
  const basePrice = room?.price ?? 0;
  const extrasTotal = form.selectedExtras.reduce((sum, id) => sum + (getExtraById(id)?.price ?? 0), 0);
  const kitsTotal = form.selectedKits.reduce((sum, id) => {
    const kit = products.find((p) => p.id === id);
    return sum + (kit?.price ?? 0);
  }, 0);
  return {
    basePrice,
    extrasTotal,
    kitsTotal,
    total: basePrice + extrasTotal + kitsTotal,
    roomName: room?.name ?? '—',
  };
}

export function buildReservation(
  form: BookingFormData,
  membershipInterest?: boolean,
): CompletedReservation {
  const { basePrice, total, roomName } = calculateBookingTotal(form);
  const code = generateReservationCode();

  return {
    id: `res-${Date.now()}`,
    code,
    createdAt: new Date().toISOString(),
    guestName: form.fullName,
    email: form.email,
    phone: form.phone,
    roomId: form.roomId,
    roomName,
    city: form.city,
    intensity: form.intensity,
    date: form.date,
    time: form.time,
    basePrice,
    extras: form.selectedExtras
      .map((id) => getExtraById(id))
      .filter((e): e is ExperienceExtra => Boolean(e))
      .map((e) => ({ id: e.id, name: e.name, price: e.price })),
    kits: form.selectedKits
      .map((id) => products.find((p) => p.id === id))
      .filter((p): p is NonNullable<typeof p> => Boolean(p))
      .map((p) => ({ id: p.id, name: p.name, price: p.price })),
    total,
    membershipInterest,
  };
}

export function getQrImageUrl(reservation: CompletedReservation): string {
  const payload = encodeURIComponent(
    JSON.stringify({
      code: reservation.code,
      room: reservation.roomName,
      city: reservation.city,
      date: reservation.date,
      time: reservation.time,
    }),
  );
  return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${payload}`;
}

function ticketHtml(reservation: CompletedReservation, title: string): string {
  const extrasLines = reservation.extras.map((e) => `<li>${e.name} — €${e.price}</li>`).join('');
  const kitsLines = reservation.kits.map((k) => `<li>${k.name} — €${k.price}</li>`).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>${title} — ${reservation.code}</title>
  <style>
    body { font-family: Georgia, serif; background: #0a0a0f; color: #f5f0eb; padding: 40px; }
    .card { max-width: 520px; margin: 0 auto; border: 1px solid #7c3aed; border-radius: 16px; padding: 32px; }
    h1 { font-size: 1.5rem; margin: 0 0 8px; color: #e9d5ff; }
    .code { font-size: 1.75rem; letter-spacing: 0.15em; color: #f472b6; font-weight: bold; }
    ul { padding-left: 20px; }
    .muted { color: #a8a29e; font-size: 0.9rem; }
  </style>
</head>
<body>
  <div class="card">
    <h1>EROSCAPE ROOM®</h1>
    <p class="muted">${title}</p>
    <p class="code">${reservation.code}</p>
    <p><strong>${reservation.guestName}</strong></p>
    <p>${reservation.roomName} · ${reservation.city}</p>
    <p>${reservation.date} · ${reservation.time} · Nivel ${reservation.intensity}</p>
    ${extrasLines ? `<p><strong>Extras:</strong></p><ul>${extrasLines}</ul>` : ''}
    ${kitsLines ? `<p><strong>Kits:</strong></p><ul>${kitsLines}</ul>` : ''}
    <p><strong>Total: €${reservation.total}</strong></p>
    <p class="muted">Presenta este código o el QR en recepción. +18 · Confidencialidad garantizada.</p>
  </div>
</body>
</html>`;
}

export function downloadReservationFile(reservation: CompletedReservation, type: 'reserva' | 'entrada'): void {
  const title = type === 'entrada' ? 'Entrada EROSCAPE' : 'Confirmación de reserva';
  const html = ticketHtml(reservation, title);
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `eroscape-${type}-${reservation.code}.html`;
  link.click();
  URL.revokeObjectURL(url);
}
