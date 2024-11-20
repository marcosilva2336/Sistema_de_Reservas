import '../styles/globals.css';

export const metadata = {
  title: "TechHub",
  description: "O melhor site de eventos para tecnologia.",
  keywords: "eventos, tecnologia, conferências, workshops, TechHub",
  author: "João Marcos Cosme da Silva",
  ogTitle: "TechHub - O melhor site de eventos para tecnologia",
  ogDescription: "Descubra os melhores eventos de tecnologia no TechHub.",
  ogImage: "/images/Logo_Techhub.webp",
  twitterTitle: "TechHub - O melhor site de eventos para tecnologia",
  twitterDescription: "Descubra os melhores eventos de tecnologia no TechHub.",
  twitterImage: "/images/Logo_Techhub.webp",
  twitterCard: "summary_large_image"
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