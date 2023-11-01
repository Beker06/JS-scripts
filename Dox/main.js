document.addEventListener('DOMContentLoaded', function() {
  const ipInput = document.getElementById('ip-input');
  const tokenInput = document.getElementById('token-input');
  const searchButton = document.getElementById('search-button');

  document.getElementById('search-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe

      const ipAddress = ipInput.value;
      const token = tokenInput.value;

      getInfo(ipAddress, token)

  });
});

async function getInfo(ip, token,) {
  const url = `https://ipinfo.io/${ip}?token=${token}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      console.log(json);
    } else {
      console.error('Error en la solicitud:', res.status, res.statusText);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
}


