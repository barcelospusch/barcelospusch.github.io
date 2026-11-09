import "./globals.css";

export const metadata = {
  title: "Dimitri Barcelos Pusch | Astronomia e pesquisa",
  description: "Portfólio de Dimitri Barcelos Pusch. Pesquisa observacional, ciência cidadã e divulgação em astronomia.",
};

const themeScript = `try {
  const theme = localStorage.getItem("dbp-theme");
  if (theme === "light" || theme === "dark") document.documentElement.dataset.theme = theme;
} catch {}`;

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
