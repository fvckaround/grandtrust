import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = {
  title: "Grand Trust Bank — Banking Beyond Boundaries",
  description: "Premium digital banking with cutting-edge security and world-class features.",
  keywords: "online banking, digital bank, Grand Trust Bank, GTB, fintech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased bg-gtb-dark text-white">
        {children}

        <Script id="smartsupp-widget" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '602040c4dea58f3ba90901b7e5c3ef223af18775';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </body>
    </html>
  );
}
