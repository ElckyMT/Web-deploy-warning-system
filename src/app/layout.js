import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import ClientAOS from "../component/ClientAOS";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressHydrationWarning={true}
            >
                <ClientAOS /> {/* Add the client-side AOS initialization */}
                <header>
                    <img
                        className="WICIDA"
                        src="https://drive.google.com/file/d/1fftUa3D9SX2yWa6_r6_Ovfxlvhz76eR_/view?usp=drive_link"
                        alt="WICIDA Logo"
                    />
                    <h1>Early Warning System Kelulusan PRODITI WICIDA</h1>
                </header>
                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/analysis" className="nav-link">Data analysis</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/news" className="nav-link">News</Link>
                        </li>
                        <li>
                            <Link href="/home?name=Tenochtitlan" className="nav-link">Sapa waifu saya</Link>
                        </li>
                    </ul>
                </nav>
                <div>{children}</div>

                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"
                ></script>
            </body>
        </html>
    );
}
