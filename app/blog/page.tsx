import BlogCard from "../../components/blog/BlogCard";
import Footer from "../../components/Footer";
import SiteHeader from "../../components/portfolio/SiteHeader";

const articles = [
  {
    title: "Introduction to HTML, CSS & JS for beginners",
    excerpt:
      "Every modern website starts with three core technologies: HTML for structure, CSS for presentation, and JavaScript for interactivity. Here is how they work together—and why they are the foundation of web development.",
    image: "/blog/html.jpg",
    readTime: "2 min read",
    category: "Web development",
    href: "https://medium.com/@kemisttd/introduction-to-html-css-js-for-beginners-4cad4ca7c0a3",
  },
];

export default function BlogPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-[#f5f1e8]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(ellipse_55%_55%_at_70%_15%,rgba(174,123,59,0.13),transparent_72%),linear-gradient(180deg,rgba(230,184,102,0.025),transparent_55%)]"
      />
      <SiteHeader />

      <section className="relative z-10 mx-auto w-full max-w-[1440px] flex-1 px-5 pb-12 pt-6 sm:px-8 sm:pb-16 sm:pt-8 lg:px-16 lg:pb-[76px] lg:pt-10">
        <div className="mb-9 sm:mb-11">
          <h1 className="whitespace-nowrap font-serif text-[clamp(1.35rem,5vw,2.4rem)] leading-tight tracking-[-0.045em] text-[#f5f1e8]">
            My Blog <span className="italic text-[#e6b866]">&amp; Articles</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#b3a99b] sm:text-base sm:leading-7">
            Thoughts, tutorials, and insights on web engineering, programming
            concepts, and hands-on learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.href} {...article} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
