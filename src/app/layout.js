//layout.js
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Gurudev Bachat Sahakari",
  description: "Track customer deposits and collections offline and online."
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1"/>
//         <meta name="theme-color" content="#1e3a8a" />
//         <link rel="manifest" href="/manifest.json"/>
//         <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png"/>
//         <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"/>
//       </Head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         <header className="bg-blue-900 text-white p-5 shadow flex items-center justify-between gap-3">
//           <div className="flex items-center gap-5 md:flex">
//             <div className="w-12 h-12 md:h-14 md:w-14 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-lg">
//               G
//             </div>
//             <span className="text-xl font-bold md:text-2xl">Gurudev Bachat Sahakari</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <div className="w-6 h-6 md:h-7 md:w-7 bg-white rounded-full flex items-center justify-center text-blue-900 font-semibold">
//               M
//             </div>
//             <span className="text-white">Mom</span>
//           </div>
//         </header>

//         <Navbar />
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#1e3a8a"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header className="bg-blue-900 text-white p-5 shadow flex items-center justify-between gap-3">
          <div className="flex items-center gap-5 md:flex">
            <div className="w-12 h-12 md:h-14 md:w-14 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-lg">
              G
            </div>
            <span className="text-xl font-bold md:text-2xl">Gurudev Bachat Sahakari</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 md:h-7 md:w-7 bg-white rounded-full flex items-center justify-center text-blue-900 font-semibold">
              M
            </div>
            <span className="text-white">Mom</span>
          </div>
        </header>

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

