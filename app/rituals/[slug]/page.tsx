import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AnimatedSection from '@/components/AnimatedSection';

const articles: Record<string, {
  title: string;
  description: string;
  content: string;
  category: string;
}> = {
  'the-art-of-slow-touch': {
    title: 'The Art of Slow Touch',
    description: 'Understanding how intentional, slow touch can regulate the nervous system and create profound states of calm.',
    category: 'Calm',
    content: `Slow touch is not simply about moving slowly—it's about presence, intention, and allowing time for the nervous system to respond.

When touch moves too quickly, the body doesn't have time to register, process, and release. The nervous system stays in a state of alert, unable to fully relax. But when touch moves slowly, with full presence, something different happens.

The nervous system begins to recognize safety. It can let down its guard. Tension that has been held for days, weeks, or even years begins to release naturally. This isn't forced—it's invited.

In our rituals, we move at a pace that allows for this response. Each stroke is intentional. Each moment of contact is fully present. The goal isn't to "fix" anything, but to create the conditions for the body's own wisdom to emerge.

This is the art of slow touch: creating space for restoration through presence and patience.`,
  },
  'warmth-as-medicine': {
    title: 'Warmth as Medicine',
    description: 'Exploring the therapeutic benefits of warmth—from heated oils to warm stones—and how they support restoration.',
    category: 'Warmth',
    content: `Warmth has been used therapeutically for thousands of years. The ancient Romans understood this deeply—their thermae were built around the principle that heat and warmth could facilitate healing, relaxation, and renewal.

Modern science confirms what ancient wisdom knew: warmth supports circulation, relaxes muscle tissue, and signals safety to the nervous system. When we apply warm oil or place heated stones, we're not just providing physical comfort—we're creating conditions for deep restoration.

In our rituals, warmth is central. Oils are warmed to body temperature. Heated stones are placed strategically. The entire experience is designed to feel warm, safe, and nurturing.

This warmth extends beyond the physical. It's also about emotional warmth—the presence of a caring practitioner, the safety of your own home, the feeling of being held and cared for.

Together, physical and emotional warmth create a powerful container for healing and restoration.`,
  },
  'creating-sanctuary-at-home': {
    title: 'Creating Sanctuary at Home',
    description: 'Practical guidance on transforming your space into a ritual environment, even in the smallest of homes.',
    category: 'Recovery',
    content: `Sanctuary doesn't require a spa or a dedicated room. It can be created anywhere, with intention and simple preparation.

The first step is choosing your space. A bedroom, living room, or even a quiet corner can become a ritual space. What matters is that it feels private, comfortable, and free from interruption.

Lighting is essential. Dim, warm light—from candles, lamps, or dimmed overhead lights—creates the right atmosphere. Harsh, bright light keeps the nervous system alert. Soft light invites relaxation.

Temperature matters. The space should be comfortably warm, not hot or cold. Your body will be more receptive to touch when it's not working to maintain its temperature.

Clean linens or towels create a sense of care and preparation. Even if you're using your own bed, fresh linens signal that this time is special, set apart from ordinary life.

Finally, remove distractions. Silence phones. Close doors. Let others in your household know that this time is dedicated. Sanctuary is created not just by what you add, but by what you remove.`,
  },
  'nervous-system-and-rest': {
    title: 'The Nervous System and Rest',
    description: 'How touch, presence, and ritual support nervous system regulation and true rest.',
    category: 'Sleep',
    content: `True rest isn't just about sleep—it's about nervous system regulation. When the nervous system is in a state of chronic activation (fight, flight, or freeze), even sleep can be shallow and unrefreshing.

Touch, when offered with presence and safety, can help regulate the nervous system. Slow, intentional touch signals safety. The nervous system can begin to shift from activation to rest.

This is why our rituals move slowly. We're not just providing physical relaxation—we're creating conditions for the nervous system to find its way back to balance.

Breathwork supports this process. When we guide breath, we're helping the nervous system regulate through the breath itself. Deep, slow breathing activates the parasympathetic nervous system—the rest and digest response.

Ritual also supports regulation. The predictability, the intention, the dedicated time—all of these signal safety to the nervous system. When the nervous system feels safe, it can rest.

After a ritual, many clients report deeper, more restful sleep. This isn't just because they're relaxed—it's because their nervous system has been given the conditions it needs to truly rest.`,
  },
  'breathwork-in-practice': {
    title: 'Breathwork in Practice',
    description: 'Simple breathwork techniques that complement bodywork and deepen the experience of restoration.',
    category: 'Calm',
    content: `Breathwork is woven throughout our rituals, not as a separate practice, but as a natural complement to touch and presence.

The simplest breathwork technique is simply to notice the breath. As you receive touch, allow your attention to rest on your breathing. Notice its natural rhythm. There's no need to change it—just notice.

When we guide breath, we often suggest a simple pattern: inhale for four counts, exhale for six. This slightly longer exhale activates the parasympathetic nervous system, supporting relaxation.

But breathwork in our context isn't about complex techniques. It's about using the breath as an anchor—a way to stay present, to regulate, to deepen the experience of receiving care.

Some clients find that breathwork helps them stay present during bodywork. Others find it helps them process emotions that arise. Still others simply notice that their breathing naturally deepens as they relax.

The key is that breathwork is offered, not forced. It's a tool available to you, to use as feels right in the moment.`,
  },
  'aftercare-and-integration': {
    title: 'Aftercare and Integration',
    description: 'How to extend the benefits of your ritual through thoughtful aftercare and integration practices.',
    category: 'Recovery',
    content: `The ritual doesn't end when the session does. The effects continue to unfold, often for days afterward. Thoughtful aftercare helps you extend and integrate these benefits.

Immediately after, rest is essential. Your body and nervous system are processing the experience. Give them time. Avoid rushing into activity, even if you feel energized.

Hydration supports this process. Warm water or herbal tea helps the body process and integrate. Avoid alcohol or heavy meals for a few hours.

Movement, when you're ready, should be gentle. A slow walk, gentle stretching, or simply moving through your day with awareness. Avoid intense exercise for at least 24 hours.

Notice how you feel. Many clients report that the effects deepen over 24-48 hours. You might notice improved sleep, reduced tension, greater emotional regulation, or simply a sense of calm that wasn't there before.

Integration is about allowing these changes to settle. Don't rush back to your normal pace. The ritual has created space—allow yourself to move through that space with intention.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default function RitualArticle({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-24">
      <article className="max-w-3xl mx-auto px-6 py-20">
        <AnimatedSection>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-aureum-gold/10 text-aureum-gold font-inter text-xs tracking-wide rounded-sm">
              {article.category}
            </span>
          </div>
          <h1 className="font-bodoni text-4xl md:text-5xl mb-6 tracking-tight">
            {article.title}
          </h1>
          <p className="font-inter text-lg font-light text-ash-brown/70 mb-12 leading-relaxed">
            {article.description}
          </p>
          <div className="prose prose-lg max-w-none">
            <div className="font-inter text-base font-light text-ash-brown/80 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>
          </div>
        </AnimatedSection>
      </article>
    </div>
  );
}

