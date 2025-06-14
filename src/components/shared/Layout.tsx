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
      <main className="pt-0 flex flex-col overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};