// Importações de módulos
import React from "react";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

// Definição da fonte Inter
const inter = Inter({ subsets: ["latin"] });

// Componente RootLayout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        {/* Incluir os metadados */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content="Generated by create next app" />
        <title>Lufa Lufa</title>
      </head>
      <body style={{background:'radial-gradient(circle, rgba(106,87,180,1) 5%, rgba(100,74,150,1) 36%, rgba(84,47,156,1) 94%)'}}>
        {/* Adicionar o ChakraProvider */}
        <ChakraProvider>
          {/* Renderizar os filhos */}
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}