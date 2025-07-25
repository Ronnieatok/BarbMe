import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Star, Clock, Users, Zap } from "lucide-react";
import classicCutImage from "@/assets/haircut.jpeg";
import traditionalImage from "@/assets/traditional.jpeg";
import premiumImage from "@/assets/premium.jpeg";
import groomingImage from "@/assets/grooming.jpeg";
import eventImage from "@/assets/event.jpeg";
import modernCutImage from "@/assets/moderncut.jpeg";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  secondaryImage?: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <Scissors className="h-8 w-8 text-gold-accent" />,
      title: "Classic Cuts",
      description: "Traditional and modern haircuts crafted by master barbers",
      price: "From KSh 500",
      features: ["Consultation", "Wash & Cut", "Styling", "Hot Towel"],
      image: classicCutImage,
      secondaryImage: traditionalImage
    },
    {
      icon: <Star className="h-8 w-8 text-gold-accent" />,
      title: "Premium Grooming",
      description: "Complete grooming experience with luxury treatments",
      price: "From KSh 1,200",
      features: ["Haircut", "Beard Trim", "Face Massage", "Premium Products"],
      image: premiumImage,
      secondaryImage: groomingImage
    },
    {
      icon: <Users className="h-8 w-8 text-gold-accent" />,
      title: "Wedding Package",
      description: "Special occasion styling for your big day",
      price: "From KSh 2,500",
      features: ["Groom Package", "Best Man", "Groomsmen", "Photos"],
      image: eventImage
    },
    {
      icon: <Zap className="h-8 w-8 text-gold-accent" />,
      title: "Modern Styles",
      description: "Contemporary cuts with the latest techniques",
      price: "From KSh 800",
      features: ["Skin Fades", "Design Work", "Product Advice", "Styling"],
      image: modernCutImage
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-cream/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gold-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From classic cuts to modern styling, we offer a full range of barbering and grooming services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-gold-accent/50 transition-all duration-300 hover:shadow-xl bg-card/80 backdrop-blur-sm group overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} service`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    if (service.secondaryImage) {
                      (e.target as HTMLImageElement).src = service.secondaryImage;
                    }
                  }}
                />
                <div className="absolute bottom-4 right-4 bg-gold-accent/90 text-earth-dark px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {service.price}
                </div>
              </div>

              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-gold-accent/10 rounded-full w-fit group-hover:bg-gold-accent/20 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 text-gold-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="elegant" 
                  className="w-full hover:bg-gold-accent hover:text-earth-dark transition-colors"
                >
                  Book Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="default" size="lg" className="px-8">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;