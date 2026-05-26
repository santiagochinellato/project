export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  ageConfirmed: boolean;
  roomId: string;
  city: string;
  intensity: string;
  date: string;
  time: string;
  limits: string;
  safeWord: string;
  selectedExtras: string[];
  selectedKits: string[];
  promoCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvv: string;
  consentAccepted: boolean;
  termsAccepted: boolean;
  noCancelAccepted: boolean;
  chargesAccepted: boolean;
}

export interface CompletedReservation {
  id: string;
  code: string;
  createdAt: string;
  guestName: string;
  email: string;
  phone: string;
  roomId: string;
  roomName: string;
  city: string;
  intensity: string;
  date: string;
  time: string;
  basePrice: number;
  extras: { id: string; name: string; price: number }[];
  kits: { id: string; name: string; price: number }[];
  total: number;
  membershipInterest?: boolean;
}

export type BookingPhase = 'form' | 'membership-prompt' | 'membership-form' | 'confirmed';

export const initialBookingFormData: BookingFormData = {
  fullName: '',
  email: '',
  phone: '',
  ageConfirmed: false,
  roomId: '',
  city: '',
  intensity: '',
  date: '',
  time: '',
  limits: '',
  safeWord: '',
  selectedExtras: [],
  selectedKits: [],
  promoCode: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvv: '',
  consentAccepted: false,
  termsAccepted: false,
  noCancelAccepted: false,
  chargesAccepted: false,
};
