import { Foot } from "../components/global/Footer";
import { Header } from "../components/global/Header";

export function Sustainability() {
  return (
    <div>
      <Header active={5} />
      <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800"></main>
      <Foot />
    </div>
  );
}
