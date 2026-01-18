import { useEffect, useRef, useState } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Pause, Play } from 'lucide-react';
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
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

    lightbox.on('beforeOpen', () => {
      setLightboxOpen(true);
      setIsPaused(true);

      // Add custom pause button to lightbox
      setTimeout(() => {
        const pswp = document.querySelector('.pswp') as HTMLElement;
        if (pswp && !pswp.querySelector('.custom-pause-btn')) {
          const pauseBtn = document.createElement('button');
          pauseBtn.className =
            'custom-pause-btn absolute top-4 right-4 z-50 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background/90 transition-all duration-300 border border-border/50';
          pauseBtn.innerHTML = isPaused
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
          pauseBtn.onclick = toggleLightboxPause;
          pswp.appendChild(pauseBtn);
        }
      }, 100);
    });

    lightbox.on('close', () => {
      setLightboxOpen(false);
      setIsPaused(false);
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [itemsWithDimensions]);

  // Create infinite items by duplicating the array
  const infiniteItems =
    itemsWithDimensions.length > 1
      ? [...itemsWithDimensions, ...itemsWithDimensions, ...itemsWithDimensions]
      : itemsWithDimensions;

  // Initialize scroll position to middle set for infinite scrolling
  useEffect(() => {
    if (
      scrollContainerRef.current &&
      itemsWithDimensions.length > 1 &&
      infiniteItems.length > itemsWithDimensions.length
    ) {
      // Start from the middle set
      const initialScroll = itemsWithDimensions.length * 320;
      scrollContainerRef.current.scrollLeft = initialScroll;
    }
  }, [itemsWithDimensions.length, infiniteItems.length]);

  // Handle infinite scroll reset
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || itemsWithDimensions.length <= 1) return;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const itemWidth = 320;
      const totalWidth = itemsWithDimensions.length * itemWidth;

      // Reset to middle when reaching the beginning or end
      if (scrollLeft <= 0) {
        scrollContainer.scrollLeft = totalWidth;
      } else if (scrollLeft >= totalWidth * 2) {
        scrollContainer.scrollLeft = totalWidth;
      }

      const newIndex =
        Math.round((scrollLeft - totalWidth) / itemWidth) % itemsWithDimensions.length;
      setCurrentIndex(Math.max(0, Math.min(newIndex, itemsWithDimensions.length - 1)));
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [itemsWithDimensions.length]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isPaused || itemsWithDimensions.length <= 1) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      return;
    }

    autoScrollIntervalRef.current = setInterval(() => {
      if (scrollContainerRef.current && !lightboxOpen) {
        const nextIndex = (currentIndex + 1) % itemsWithDimensions.length;
        const scrollAmount = (nextIndex + itemsWithDimensions.length) * 320; // Start from middle set

        scrollContainerRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth',
        });

        setCurrentIndex(nextIndex);
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
    };
  }, [isAutoScrolling, isPaused, currentIndex, itemsWithDimensions.length, lightboxOpen]);

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    if (!lightboxOpen) {
      setIsPaused(true);

      // Clear existing timeout
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }

      // Resume auto-scroll after 5 seconds of inactivity
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 5000);
    }
  };

  // Pause/resume toggle for lightbox
  const toggleLightboxPause = () => {
    if (lightboxOpen) {
      setIsPaused(!isPaused);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    handleUserInteraction();

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
        onMouseEnter={handleUserInteraction}
        onTouchStart={handleUserInteraction}
      >
        <div ref={containerRef} className="pswp-gallery flex gap-4">
          <AnimatePresence>
            {infiniteItems.map((item, index) => {
              const originalIndex = index % itemsWithDimensions.length;
              return (
                <motion.div
                  key={`${originalIndex}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: originalIndex * 0.1,
                    ease: 'easeOut',
                  }}
                  className="block shrink-0 snap-center relative"
                  onMouseEnter={() => setHoveredIndex(originalIndex)}
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
                    {!loadedImages.has(originalIndex) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg animate-pulse" />
                    )}

                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: hoveredIndex === originalIndex ? 1.05 : 1 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={item.src}
                        alt={`Project Gallery image ${originalIndex + 1}`}
                        width={300}
                        height={240}
                        className="w-[300px] h-[240px] object-cover transition-all duration-300"
                        style={{
                          filter: loadedImages.has(originalIndex) ? 'none' : 'blur(4px)',
                        }}
                        onLoad={() => handleImageLoad(originalIndex)}
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
              );
            })}
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
