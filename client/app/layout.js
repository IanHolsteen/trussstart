import { Poppins } from "next/font/google";
import "./styles/globals.css";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { UserProvider } from './contexts/UserProvider';
import { CartProvider } from './contexts/CartContext';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Truss",
  description: "For Architects by Architects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <UserProvider>
          <CartProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}