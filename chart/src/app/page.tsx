import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Integrando Graficas</h1>

      <Link href='/graficoBarra'>IR AL GRAFICO DE BARRAS</Link>
      <Link href='/graficodona'>IR AL GRAFICO DE DONA</Link>
      <Link href='/graficolineal'>IR AL GRAFICO LINEAL</Link>
    </div>
  );
}
