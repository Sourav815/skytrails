import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import BlogPosts from "./components/Blogposts.tsx";
import Footer from "./components/Footer.tsx";


function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Header />
        <BlogPosts />
        <Footer />
      </div>
    </>
  );
}

export default App;
