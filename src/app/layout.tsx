export const metadata = {
  title: 'Routing Demo',
  description: 'A simple demonstration of routing in a Next.js application.',
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }} >
            
          <p>header</p>
        </header>
        {children}
        <footer
        style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",  
        }} >
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}