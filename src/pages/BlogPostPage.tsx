import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ExternalLink, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  authors: author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
}

interface author {
  name: string;
  socials: Social;
}
interface Social {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}


export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // delay for a real effect
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/${slug}`)
        .then((response) => response.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          setLoading(false);
        });
    }, 2000);
  }, [slug]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!post) {
    return <p className="text-center text-red-500 mt-10">Post not found.</p>;
  }

  return (
    <>
      <Navbar />
      <div
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center text-white text-center px-6"
        style={{ backgroundImage: `url(${post.image_url})` }}
      >
        <div className="bg-transparen max-w-6xl p-4  sm:p-10 rounded-2xl">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-gray-300 mb-6">
            Discover amazing insights and stories.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center h-auto bg-white overflow-hidden transition">
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{post.summary}</h3>
          <p className="text-gray-500 text-sm mb-4">
            {post.news_site} • {new Date(post.published_at).toDateString()}
          </p>

          {/* Author Details */}
          <div className="flex items-center space-x-4">
            <p className="font-medium">{post.authors[0].name}</p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {post.authors[0].socials?.x && (
                <a
                  href={post.authors[0].socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <Twitter size={18} />
                </a>
              )}
              {post.authors[0].socials?.linkedin && (
                <a
                  href={post.authors[0].socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900"
                >
                  <Linkedin size={18} />
                </a>
              )}
            </div>
          </div>

          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-blue-500 hover:underline"
          >
            Read More <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

function SkeletonLoader() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse mb-4"></div>
      <div className="h-4 w-full bg-gray-300 rounded animate-pulse mb-2"></div>
      <div className="h-4 w-full bg-gray-300 rounded animate-pulse mb-2"></div>
      <div className="h-4 w-5/6 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
}
