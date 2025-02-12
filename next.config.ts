import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    output: 'export', // Esto genera una versión estática de la aplicación
  distDir: 'out', // Carpeta donde se generará el contenido estático
  basePath: '/planets-point', // Cambia esto por el nombre de tu repositorio
};



export default nextConfig;



 
