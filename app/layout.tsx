export const metadata = {
  title: "The Vision Studio",
  description: "Agência de branding, design e produção visual premium.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
