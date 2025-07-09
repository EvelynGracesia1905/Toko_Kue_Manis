

// document.getElementById('contactForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const form = e.target;
//     const data = new URLSearchParams(new FormData(form));

//     const response = await fetch('/contact', {
//         method: 'POST',
//         body: data,
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//     });

//     const text = await response.text();
//     document.getElementById('responseMsg').textContent = text;

//     form.reset(); // Opsional: kosongkan form setelah sukses
// });

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = new URLSearchParams(new FormData(form));

    try {
      const response = await fetch('/contact', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      const result = await response.text();
      alert(result); // atau tampilkan ke elemen di halaman
      form.reset();
    } catch (error) {
      alert('Gagal mengirim!');
      console.error(error);
    }
  });
});
