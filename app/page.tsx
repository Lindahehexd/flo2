import Hero from "./co/Hero";
import ThemeController from "./co/ThemeController";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    <Hero />
    <ThemeController />
    </main>
  );
}
