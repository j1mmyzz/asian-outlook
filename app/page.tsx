import Link from "next/link";

const magazines = [
  {
    title: 'Fall 2025 "Lingering Shadows"',
    description:
      "A featured issue exploring memory, identity, and atmosphere through creative and visual work.",
    href: "/magazines/fall-2025-lingering-shadows",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: 'Fall 2025 "Eternal"',
    description:
      "A curated collection of writing and art centered on continuity, legacy, and reflection.",
    href: "/magazines/fall-2025-eternal",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: 'Spring 2025 "Mythology"',
    description:
      "An issue inspired by folklore, storytelling, and reinterpretations of tradition.",
    href: "/magazines/spring-2025-mythology",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1200&q=80",
  },
];

const newsletters = [
  {
    title: "The Monthly Outlook",
    description:
      "Community updates, highlights, events, and features from Asian Outlook.",
    href: "/newsletters/monthly-outlook-december-2025",
  },
  {
    title: "The Monthly Outlook",
    description:
      "A snapshot of what the organization has been creating and planning.",
    href: "/newsletters/monthly-outlook-october-2025",
  },
  {
    title: "September 2025",
    description:
      "A monthly roundup of announcements, programming, and student voices.",
    href: "/newsletters/september-2025",
  },
];

const blogs = [
  {
    title: "Why is it so hard to wake up",
    description: "Personal reflection and student-centered lifestyle writing.",
    href: "/blogs/why-is-it-so-hard-to-wake-up",
  },
  {
    title: "Halfway to 20: I Don’t Have Lifestyle Tips, Only Baking Tips",
    description:
      "A warm, personality-driven blog blending reflection with practical creativity.",
    href: "/blogs/halfway-to-20-baking-tips",
  },
  {
    title: "How to Master Binghamton University’s Buses",
    description:
      "Campus-life writing that helps readers navigate everyday student experiences.",
    href: "/blogs/how-to-master-binghamton-university-buses",
  },
];

const mediaItems = [
  {
    title: "Podcast Spotlight",
    description:
      "Listen to conversations, stories, and creative audio projects from the team.",
    href: "/media-production/podcast-spotlight",
  },
  {
    title: "Student Voices",
    description:
      "Media projects focused on expression, identity, and community storytelling.",
    href: "/media-production/student-voices",
  },
  {
    title: "Creative Features",
    description:
      "Interviews, audio narratives, and multimedia experiments from contributors.",
    href: "/media-production/creative-features",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
  href,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-blue-950">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-neutral-600">
          {description}
        </p>
      </div>

      <Link
        href={href}
        className="inline-flex w-fit items-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
      >
        View all
      </Link>
    </div>
  );
}

function FeaturedMagazineCard({
  title,
  description,
  href,
  image,
}: {
  title: string;
  description: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Magazine
          </p>
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-6 text-neutral-600">{description}</p>
      </div>
    </Link>
  );
}

function SimpleCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-neutral-900 transition group-hover:text-blue-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
      <span className="mt-5 inline-block text-sm font-medium text-neutral-900">
        Read more →
      </span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="bg-slate-100 text-neutral-900">
      <section className="relative overflow-hidden border-b border-neutral-200 bg-blue-950">
        <div className="grid min-h-180 items-stretch lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-center px-6 py-20 md:px-10 md:py-28 lg:px-16">
            <div className="max-w-2xl">
              <p className="mb-4 text-[40px] font-semibold uppercase tracking-[0.25em] text-white">
                Asian Outlook
              </p>

              <p className="mt-6 text-lg leading-8 text-white">
                As the creative, literary and political arm of the Asian Student
                Union at Binghamton University, we publish magazines twice each
                semester, produce podcasts, and host events representing the
                Asian student body and beyond. Although we are an Asian-interest
                publication, we are not Asian exclusive and warmly welcome new
                ideas and voices!
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/magazines"
                  className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
                >
                  Explore Magazines
                </Link>
                <Link
                  href="/about"
                  className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px]">
            <img
              src="/magazine_image.jpg"
              alt="Image of a collection of magazines"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <SectionHeader
          eyebrow="Featured"
          title="Recent Magazines"
          description="This section can later map over the top 3 magazine entries from your database. For now, these cards stay static."
          href="/magazines"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {magazines.map((item) => (
            <FeaturedMagazineCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionHeader
            eyebrow="Updates"
            title="Latest Newsletters"
            description="Later, this can become a live query for the 3 newest newsletter entries in Supabase."
            href="/newsletters"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {newsletters.map((item) => (
              <SimpleCard key={item.title + item.href} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionHeader
            eyebrow="Writing"
            title="From the Blog"
            description="A preview area for blog posts, reflections, and student-centered writing."
            href="/blogs"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map((item) => (
              <SimpleCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <SectionHeader
            eyebrow="Multimedia"
            title="Media Production"
            description="This section can later pull the latest featured podcasts, interviews, or other media projects."
            href="/media-production"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {mediaItems.map((item) => (
              <SimpleCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-slate-100 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-black">
                Join the community
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl text-gray-900">
                A space for stories, ideas, and creative work.
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-900">
                As your database gets connected, this homepage can automatically
                surface the newest magazines, newsletters, blogs, and media
                projects every time the site loads.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-200"
              >
                About Us
              </Link>
              <Link
                href="/search"
                className="rounded-full border bg-white border-white/25 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-white/10"
              >
                Search the Site
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
