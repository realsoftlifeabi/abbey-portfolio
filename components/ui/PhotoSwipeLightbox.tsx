import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Gallery({
  items,
}: {
  items: { src: string; width: number; height: number }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: containerRef.current!,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      showHideAnimationType: 'zoom',
      bgOpacity: 0.9,
      padding: { top: 30, bottom: 30, left: 20, right: 20 },
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="pswp-gallery flex gap-4 overflow-x-auto">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.src}
          data-pswp-width={item.width}
          data-pswp-height={item.height}
          target="_blank"
          rel="noreferrer"
          className="block shrink-0 snap-center"
        >
          <Image
            src={item.src}
            alt={`Screenshot ${index + 1}`}
            width={item.width}
            height={item.height}
            className="w-[300px] h-auto rounded-md shadow-md object-cover"
          />
        </Link>
      ))}
    </div>
  );
}
