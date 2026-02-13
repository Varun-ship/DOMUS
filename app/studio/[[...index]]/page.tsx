// Studio page - not available in static export
// Use hosted studio at https://admindomus.sanity.studio instead

export async function generateStaticParams() {
  // For catch-all route [[...index]], return array with empty index
  // This allows the route to be statically generated
  return [{ index: [] }];
}

export default function StudioPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-stone">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-caudex text-4xl md:text-5xl mb-6 tracking-tight">
          Sanity Studio
        </h1>
        <p className="font-inter text-lg font-light text-ash-brown/80 leading-relaxed mb-8">
          Sanity Studio is not available on static hosting. Please use the hosted studio instead.
        </p>
        <a
          id="studio-open-hosted"
          href="https://admindomus.sanity.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-domus-green text-warm-stone px-8 py-4 rounded-sm font-inter text-sm tracking-wide hover:bg-domus-green/90 transition-colors"
        >
          Open Hosted Studio
        </a>
      </div>
    </div>
  );
}

