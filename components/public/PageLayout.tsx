import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type PageLayoutProps = {
  children: React.ReactNode;
  /** Contenu inséré juste sous la navbar (ex: hero de page) */
  header?: React.ReactNode;
};

export function PageLayout({ children, header }: PageLayoutProps) {
  return (
    <main className="bg-white dark:bg-[#15131c] text-[#413d4a] dark:text-[#cdc7d8] min-h-screen">
      <Navbar />
      {header}
      <div className="pt-[72px]">{children}</div>
      <Footer />
    </main>
  );
}
