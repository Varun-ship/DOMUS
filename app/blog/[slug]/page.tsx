import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

const posts: Record<string, {
  title: string;
  description: string;
  date: string;
  content: string;
}> = {
  'welcoming-spring-rituals-for-renewal': {
    title: 'Welcoming Spring: Rituals for Renewal',
    description: 'As the seasons shift, our bodies and nervous systems respond. How to align your wellness practice with the rhythms of nature.',
    date: 'March 2024',
    content: `Spring brings a natural impulse toward renewal. After the inward focus of winter, our bodies and spirits begin to open, to reach toward light and warmth.

This seasonal shift is an ideal time to engage with rituals of renewal. Our bodies are already moving in this direction—we can support and deepen this natural process.

In our spring rituals, we emphasize opening, release, and the return of energy. Warm oils support circulation. Gentle movement encourages the body to release what it's been holding. Breathwork helps clear stagnation.

But spring renewal isn't just physical. It's also emotional, spiritual. It's about letting go of what no longer serves, making space for new growth, new possibilities.

This is the time to consider what you're ready to release. What patterns, what tensions, what ways of being are you ready to let go of? The ritual can support this release, creating space for something new to emerge.

As you move through spring, notice how your body responds to the changing light, the warming air, the lengthening days. Align your wellness practice with these natural rhythms.`,
  },
  'the-gift-of-presence': {
    title: 'The Gift of Presence',
    description: 'In a world of constant distraction, presence becomes a radical act. How we cultivate presence in our rituals and daily life.',
    date: 'February 2024',
    content: `Presence is perhaps the most precious gift we can offer—to ourselves, to others, to the moment itself.

In our rituals, presence is foundational. When a practitioner is fully present, something shifts. The quality of touch changes. The space becomes different. The person receiving care can feel it.

But presence isn't just for practitioners. It's also for those receiving care. When you can be fully present to your own experience—to the sensations, the emotions, the shifts—the ritual deepens.

In daily life, presence is equally important. How often do we move through our days on autopilot, barely noticing where we are, what we're doing, how we feel?

Cultivating presence is a practice. It begins with simple moments: noticing your breath, feeling your feet on the ground, truly seeing what's in front of you.

In our rituals, we create conditions for presence. The slow pace, the quiet space, the dedicated time—all of these support presence. But the practice extends beyond the ritual itself.

The more we practice presence in our rituals, the more it becomes available in our daily lives. Presence becomes a way of being, not just something we do during special moments.`,
  },
  'touch-and-connection': {
    title: 'Touch and Connection',
    description: 'Exploring the profound role of touch in human connection, healing, and restoration. Why touch matters more than ever.',
    date: 'January 2024',
    content: `Touch is fundamental to human experience. From the moment we're born, touch communicates care, safety, connection. It's one of our primary languages.

Yet in modern life, many of us experience touch deprivation. We live in a culture that's often touch-averse, where physical contact is limited or transactional.

This deprivation has consequences. Research shows that touch supports immune function, reduces stress, regulates the nervous system, and promotes emotional well-being.

In our rituals, touch is central. But it's not just any touch—it's intentional, present, caring touch. Touch that communicates safety, respect, and care.

This kind of touch can be profoundly healing. It can help regulate the nervous system, release held tension, and create a sense of connection that many of us are missing.

In a world that's increasingly disconnected, touch becomes even more important. It's a way of reconnecting—with our bodies, with our feelings, with a sense of being truly seen and cared for.

This is why our rituals focus so deeply on the quality of touch. It's not just about technique—it's about presence, intention, and the profound power of human connection through touch.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug];
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <AnimatedSection>
          <Link href="/blog" className="inline-block mb-8 text-aureum-gold hover:text-aureum-gold/80 font-inter text-sm tracking-wide">
            ← Back to Journal
          </Link>
          <div className="mb-6">
            <span className="font-inter text-sm font-light text-ash-brown/60">
              {post.date}
            </span>
          </div>
          <h1 className="font-bodoni text-4xl md:text-5xl mb-6 tracking-tight">
            {post.title}
          </h1>
          <p className="font-inter text-lg font-light text-ash-brown/70 mb-12 leading-relaxed">
            {post.description}
          </p>
          <div className="prose prose-lg max-w-none">
            <div className="font-inter text-base font-light text-ash-brown/80 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}

