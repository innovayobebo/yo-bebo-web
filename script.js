// URL pública de la ficha de YoBebo en Google Play.
const enlaceDescarga = "https://play.google.com/store/apps/details?id=com.innova.yobebo";

document.getElementById("year").textContent = new Date().getFullYear();
if (enlaceDescarga.trim()) {
  const link = document.getElementById("download-link");
  link.href = enlaceDescarga;
  link.textContent = "Comprar en Google Play ↗";
  link.hidden = false;
  document.getElementById("download-status").textContent = "YoBebo ya está disponible para Android. 0,99 € en un pago único.";
}
