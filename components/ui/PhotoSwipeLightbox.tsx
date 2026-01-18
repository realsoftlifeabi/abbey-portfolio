import { useEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  src: string;
  width?: number;
  height?: number;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [itemsWithDimensions, setItemsWithDimensions] = useState<GalleryItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      bgOpacity: 0.95,
      padding: { top: 40, bottom: 40, left: 40, right: 40 },
      counter: true,
      arrowPrev: true,
      arrowNext: true,
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [itemsWithDimensions]);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const itemWidth = 320; // Width of one image + gap
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(Math.min(newIndex, itemsWithDimensions.length - 1));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [itemsWithDimensions.length]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 320; // Width of one image + gap
    const newScrollLeft =
      direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      {itemsWithDimensions.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background/90"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg hover:bg-background/90"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </>
      )}

      {/* Gallery Container */}
      <div
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden scrollbar-hidden"
        style={{ maxHeight: '280px' }}
      >
        <div ref={containerRef} className="pswp-gallery flex gap-4">
          <AnimatePresence>
            {itemsWithDimensions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                className="block shrink-0 snap-center relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link
                  href={item.src}
                  data-pswp-width={item.width}
                  data-pswp-height={item.height}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative group/image"
                >
                  {/* Loading Skeleton */}
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg animate-pulse" />
                  )}

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <Image
                      src={item.src}
                      alt={`Project Gallery image ${index + 1}`}
                      width={item.width || 300}
                      height={item.height || 200}
                      className="w-[300px] h-auto object-cover transition-all duration-300"
                      style={{
                        aspectRatio:
                          item.width && item.height ? `${item.width}/${item.height}` : 'auto',
                        maxHeight: '240px',
                        filter: loadedImages.has(index) ? 'none' : 'blur(4px)',
                      }}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
                    />

                    {/* Glassmorphism Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />

                    {/* Zoom Indicator */}
                    <motion.div
                      className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover/image:opacity-100 transition-all duration-300 shadow-lg border border-border/50"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                    >
                      <Maximize2 className="w-3 h-3 text-foreground" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Indicator */}
      {itemsWithDimensions.length > 1 && (
        <div className="flex justify-center mt-4 gap-1">
          {itemsWithDimensions.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-[--liftoff-blue] to-[--liftoff-orange]'
                  : 'w-1 bg-muted'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
