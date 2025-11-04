import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { History, Crown, Mountain, Sparkles } from "lucide-react";
import templeHero from "@/assets/temple-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${templeHero})`,
        }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Temple</h1>
          <p className="text-xl">800+ Years of Divine Heritage</p>
        </div>
      </section>

      {/* Temple History */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <History className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Temple History</h2>
          </div>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bonthapally Veerabhadra Swamy Temple stands as a magnificent testament to over 800 years 
                  of unbroken spiritual heritage. Built during the golden era of the Kakatiya dynasty, 
                  this sacred shrine has witnessed centuries of devotion, serving as a spiritual beacon 
                  for countless devotees.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The temple was constructed by the illustrious Kakatiya kings, who were renowned patrons 
                  of art, architecture, and spirituality. Their vision was to create a divine space where 
                  devotees could connect with the powerful energy of Lord Veerabhadra Swamy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divine Legend */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">The Divine Legend</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  According to ancient local legend, a devout shepherd discovered the divine presence 
                  at this sacred site over 800 years ago. While tending his flock, he witnessed a 
                  miraculous light emanating from the ground, accompanied by divine vibrations.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Upon investigation, villagers found a self-manifested idol of Lord Veerabhadra Swamy. 
                  The Kakatiya rulers, learning of this divine manifestation, immediately commissioned 
                  the construction of a grand temple at this blessed spot.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The temple was originally established at a nearby location but was later relocated 
                  to its present site following divine guidance received by the temple priests through 
                  sacred visions and auspicious signs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deity Information */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Mountain className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Lord Veerabhadra Swamy</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lord Veerabhadra is a powerful and fierce manifestation of Lord Shiva, created from 
                a strand of Lord Shiva's matted hair. He symbolizes divine wrath against injustice, 
                protection of devotees, and the triumph of dharma (righteousness) over adharma (evil).
              </p>
              
              <h3 className="font-bold text-xl mt-6 mb-3">Significance</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Represents courage, strength, and protection</li>
                <li>Destroyer of negativity and evil forces</li>
                <li>Grants blessings for overcoming obstacles</li>
                <li>Protector of devotees and upholderof justice</li>
                <li>Symbol of righteous anger and divine intervention</li>
              </ul>

              <h3 className="font-bold text-xl mt-6 mb-3">Blessings</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devotees worship Lord Veerabhadra for protection from enemies, removal of obstacles, 
                success in endeavors, courage in facing challenges, and overall well-being. The deity 
                is particularly revered for granting strength and fearlessness to devotees.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Architecture & Heritage</h2>
            </div>

            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The temple showcases a beautiful fusion of Kakatiya and Chalukyan architectural 
                  styles, characteristic of the period when it was built. The structure features:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Main Features</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Intricate stone carvings</li>
                      <li>Majestic stone pillars</li>
                      <li>Traditional gopuram entrance</li>
                      <li>Sanctum sanctorum (Garbhagriha)</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Special Elements</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Ancient inscriptions</li>
                      <li>Mandapam (prayer hall)</li>
                      <li>Sacred water tank</li>
                      <li>Temple compound walls</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  The temple has been maintained and renovated over centuries while preserving its 
                  original architectural integrity. Recent restoration efforts have ensured that 
                  the temple continues to serve devotees while maintaining its historical and 
                  spiritual significance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
