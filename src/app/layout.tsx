// import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import ReduxProvider from '@/lib/redux-provider';
import BottomNavbar from '@/components/BottomNavbar';
import AuthProvider from '@/Providers/AuthProvider';
import type { Metadata } from 'next';
import { TranslationProvider } from '@/app/context/TranslationContext';
import LanguageSwitcher from './../components/LanguageSwitcher';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Shongi',
  description: 'Old Age Agent Services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar ">
      <body
        style={{ overflow: 'overlay' }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-scroll`}
      >
        <ReduxProvider>
          <AuthProvider>
            <TranslationProvider>
              <Theme accentColor="ruby" panelBackground="solid">
                <div className="">
                  <LanguageSwitcher />
                  {children}
                  <BottomNavbar></BottomNavbar>
                </div>
              </Theme>
            </TranslationProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
