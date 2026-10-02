export const getOwnerWhatsAppNumber = () => {
  return import.meta.env.VITE_WA_OWNER_NUMBER || "628123456789";
};

export const buildRoomInquiryUrl = (room) => {
  const number = getOwnerWhatsAppNumber();
  const price = room?.price != null ? Number(room.price).toLocaleString("id-ID") : "0";
  const roomNumber = room?.room_number ?? "";
  const message = `Halo Ibu Kost, saya tertarik dengan Kamar ${roomNumber} di Kost-On (Rp ${price}/bulan). Apakah kamar ini masih tersedia? Terima kasih.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
