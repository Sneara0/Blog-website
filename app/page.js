
import Hero from "./components/Hero";
import BlogCard from "./components/Blogcard";

export default function Home() {
  const blogs = [
    { title: "First blog post", excerpt: "This is the first blog post excerpt" },
    { title: "Second blog post", excerpt: "This is the second blog post excerpt" },
    { title: "Third blog post", excerpt: "This is the third blog post excerpt" },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} excerpt={blog.excerpt} />
        ))}
      </section>
    </div>
  );
}
