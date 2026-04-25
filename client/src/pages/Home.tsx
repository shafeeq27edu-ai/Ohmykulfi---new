import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MapPin, Phone, Mail, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Ohmykulfi Website - Heritage Meets Modern Design
 * 
 * Design Philosophy:
 * - Saffron gold (#D4A574) and cream white palette
 * - Playfair Display for elegant headlines, Poppins for body
 * - Asymmetrical layout with generous whitespace
 * - Smooth scroll-triggered animations (400-600ms)
 * - Floating parallax elements and accent lines
 */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-secondary">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-playfair font-bold text-xl text-foreground">Ohmykulfi</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-foreground hover:text-primary transition">Products</a>
            <a href="#franchise" className="text-foreground hover:text-primary transition">Franchise</a>
            <a href="#about" className="text-foreground hover:text-primary transition">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-accent text-white">Inquiry</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="h-1 bg-gradient-to-r from-primary to-accent"
                />
                <h1 className="font-playfair font-bold text-5xl md:text-6xl text-foreground leading-tight">
                  Taste the <span className="text-primary">Craving</span>
                </h1>
              </div>
              <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                Experience the authentic richness of Tamil Nadu's premium kulfi. Crafted with tradition, served with excellence. Join the sweet revolution.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-lg">
                  Explore Franchise <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </motion.div>

            {/* Right Hero Image */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
              className="relative h-96 md:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663597794399/KEJBMqRuTcHM338YUXJPke/hero_kulfi_showcase-98d3GECYUCXTrXTtNBdPxK.webp"
                alt="Premium Kulfi"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Why Ohmykulfi Section */}
      <section id="about" className="py-20 px-4 md:px-0 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Why Choose <span className="text-primary">Ohmykulfi</span>?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Heritage meets innovation in every spoonful
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🌾",
                title: "100% Pure Ingredients",
                description: "Handcrafted with premium milk, natural flavors, and traditional recipes passed down through generations."
              },
              {
                icon: "🏆",
                title: "Award-Winning Quality",
                description: "Recognized across Tamil Nadu for our commitment to excellence and authentic taste that keeps customers coming back."
              },
              {
                icon: "💚",
                title: "Sustainable Practices",
                description: "Eco-friendly packaging and ethical sourcing because we care about our community and the environment."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-secondary/30 to-primary/10 p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-playfair font-bold text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 md:px-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              Our <span className="text-primary">Kulfi Varieties</span>
            </h2>
            <p className="text-lg text-foreground/70">Indulge in our signature flavors crafted to perfection</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663597794399/KEJBMqRuTcHM338YUXJPke/kulfi_varieties_showcase-jhGhRfQz5NmvCyxk9iiigQ.webp"
              alt="Kulfi Varieties"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-5 gap-6 mt-12"
          >
            {[
              { name: "Classic Vanilla", emoji: "🍦" },
              { name: "Rich Chocolate", emoji: "🍫" },
              { name: "Pistachio Green", emoji: "🌿" },
              { name: "Mango Bliss", emoji: "🥭" },
              { name: "Rose Garden", emoji: "🌹" }
            ].map((flavor, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-6 bg-secondary/20 rounded-2xl hover:bg-primary/10 transition-colors cursor-pointer"
              >
                <div className="text-4xl mb-3">{flavor.emoji}</div>
                <p className="font-poppins font-semibold text-foreground">{flavor.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Franchise Opportunity Section */}
      <section id="franchise" className="py-20 px-4 md:px-0 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Franchise Image */}
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663597794399/KEJBMqRuTcHM338YUXJPke/franchise_opportunity_visual-DDUGeLsxLsWbCp3z7PSa2Z.webp"
                alt="Franchise Opportunity"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </motion.div>

            {/* Franchise Content */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 space-y-8"
          >
            <div>
                <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full mb-4 font-semibold">
                  🚀 Franchise Opportunity
                </div>
                <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
                  Join the <span className="text-primary">Kulfi Revolution</span>
                </h2>
                <p className="text-lg text-foreground/70">
                  Start your entrepreneurial journey with Ohmykulfi. Low investment, high returns, and complete support from day one.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Investment", value: "₹3.5 Lakhs", desc: "Complete setup cost" },
                  { title: "ROI Timeline", value: "8-12 Months", desc: "Expected break-even" },
                  { title: "Support", value: "24/7 Assistance", desc: "Training & marketing" },
                  { title: "Territory", value: "Exclusive Rights", desc: "Protected franchise area" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-secondary hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-primary font-bold text-lg">{item.value}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-accent text-white px-8 py-6 text-lg w-full md:w-auto">
                Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-0 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-4">
              What Our <span className="text-primary">Franchisees Say</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Rajesh Kumar",
                location: "Chennai",
                text: "Best decision of my life! Ohmykulfi provided complete support and the business is thriving. Highly recommended!",
                rating: 5
              },
              {
                name: "Priya Sharma",
                location: "Coimbatore",
                text: "The brand value is incredible. Customers love the quality and authenticity. My franchise is doing better than expected.",
                rating: 5
              },
              {
                name: "Arun Nair",
                location: "Villupuram",
                text: "Professional team, great margins, and continuous support. This is a legitimate business opportunity with real potential.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-secondary/30 to-primary/10 p-8 rounded-2xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-secondary pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-0 bg-gradient-to-r from-primary to-accent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white">
              Ready to Start Your Sweet Success?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Join hundreds of successful franchisees and be part of Tamil Nadu's fastest-growing kulfi brand.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
              <Button className="bg-white text-primary hover:bg-secondary px-8 py-6 text-lg">
                Get Started Now
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white py-16 px-4 md:px-0">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="font-bold">K</span>
                </div>
                <span className="font-playfair font-bold text-xl">Ohmykulfi</span>
              </div>
              <p className="text-white/70">Tamil Nadu's premium kulfi brand bringing tradition and taste together.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#products" className="hover:text-primary transition">Products</a></li>
                <li><a href="#franchise" className="hover:text-primary transition">Franchise</a></li>
                <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Contact</h4>
              <div className="space-y-3 text-white/70">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +91 96000 56556
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@ohmykulfi.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2026 Ohmykulfi. All rights reserved. | Crafted with love for kulfi lovers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
