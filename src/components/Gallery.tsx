import { useState } from "react";
import classicCutImage from "@/assets/haircut.jpeg";
import groomingImage from "@/assets/grooming.jpeg";
import eventImage from "@/assets/event.jpeg";
import modernCutImage from "@/assets/moderncut.jpeg";
import traditionalImage from "@/assets/traditional.jpeg";
import premiumImage from "@/assets/premium.jpeg";
import placeholderImage from "@/assets/placeholder.jpeg";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const galleryImages: GalleryImage[] = [
    {
      src: classicCutImage,
      alt: "Classic haircut transformation",
      category: "Classic Cuts"
    },
    {
      src: groomingImage,
      alt: "Beard grooming service",
      category: "Premium Grooming"
    },
    {
      src: eventImage,
      alt: "Wedding day styling",
      category: "Wedding Package"
    },
    {
      src: modernCutImage,
      alt: "Modern fade cut",
      category: "Modern Styles"
    },
    {
      src: traditionalImage,
      alt: "Traditional Kenyan styling",
      category: "Traditional Cuts"
    },
    {
      src: premiumImage,
      alt: "Luxury grooming experience",
      category: "Premium Services"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-warm-brown/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gold-accent">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the artistry and precision that goes into every cut, style, and grooming session
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = placeholderImage;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-cream">
                  <p className="text-sm font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://instagram.com/barbeme_kenya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50 hover:bg-card transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-accent rounded-full animate-pulse"></div>
              <span className="text-muted-foreground text-sm">Follow us on Instagram</span>
            </div>
            <span className="text-foreground font-medium">@barbeme_kenya</span>
          </a>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img 
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = placeholderImage;
              }}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-cream">
              <p className="text-lg font-medium">{selectedImage.category}</p>
              <p className="text-sm opacity-80">{selectedImage.alt}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-cream bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;