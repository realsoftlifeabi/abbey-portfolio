import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('./PhotoSwipeLightbox'), { ssr: false });

export const ImageGallery = ({ screenshots }: { screenshots: string[] }) => {
  const galleryItems = screenshots.map((src) => ({
    src,
    // Remove fixed dimensions to let PhotoSwipe auto-detect and respect aspect ratio
  }));

  return (
    screenshots?.length > 0 && (
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
        <div className="overflow-x-auto whitespace-nowrap scrollbar-hidden">
          <Gallery items={galleryItems} />
        </div>
      </section>
    )
  );
};
