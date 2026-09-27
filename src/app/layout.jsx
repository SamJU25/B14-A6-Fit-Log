import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanProvider } from "@/context/PlanContext";

export const metadata = {
  title: "FitLog — Train With Intent. Log Every Set.",
  description:
    "FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
  keywords: ["fitlog", "workout tracker", "gym logger", "fitness library", "exercises"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-dark text-slate-100 antialiased">
        <PlanProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </PlanProvider>
      </body>
    </html>
  );
}
