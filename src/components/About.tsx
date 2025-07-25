import { Card, CardContent } from "@/components/ui/card";
import { Award, MapPin, Users, Clock, Scissors, Shirt, Smile } from "lucide-react";
import barberImage from "@/assets/about-barber.jpg";
import shopImage from "@/assets/shop-interior.jpg";

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-gold-accent" />,
      number: "1000+",
      label: "Happy Clients",
      description: "Served with premium grooming experiences"
    },
    {
      icon: <Award className="h-8 w-8 text-gold-accent" />,
      number: "5+",
      label: "Years Experience",
      description: "Mastering the art of barbering"
    },
    {
      icon: <MapPin className="h-8 w-8 text-gold-accent" />,
      number: "3",
      label: "Locations",
      description: "Across Nairobi for your convenience"
    },
    {
      icon: <Clock className="h-8 w-8 text-gold-accent" />,
      number: "100%",
      label: "Satisfaction",
      description: "Guaranteed with every service"
    }
  ];

  const features = [
    {
      icon: <Scissors className="h-6 w-6 text-gold-accent" />,
      title: "Traditional Craftsmanship",
      description: "Honoring the rich heritage of Kenyan barbering traditions"
    },
    {
      icon: <Shirt className="h-6 w-6 text-gold-accent" />,
      title: "Modern Techniques",
      description: "Latest trends and cutting-edge styling methods"
    },
    {
      icon: <Smile className="h-6 w-6 text-gold-accent" />,
      title: "Premium Experience",
      description: "Luxury service that values your time and comfort"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream/50 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-gold-accent/30 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-80 h-80 rounded-full bg-earth-dark/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <span className="inline-block px-4 py-1 bg-gold-accent/10 text-gold-accent rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="text-gold-accent">BARBme</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Born from a passion for exceptional barbering and deep respect for Kenyan grooming traditions, 
                  BARBme represents the perfect fusion of time-honored techniques and contemporary styling.
                </p>
                
                <div className="relative rounded-xl overflow-hidden h-64">
                  <img 
                    src={barberImage} 
                    alt="Master barber at work" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/40 via-transparent to-transparent"></div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our master barbers bring years of experience and artistry to every cut, ensuring that each 
                  client leaves not just looking great, but feeling confident and refreshed.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 hover:bg-card/50 rounded-lg transition-all duration-300"
                >
                  <div className="p-2 bg-gold-accent/10 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats and Image */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 border-border/50 hover:border-gold-accent/50 transition-all duration-300 bg-card/80 backdrop-blur-sm hover:shadow-lg"
                >
                  <CardContent className="p-0 space-y-3">
                    <div className="mx-auto p-3 bg-gold-accent/10 rounded-full w-fit group-hover:bg-gold-accent/20 transition-colors">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-foreground">
                      {stat.number}
                    </div>
                    <div className="text-lg font-medium text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={shopImage} 
                alt="BARBme shop interior" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-earth-dark to-transparent p-6">
                <div className="text-cream">
                  <p className="font-medium">Visit Our Flagship Location</p>
                  <p className="text-sm opacity-90">Westlands, Nairobi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;