import { useEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryItem {
  src: string;
  width?: number;
  height?: number;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsWithDimensions, setItemsWithDimensions] = useState<GalleryItem[]>([]);

  useEffect(() => {
    // Load image dimensions for each item
    const loadDimensions = async () => {
      const itemsWithDims = await Promise.all(
        items.map(async (item) => {
          if (item.width && item.height) {
            return item;
          }

          // Create a new image to get dimensions
          const img = document.createElement('img');
          return new Promise<GalleryItem>((resolve) => {
            img.onload = () => {
              resolve({
                ...item,
                width: img.naturalWidth,
                height: img.naturalHeight,
              });
            };
            img.onerror = () => {
              // Fallback dimensions if image fails to load
              resolve({
                ...item,
                width: 1280,
                height: 720,
              });
            };
            img.src = item.src;
          });
        }),
      );
      setItemsWithDimensions(itemsWithDims);
    };

    loadDimensions();
  }, [items]);

  useEffect(() => {
    if (itemsWithDimensions.length === 0) return;

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
  }, [itemsWithDimensions]);

  return (
    <div ref={containerRef} className="pswp-gallery flex gap-4 overflow-x-auto">
      {itemsWithDimensions.map((item, index) => (
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
            width={item.width || 300}
            height={item.height || 200}
            className="w-[300px] h-auto rounded-md shadow-md object-cover"
            style={{
              aspectRatio: item.width && item.height ? `${item.width}/${item.height}` : 'auto',
            }}
          />
        </Link>
      ))}
    </div>
  );
}
