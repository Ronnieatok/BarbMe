import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-barber.jpg";

const Hero = () => {
  return (
    <section className="relative h-[80vh] max-h-[800px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional barber at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-dark/80 via-warm-brown/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container relative h-full flex flex-col justify-center items-start text-left px-6">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-cream leading-tight">
            <span className="block">BARB</span>
            <span className="bg-gradient-to-r from-gold-accent to-primary-glow bg-clip-text text-transparent">
              ME
            </span>
          </h1>
          
          <p className="text-xl text-cream/90 leading-relaxed">
            Experience the finest barbering and salon services in Kenya. Where tradition meets modern excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              Book Now
            </Button>
            <Button 
              variant="elegant" 
              size="lg"
              className="text-lg px-8 py-4 min-w-[200px]"
            >
              View Services
            </Button>
          </div>
          
          <div className="pt-8 text-cream/70">
            <p className="text-sm uppercase tracking-wider">Trusted by 1000+ satisfied clients</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-accent rounded-full p-1">
          <div className="w-1 h-3 bg-gold-accent rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;