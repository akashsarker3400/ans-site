import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function BnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header locale="bn" />
      <main className="flex-1">{children}</main>
      <Footer locale="bn" />
    </>
  );
}
