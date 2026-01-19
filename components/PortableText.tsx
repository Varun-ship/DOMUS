import { PortableText as PortableTextReact } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity-queries';

interface PortableTextProps {
  content: any[];
}

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value.asset).width(1200).height(675).url();
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog post image'}
            width={1200}
            height={675}
            className="w-full h-auto rounded-sm"
          />
          {value.alt && (
            <p className="mt-2 text-center font-inter text-sm text-ash-brown/60 italic">
              {value.alt}
            </p>
          )}
        </div>
      );
    },
  },
  block: {
    normal: (props: any) => (
      <p className="font-inter text-base font-light text-ash-brown/80 leading-relaxed mb-4">
        {props.children}
      </p>
    ),
    h1: (props: any) => (
      <h1 className="font-caudex text-3xl mb-4 mt-8 tracking-tight">
        {props.children}
      </h1>
    ),
    h2: (props: any) => (
      <h2 className="font-caudex text-2xl mb-3 mt-6 tracking-tight">
        {props.children}
      </h2>
    ),
    h3: (props: any) => (
      <h3 className="font-caudex text-xl mb-2 mt-4 tracking-tight">
        {props.children}
      </h3>
    ),
  },
  marks: {
    strong: (props: any) => (
      <strong className="font-semibold">{props.children}</strong>
    ),
    em: (props: any) => (
      <em className="italic">{props.children}</em>
    ),
  },
};

export default function PortableText({ content }: PortableTextProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableTextReact value={content} components={components} />
    </div>
  );
}

