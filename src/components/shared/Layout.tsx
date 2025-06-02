import { Footer } from "../elements/Footer";
import { Navbar } from "../elements/Navbar";

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16 flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
        {/* Removed the h1 that was causing the gap */}
        {children}
      </main>
      <Footer />
    </>
  );
};