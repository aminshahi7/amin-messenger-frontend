import DashboardNav from "../(auth)/components/DashboardNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-green-200 text-black" lang="de">
      <body className="bg-white text-black">

        <header>
          <DashboardNav />
        </header>

        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}