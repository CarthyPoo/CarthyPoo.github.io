// Theme toggle — respects system preference, remembers an explicit choice.
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  btn.addEventListener('click', function () {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = root.getAttribute('data-theme') || (systemDark ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
(function () {
  const FILED_DATE = new Date('2026-06-01T00:00:00');
  const el = document.getElementById('filed-age');
  if (!el) return;

  function formatAge(from) {
    const now = new Date();
    const days = Math.max(0, Math.floor((now - from) / (1000 * 60 * 60 * 24)));
    if (days < 14) return `${days} day${days === 1 ? '' : 's'} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 8) return `${weeks} weeks ago`;
    const months = Math.floor(days / 30);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  }

  el.textContent = formatAge(FILED_DATE);
})();

// Stagger the log-entry reveal so they read top to bottom.
(function () {
  const entries = document.querySelectorAll('.entry');
  entries.forEach((entry, i) => {
    entry.style.animationDelay = `${Math.min(i * 90, 360)}ms`;
  });
})();
