import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, IndianRupee } from "lucide-react";

const Services = () => {
  const poojaServices = [
    {
      category: "Abhishekam Services",
      items: [
        { name: "Sahasra Kalasabhishekam", price: "₹2,516", duration: "2-3 hours", description: "Grand abhishekam with 1000 kalashas" },
        { name: "Ekadasa Rudra Kalasabhishekam", price: "₹516", duration: "1.5 hours", description: "Abhishekam with 11 sacred pots" },
        { name: "Panchamruta Abhishekam", price: "₹251", duration: "45 mins", description: "Abhishekam with five sacred nectars" },
        { name: "Rudrabhishekam", price: "₹251", duration: "45 mins", description: "Traditional Rudra abhishekam" },
        { name: "Simple Abhishekam", price: "₹100", duration: "30 mins", description: "Basic abhishekam ritual" },
      ],
    },
    {
      category: "Archana Services",
      items: [
        { name: "Sahasranamarchana", price: "₹251", duration: "45 mins", description: "Chanting of 1000 names" },
        { name: "Shodashopachara Puja", price: "₹251", duration: "1 hour", description: "Complete 16-step worship" },
        { name: "Ekadasa Rudrarchana", price: "₹251", duration: "45 mins", description: "11 Rudra archana" },
        { name: "Kumkumarchana", price: "₹100", duration: "30 mins", description: "Archana with sacred kumkum" },
      ],
    },
    {
      category: "Vahana Sevas",
      items: [
        { name: "Garuda Vahana Seva", price: "₹500", duration: "45 mins", description: "Procession on Garuda vehicle" },
        { name: "Hanuman Vahana Seva", price: "₹500", duration: "45 mins", description: "Procession on Hanuman vehicle" },
        { name: "Sesha Vahana Seva", price: "₹500", duration: "45 mins", description: "Procession on serpent vehicle" },
        { name: "Simple Vahana Seva", price: "₹300", duration: "30 mins", description: "Basic procession service" },
      ],
    },
    {
      category: "Life Milestone Ceremonies",
      items: [
        { name: "Kalyanam (Marriage)", price: "Contact", duration: "Varies", description: "Temple marriage ceremony" },
        { name: "Upanayanam", price: "Contact", duration: "Half day", description: "Sacred thread ceremony" },
        { name: "Aksharabhyasam", price: "Contact", duration: "1 hour", description: "Education initiation ceremony" },
        { name: "Namakaranam", price: "Contact", duration: "1 hour", description: "Naming ceremony" },
      ],
    },
    {
      category: "Special Ceremonies",
      items: [
        { name: "Agni Gundam", price: "Contact", duration: "2-3 hours", description: "Sacred fire ritual" },
        { name: "Navagraha Homam", price: "Contact", duration: "2 hours", description: "Nine planets worship" },
        { name: "Ganapathi Homam", price: "Contact", duration: "1.5 hours", description: "Lord Ganesha fire ritual" },
        { name: "Chandi Homam", price: "Contact", duration: "3-4 hours", description: "Goddess Chandi fire ritual" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Darshan & Pooja Services</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Experience divine blessings through our traditional pooja services and rituals
          </p>
        </div>
      </section>

      {/* Temple Timings */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Clock className="h-6 w-6 text-primary" />
              Temple Timings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Daily Darshan</h3>
                <p className="text-muted-foreground">5:00 AM - 8:30 PM</p>
                <p className="text-sm text-muted-foreground mt-1">Open all days</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Special Darshan</h3>
                <p className="text-muted-foreground">Available on request</p>
                <p className="text-sm text-muted-foreground mt-1">Contact temple office</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> All pooja services require advance booking. 
                Please contact the temple office at +91 94931 49515 or visit in person to book.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Pooja Services */}
      <section className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          {poojaServices.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-7 w-7 text-primary" />
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((service, serviceIdx) => (
                  <Card key={serviceIdx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-3">{service.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          <IndianRupee className="h-4 w-4" />
                          <span>{service.price}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      <Button className="w-full" size="sm">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact for Booking */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Pooja Service</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            For bookings and detailed information about any pooja service, 
            please contact our temple office
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:+919493149515">Call: +91 94931 49515</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919493149516">Call: +91 94931 49516</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
