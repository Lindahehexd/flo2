import Hero from "./co/Hero";
import Hero2 from "./co/Hero2";
import ThemeController from "./co/ThemeController";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
    {/* <Hero2 /> */}
    <Hero />
    <ThemeController />
    </main>
  );
}
