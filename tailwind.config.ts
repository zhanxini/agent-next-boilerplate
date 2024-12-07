import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
// Define the structure of the request body
export interface PiggyBankRequestBody {
  amount: number; // Total transaction amount
  senderWallet: string; // Wallet initiating the transaction
  savingsWallet: string; // Wallet where savings will be deposited
}
