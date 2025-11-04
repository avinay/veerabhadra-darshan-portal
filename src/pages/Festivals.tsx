import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sparkles } from "lucide-react";
import festival from "@/assets/festival.jpg";

const Festivals = () => {
  const festivals = [
    {
      name: "Brahmotsavam",
      month: "March",
      duration: "10 days",
      description: "The grand annual chariot festival is the temple's most celebrated event. Thousands of devotees gather to witness the magnificent procession of Lord Veerabhadra on various vahanas (divine vehicles). The festival includes special poojas, cultural programs, and divine blessings.",
      highlights: [
        "Grand chariot procession",
        "Daily vahana sevas",
        "Special abhishekams",
        "Cultural performances",
        "Free annadanam (food distribution)",
      ],
    },
    {
      name: "Maha Shivratri",
      month: "February/March",
      duration: "1 day",
      description: "The great night of Lord Shiva is observed with immense devotion. Devotees fast and perform special poojas throughout the night. The temple conducts continuous abhishekams from evening till early morning.",
      highlights: [
        "All-night abhishekams",
        "Rudra homam",
        "Bhajan and kirtans",
        "Special darshan",
        "Bilva patra archana",
      ],
    },
    {
      name: "Navaratri",
      month: "September/October",
      duration: "9 days",
      description: "Nine nights of divine celebration honoring the goddess in her various forms. Each day is dedicated to different aspects of divine feminine energy with special decorations and rituals.",
      highlights: [
        "Daily goddess poojas",
        "Kumkumarchana",
        "Cultural dance performances",
        "Golu display",
        "Lalitha sahasranamam",
      ],
    },
    {
      name: "Diwali (Deepavali)",
      month: "October/November",
      duration: "1 day",
      description: "The festival of lights is celebrated with great enthusiasm. The entire temple is illuminated with thousands of oil lamps, creating a divine atmosphere.",
      highlights: [
        "Temple illumination",
        "Special poojas",
        "Lakshmi puja",
        "Fireworks display",
        "Prasadam distribution",
      ],
    },
  ];

  const monthlyEvents = [
    "Pradosham - Every 13th day after new/full moon",
    "Shivaratri - Every month on 14th day",
    "Amavasya - Special poojas on new moon day",
    "Pournami - Full moon day celebrations",
    "Ekadasi - 11th day fasting and poojas",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${festival})`,
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Temple Festivals</h1>
          <p className="text-xl">Celebrate Divine Occasions with Devotion</p>
        </div>
      </section>

      {/* Main Festivals */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Annual Festivals</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us in celebrating these grand festivals with thousands of devotees
          </p>
        </div>

        <div className="space-y-8">
          {festivals.map((festival, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="bg-primary text-primary-foreground p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Sparkles className="h-6 w-6" />
                      <h3 className="text-2xl font-bold">{festival.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5" />
                      <span className="text-lg">{festival.month}</span>
                    </div>
                    <p className="text-primary-foreground/90">
                      Duration: {festival.duration}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {festival.description}
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-3">Festival Highlights:</h4>
                    <ul className="space-y-2">
                      {festival.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Monthly Events */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Monthly Observances</h2>
              <p className="text-muted-foreground">
                Regular spiritual events celebrated every month
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {monthlyEvents.map((event, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                      <Calendar className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{event}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="font-bold text-xl mb-3">Festival Dates</h3>
            <p className="text-muted-foreground mb-4">
              Festival dates are based on the Hindu lunar calendar and may vary each year. 
              Please contact the temple office for exact dates and timings.
            </p>
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              <a href="tel:+919493149515" className="text-primary hover:underline">
                📞 +91 94931 49515
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="tel:+919493149516" className="text-primary hover:underline">
                📞 +91 94931 49516
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Festivals;
