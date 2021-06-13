import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
  className?: string;
  children?: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
