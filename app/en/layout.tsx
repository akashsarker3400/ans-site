import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Header locale="en" />
      <main className="flex-1">{children}</main>
      <Footer locale="en" />
    </>
  );
}
