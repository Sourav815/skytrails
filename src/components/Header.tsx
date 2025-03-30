export default function Header() {
    return (
      <header 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center text-white text-center px-6 bg-[url(/images/maste.jpg)]"
      >
        <div className="bg-transparent p-10 rounded-2xl">
          <h1 className="sm:text-6xl font-bold mb-4 text-4xl">Welcome to My Blog</h1>
          <p className="text-lg text-gray-200">Explore amazing articles and insights on various topics.</p>
        </div>
      </header>
    );
  }
  