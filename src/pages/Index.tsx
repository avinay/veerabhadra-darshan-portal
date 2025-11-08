import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Calendar, Heart, Sparkles } from "lucide-react";
import templeHeroNew from "@/assets/temple-hero-new.jpg";
import deityNew from "@/assets/deity-new.jpeg";
import festival from "@/assets/festival.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const poojaServices = [
    { name: "Abhishekam", price: "₹100 - ₹2,516", duration: "30-60 mins" },
    { name: "Sahasranamarchana", price: "₹251", duration: "45 mins" },
    { name: "Vahana Seva", price: "₹300 - ₹500", duration: "30 mins" },
    { name: "Special Archana", price: "₹100", duration: "20 mins" },
  ];

  const upcomingFestivals = [
    { name: "Brahmotsavam", date: "March 2025", description: "Annual chariot festival" },
    { name: "Maha Shivratri", date: "February 2025", description: "Night of Lord Shiva" },
    { name: "Navaratri", date: "October 2025", description: "Nine nights celebration" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${templeHeroNew})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome to Bonthapally Veerabhadra Swamy Temple
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            800+ Years of Divine Heritage & Spiritual Serenity
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/services">
              <Button size="lg" className="text-lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Book Pooja Services
              </Button>
            </Link>
            <Link to="/visit">
              <Button size="lg" variant="secondary" className="text-lg">
                <MapPin className="mr-2 h-5 w-5" />
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground">Bonthapally, Patancheru</p>
              <p className="text-muted-foreground">Telangana - 502319</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Temple Timings</h3>
              <p className="text-muted-foreground">Daily: 5:00 AM - 8:30 PM</p>
              <p className="text-muted-foreground">All days open</p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Contact</h3>
              <p className="text-muted-foreground">+91 94931 49515</p>
              <p className="text-muted-foreground">+91 94931 49516</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={deityNew}
              alt="Lord Veerabhadra Swamy"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Lord Veerabhadra Swamy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Bonthapally Veerabhadra Swamy Temple stands as a magnificent testament to 800 years 
                of spiritual heritage, blessed by the great Kakatiya dynasty. Built during the reign 
                of the illustrious Kakatiya kings, this sacred shrine has been a beacon of divine 
                grace for devotees across generations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lord Veerabhadra, a powerful manifestation of Lord Shiva, symbolizes courage, 
                protection, and divine justice. The temple's architecture beautifully blends 
                Kakatiya and Chalukyan styles, featuring intricate stone carvings and majestic pillars.
              </p>
              <Link to="/about">
                <Button className="mt-4">
                  <Heart className="mr-2 h-4 w-4" />
                  Learn More About Our Temple
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pooja Services */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pooja Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience divine blessings through our traditional pooja services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poojaServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                    <p className="text-primary font-semibold mb-2">{service.price}</p>
                    <p className="text-muted-foreground text-sm">{service.duration}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg">
                View All Services & Book Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Festivals</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrate divine occasions with thousands of devotees
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingFestivals.map((festival, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${festival})`,
                }}
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">{festival.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{festival.name}</h3>
                <p className="text-muted-foreground">{festival.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/festivals">
            <Button size="lg" variant="secondary">
              <Calendar className="mr-2 h-5 w-5" />
              View Festival Calendar
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
