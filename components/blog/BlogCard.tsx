import Image from "next/image";

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
  category: string;
  href: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
      <path
        d="M4.25 10h11.5m0 0-4.75-4.75M15.75 10 11 14.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function BlogCard({
  title,
  excerpt,
  image,
  readTime,
  category,
  href,
}: BlogCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read "${title}" on Medium (opens in a new tab)`}
      className="group block overflow-hidden rounded-2xl border border-white/[0.09] bg-[#11100e] text-left shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#e6b866]/40 hover:shadow-[0_26px_75px_rgba(0,0,0,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6b866]"
    >
      <div className="pointer-events-none relative aspect-[16/10] overflow-hidden bg-[#171511]">
        <Image
          src={image}
          alt={`${title} article thumbnail`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:left-5 sm:top-5 sm:text-[10px]">
          {category}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#b49a6c]">
          <span>{readTime}</span>
          <span aria-hidden="true" className="text-[#e6b866]/50">
            ·
          </span>
          <span>{category}</span>
        </div>
        <h2 className="mt-3 text-lg font-medium leading-snug tracking-[-0.025em] text-[#f5f1e8] sm:text-xl">
          {title}
        </h2>
        <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#a99f91] sm:text-sm sm:leading-6">
          {excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#e6b866] transition-colors group-hover:text-[#f0cf8e]">
          Read on Medium
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}
