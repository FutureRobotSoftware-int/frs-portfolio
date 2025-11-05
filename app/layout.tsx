import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Future Robot Software",
  description: "Software development studio: AI, Analytics, Web & Game Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@600;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site">
          <div
            className="container"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              className="logo"
              style={{ color: "var(--text-main)", textDecoration: "none" }}
            >
              FUTURE ROBOT SOFTWARE
            </Link>
            <nav>
              <a href="/projects">Projects</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <div className="container">{children}</div>
        </main>

        <footer>
          <div
            className="container"
            style={{ opacity: 0.8, fontSize: ".9rem" }}
          >
            © 2025 Future Robot Software — AI • Analytics • Web • Game Tech
          </div>
        </footer>
      </body>
    </html>
  );
}
