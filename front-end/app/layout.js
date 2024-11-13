import '../styles/globals.css';

export const metadata = {
  title: "TechHub",
  description: "O melhor site de eventos para tecnologia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}