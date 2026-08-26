document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const selector = anchor.getAttribute('href');
    const target = selector && document.querySelector(selector);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const copyCard = document.querySelector('[data-copy-command]');
if (copyCard) {
  const button = copyCard.querySelector('.copy-btn');
  const code = copyCard.querySelector('code');

  button?.addEventListener('click', async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code.textContent.trim());
      button.textContent = 'Copied';
      setTimeout(() => {
        button.textContent = 'Copy';
      }, 1600);
    } catch {
      button.textContent = 'Select & copy';
    }
  });
}
