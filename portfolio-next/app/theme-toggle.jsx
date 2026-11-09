"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    const next = current === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("dbp-theme", next); } catch {}
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      <span className="sun" aria-hidden="true">☼</span>
      <span className="moon" aria-hidden="true">☾</span>
      <span>Tema</span>
    </button>
  );
}
