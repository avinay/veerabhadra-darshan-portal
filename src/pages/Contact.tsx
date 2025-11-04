import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to assist you with any queries or support
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about poojas, temple timings, or any other information? 
                Feel free to reach out to us through any of the following channels.
              </p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      Bonthapally Veerabhadra Swamy Temple<br />
                      Bonthapally Village, Patancheru Mandal<br />
                      Medak District, Telangana - 502319
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <a href="tel:+919493149515" className="text-muted-foreground hover:text-primary block">
                        +91 94931 49515
                      </a>
                      <a href="tel:+919493149516" className="text-muted-foreground hover:text-primary block">
                        +91 94931 49516
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:info@bonthapally-temple.org" className="text-muted-foreground hover:text-primary">
                      info@bonthapally-temple.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Daily: 5:00 AM - 8:30 PM<br />
                      All days open
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="What is this regarding?" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your query or message..." 
                    rows={5}
                    required 
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donations Section */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Support the Temple</h2>
            </div>
            
            <p className="text-muted-foreground text-lg mb-8">
              Your generous donations help us maintain the temple, conduct daily poojas, 
              organize festivals, and provide annadanam to devotees.
            </p>

            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl mb-4">Donation Methods</h3>
                
                <div className="space-y-4 text-left">
                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Bank Transfer</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>Bank:</strong> State Bank of India</p>
                      <p><strong>Account Name:</strong> Bonthapally Veerabhadra Swamy Temple</p>
                      <p><strong>Account Number:</strong> [To be provided]</p>
                      <p><strong>IFSC Code:</strong> [To be provided]</p>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">In-Person Donations</h4>
                    <p className="text-sm text-muted-foreground">
                      Visit the temple office during darshan hours to make cash donations. 
                      Receipts are provided for all donations.
                    </p>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <h4 className="font-semibold mb-2">Tax Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      Donations to the temple are eligible for tax exemption under 80G. 
                      Official receipts will be provided for tax purposes.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button size="lg">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact for Donation Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
