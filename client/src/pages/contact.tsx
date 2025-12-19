import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about our produce, want to place a bulk order, or just want to say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm h-full">
                <h3 className="text-2xl font-bold font-heading mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-muted-foreground mb-2">Mon-Sat from 8am to 6pm</p>
                      <a href="tel:+254712700008" className="text-primary font-medium hover:underline text-lg">
                        +254 712 700 008
                      </a>
                    </div>
                  </div>



                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                      <p className="text-muted-foreground">Monday - Saturday</p>
                      <p className="text-foreground font-medium">8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message/Action Card */}
            <div className="lg:col-span-2">
              <div className="bg-muted/30 p-8 md:p-12 rounded-3xl border border-border h-full flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center text-white mb-6 shadow-lg animate-bounce">
                  <MessageCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">Fastest Way to Order?</h3>
                <p className="text-lg text-muted-foreground max-w-lg mb-8">
                  The quickest way to reach us and place an order is directly through WhatsApp. We are responsive and ready to take your fresh produce order.
                </p>
                <a 
                  href="https://wa.me/254712700008" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-bold text-xl transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-3"
                >
                  Message on WhatsApp
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ContactFooter />
    </div>
  );
}
