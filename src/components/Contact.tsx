import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram, Facebook, Mail, MessageSquare } from "lucide-react";
import westlandsImage from "@/assets/westlands-location.jpeg";
import cbdImage from "@/assets/cbd-location.jpeg";
import karenImage from "@/assets/karen-location.jpeg";

const Contact = () => {
  const locations = [
    {
      name: "Westlands Branch",
      address: "Westlands Shopping Center, Waiyaki Way",
      phone: "+254 712 345 678",
      hours: "Mon-Sat: 8AM-8PM, Sun: 10AM-6PM",
      image: westlandsImage,
      mapLink: "https://maps.app.goo.gl/example1",
      coordinates: { lat: -1.2657, lng: 36.8027 }
    },
    {
      name: "CBD Branch", 
      address: "Kimathi Street, Nairobi CBD",
      phone: "+254 723 456 789",
      hours: "Mon-Sat: 9AM-7PM, Sun: 11AM-5PM",
      image: cbdImage,
      mapLink: "https://maps.app.goo.gl/example2",
      coordinates: { lat: -1.2833, lng: 36.8172 }
    },
    {
      name: "Karen Branch",
      address: "Karen Shopping Center, Karen Road",
      phone: "+254 734 567 890", 
      hours: "Mon-Sat: 8AM-8PM, Sun: 10AM-6PM",
      image: karenImage,
      mapLink: "https://maps.app.goo.gl/example3",
      coordinates: { lat: -1.3192, lng: 36.7114 }
    }
  ];

  return (
    <section id="contact" className="py-20 bg-warm-brown/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-gold-accent/30 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-earth-dark/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit <span className="text-gold-accent">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find us at one of our convenient locations across Nairobi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-gold-accent/50 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-lg group overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`${location.name} exterior`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/40 via-transparent to-transparent"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold-accent" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gold-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{location.address}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold-accent flex-shrink-0" />
                  <a 
                    href={`tel:${location.phone.replace(/\s+/g, '')}`} 
                    className="text-foreground hover:text-gold-accent transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-gold-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">{location.hours}</p>
                </div>
                
                <Button 
                  asChild
                  variant="elegant" 
                  className="w-full mt-4"
                >
                  <a 
                    href={location.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-warm-brown to-earth-dark rounded-2xl p-12 text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cream/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Look Your Best?</h3>
            <p className="text-xl mb-8 text-cream/90 max-w-3xl mx-auto">
              Book your appointment today and experience the BARBme difference
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg" className="px-8">
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 border-cream/30 text-cream hover:bg-cream hover:text-earth-dark"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <a 
                href="https://wa.me/254712345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-gold-accent transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:hello@barbme.co.ke" 
                className="flex items-center gap-2 text-cream/70 hover:text-gold-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </a>
              <a 
                href="https://instagram.com/barbme_kenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-gold-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://facebook.com/barbme.kenya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-gold-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;