import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@consensys/ds3';
import './globals.css';

export const metadata = {
  title: 'Next.js + DS3',
  description: 'The ultimate starter template for DS3 and Next.js.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <SafeAreaProvider>
          <ThemeProvider config={global.DS3}>
            {children}
          </ThemeProvider>
        </SafeAreaProvider>
      </body>
    </html>
  );
}