import "./globals.css";

export const metadata = {
  title: "Laukik Lanje",
  description: "You are visiting Laukik's Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" crxlauncher="">
      <body className="font-[Mona_Sans]">{children}</body>
    </html>
  );
}
