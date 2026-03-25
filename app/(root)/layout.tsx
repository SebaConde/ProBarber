import Header from '@/components/navbar';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      <main className='flex-1 wrapper'>{children}</main>
      <Footer />
    </div>
  );
}