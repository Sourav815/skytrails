import { useEffect, useState } from "react";
import { Tag, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  authors: author[];
  image_url: string;
  summary: string;
  published_at: string;
  news_site: string;
}

interface author {
  name: string;
}

export default function BlogPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.spaceflightnewsapi.net/v4/articles/?format=json")
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  // 🔹 Filtered posts based on search input
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.news_site.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* 🔹 Search Box */}
      <div className="flex justify-end mb-6">
        <div className="relative w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or news tag..."
            className="border border-gray-300 w-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md"
          />
          <Search className="absolute right-3 top-2 text-gray-600" size={20} />
        </div>
      </div>

      <div className="grid md:grid-cols-1 gap-8">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          : filteredPosts.length === 0 ? (
            <p className="text-center text-red-500 text-2xl">Oops! No matching posts found.</p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="sm:text-4xl text-2xl font-semibold mb-2">
                  {post.title}
                </h3>
                <h4 className="sm:text-lg text-sm my-4 border-l-4 border-gray-400 pl-2">
                  {post.authors[0]?.name || "Unknown"} / On{" "}
                  {new Date(post.published_at).toDateString()}
                </h4>
                <img src={post.image_url} alt="image" className="rounded-sm" />
                <p className="text-gray-600 mt-8">{post.summary}</p>
                <div className="flex justify-between">
                  <Link
                    to={`/${post.id}`}
                    className="mt-4 text-blue-500 hover:underline cursor-pointer"
                  >
                    Read More
                  </Link>
                  <h2 className="mt-4 flex">
                    <Tag className="rotate-90 mr-4" />
                    <span className="bg-gray-100 px-2 py-0.5 border-0 rounded-sm">
                      {post.news_site}
                    </span>
                  </h2>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
}

// Skeleton Loader Component
function SkeletonCard() {
  return (
    <div className="bg-gray-200 animate-pulse shadow-md rounded-lg p-6">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
}
