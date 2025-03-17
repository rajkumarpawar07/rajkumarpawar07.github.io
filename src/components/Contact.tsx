
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef} 
      className="py-24 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
            Get in Touch
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mb-12">
            Have a project in mind or want to discuss a potential collaboration?
            Feel free to reach out. I'm always open to new opportunities and challenges.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="anime-input w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="anime-input w-full"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="anime-input w-full"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="anime-button w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent shrink-0 mt-1">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Email Address</p>
                      <a 
                        href="mailto:hello@example.com" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        hello@example.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent shrink-0 mt-1">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Phone Number</p>
                      <a 
                        href="tel:+11234567890" 
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent shrink-0 mt-1">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">
                        San Francisco, California
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 p-6 rounded-lg bg-accent/5 border border-accent/10">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 text-accent shrink-0 mt-1">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Quick Response</h4>
                    <p className="text-muted-foreground text-sm">
                      I typically respond to all inquiries within 24 hours. Looking forward to hearing from you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
