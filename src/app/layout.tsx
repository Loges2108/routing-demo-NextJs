export const metadata = {
  title: 'Routing Demo',
  description: 'A simple demonstration of routing in a Next.js application.',
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}