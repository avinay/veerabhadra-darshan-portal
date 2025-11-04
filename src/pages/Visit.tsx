import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, Bus, Train, Plane, Hotel, Utensils, Info } from "lucide-react";

const Visit = () => {
  const accommodations = [
    { name: "Temple Guest House", price: "₹500-800/day", type: "Temple managed", contact: "+91 94931 49515" },
    { name: "Sai Residency", price: "₹800-1,200/day", type: "Budget hotel", distance: "2 km from temple" },
    { name: "Hotel Vaibhav", price: "₹1,000-1,500/day", type: "Comfortable stay", distance: "3 km from temple" },
    { name: "Private Lodges", price: "₹350-600/day", type: "Basic rooms", distance: "Walking distance" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Visit</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Complete guide to reach and experience the divine blessings
          </p>
        </div>
      </section>

      {/* Location */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <MapPin className="h-6 w-6 text-primary" />
              Temple Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                Bonthapally Veerabhadra Swamy Temple<br />
                Bonthapally Village, Patancheru Mandal<br />
                Medak District, Telangana - 502319
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">GPS Coordinates</h3>
              <p className="text-muted-foreground">17.5384° N, 78.2644° E</p>
            </div>
            <div className="pt-4">
              <a
                href="https://maps.google.com/?q=17.5384,78.2644"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* How to Reach */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Reach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* By Personal Vehicle */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  By Car
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">From Hyderabad:</p>
                  <p>45 km via NH 65, approximately 1 hour drive</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">From Patancheru:</p>
                  <p>12 km, 20 minutes drive</p>
                </div>
              </CardContent>
            </Card>

            {/* By Bus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5 text-primary" />
                  By Bus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">APSRTC Services:</p>
                  <p>Regular buses from Secunderabad and Patancheru</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Frequency:</p>
                  <p>Every 30 minutes during daytime</p>
                </div>
              </CardContent>
            </Card>

            {/* By Train */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Train className="h-5 w-5 text-primary" />
                  By Train
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Nearest Station:</p>
                  <p>Patancheru Railway Station (12 km)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Major Station:</p>
                  <p>Secunderabad Junction (45 km)</p>
                </div>
              </CardContent>
            </Card>

            {/* By Air */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5 text-primary" />
                  By Air
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Nearest Airport:</p>
                  <p>Rajiv Gandhi International Airport (60 km)</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Travel Time:</p>
                  <p>1.5 hours by taxi</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Accommodation Options</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {accommodations.map((place, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Hotel className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{place.name}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="font-semibold text-primary">{place.price}</p>
                      <p>{place.type}</p>
                      {place.distance && <p>{place.distance}</p>}
                      {place.contact && (
                        <a href={`tel:${place.contact}`} className="text-primary hover:underline block">
                          {place.contact}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Temple Facilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Dining
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Annadanam (free meals) during festivals</p>
                <p>• Temple canteen with South Indian food</p>
                <p>• Prasadam distribution</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Parking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Large parking area available</p>
                <p>• Separate parking for cars and buses</p>
                <p>• Free parking facility</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Amenities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>• Drinking water facilities</p>
                <p>• Restrooms for devotees</p>
                <p>• Wheelchair accessibility</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Info className="h-6 w-6 text-primary" />
              Important Information for Visitors
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Traditional dress code is recommended for temple entry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Photography may be restricted in certain areas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Maintain silence and decorum within the temple premises</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Remove footwear before entering the main temple</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>During festivals, expect larger crowds and plan accordingly</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Visit;
