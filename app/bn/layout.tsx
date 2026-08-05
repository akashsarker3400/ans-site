import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header locale="bn" />
      <main className="flex-1">{children}</main>
      <Footer locale="bn" />
    </>
  );
}
