// Pega aquí el enlace real de Google Play, App Store o el APK.
// Mientras esté vacío, la web no mostrará un botón de descarga falso.
const enlaceDescarga = "";

document.getElementById("year").textContent = new Date().getFullYear();
if (enlaceDescarga.trim()) {
  const link = document.getElementById("download-link");
  link.href = enlaceDescarga;
  link.hidden = false;
  document.getElementById("download-status").textContent = "Descarga YoBebo y comparte tu próxima partida con amigos.";
}
