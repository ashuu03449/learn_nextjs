import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-blue-300">
        <h1 className="text-white text-6xl font-bold">Hello World</h1>
        <p className="mt-4 text-lg text-white">Welcome to my website!</p>
      </main>

      <Footer />
    </div>
  );
}
