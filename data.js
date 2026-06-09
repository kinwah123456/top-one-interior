// Top One Interior & Curtain Design - Website Content Configuration
// Edit this file to update the website's text, images, services, and contact information.

const SITE_DATA = {
  // General & Contact Info
  companyName: "Top One Interior",
  companySubName: "Curtain & Interior Design",
  whatsappNumber: "60123456789", // Malaysian phone format (e.g. 60123456789) without '+' or spaces
  whatsappMessage: "Hi Top One Interior, I would like to get a free consultation and quote for my home/office.",
  phone: "+60 12-345 6789",
  email: "info@toponeinterior.com.my",
  address: "12, Jalan Telawi 5, Bangsar, 59100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia",
  mapUrl: "https://maps.google.com", // Google Map link for customer navigation
  businessHours: "Mon - Sat: 9:00 AM - 6:00 PM (Sunday Closed)",
  
  // Hero Section
  hero: {
    badge: "Premium Quality & Bespoke Design",
    title: "Transforming Spaces with Luxury Curtains & Interiors",
    description: "Malaysia's premier choice for bespoke curtains, blinds, and high-end interior solutions. We merge elegance with function to bring your dream spaces to life.",
    ctaPrimary: "Inquire via WhatsApp",
    ctaSecondary: "View Portfolio",
    heroImage: "images/hero-bg.jpg" // Will be generated
  },

  // About Section
  about: {
    badge: "Our Story",
    title: "Crafting Elegance for Malaysian Homes Since 2015",
    subtitle: "We believe every space has a story waiting to be told.",
    description1: "Top One Interior is a full-service curtain customization and interior decoration company based in Kuala Lumpur. We specialize in transforming residential and commercial spaces with tailor-made window treatments, custom furnishings, and modern design principles.",
    description2: "From measurement to installation, our dedicated team ensures absolute precision, premium material sourcing, and unmatched craftsmanship. We serve clients throughout Kuala Lumpur, Selangor, and surrounding areas.",
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "1,200+", label: "Happy Clients" },
      { number: "3,500+", label: "Windows Decorated" },
      { number: "100%", label: "Satisfaction Rate" }
    ]
  },

  // Services Section
  servicesSection: {
    badge: "What We Do",
    title: "Our Specialized Design Services"
  },
  services: [
    {
      id: "curtains",
      title: "Bespoke Curtain Design",
      description: "Tailor-made luxury drapery, double-pleat curtains, eyelets, and motorized smart curtain systems selected from premium local and imported fabrics.",
      icon: "window-curtain", // Handled by SVG library in script.js
      features: ["Premium fabric selection", "Precision measurement & installation", "Motorized curtain integration", "Blackout & sheer options"]
    },
    {
      id: "blinds",
      title: "Premium Window Blinds",
      description: "Functional and stylish window shades including roller blinds, Venetian blinds, Roman blinds, and outdoor zip screens suited for homes and offices.",
      icon: "blinds",
      features: ["Korean wooden blinds", "Roller & zebra blinds", "Roman shades", "UV protection designs"]
    },
    {
      id: "interior",
      title: "Interior Design & Space Styling",
      description: "Comprehensive space planning, color consultation, customized built-in cabinets, and soft furnishing layouts for residential and commercial spaces.",
      icon: "home-design",
      features: ["3D visualization layout", "Color and material palettes", "Custom furniture sourcing", "Turnkey renovation planning"]
    },
    {
      id: "wallpaper",
      title: "Wallpapers & Accent Walls",
      description: "A wide variety of durable Korean/European wallpapers, feature walls, and custom wainscoting installations to add rich textures to your walls.",
      icon: "wall",
      features: ["Korean fabric wallpapers", "Custom wall panels", "Classic wainscoting", "Seamless installation"]
    }
  ],

  // Portfolio Section
  portfolioSection: {
    badge: "Our Projects",
    title: "Explore Our Design Masterpieces",
    description: "Browse through our recently completed curtain installations and interior transformations across Malaysia."
  },
  portfolioCategories: [
    { id: "all", label: "All Projects" },
    { id: "curtains", label: "Curtains & Blinds" },
    { id: "residential", label: "Residential Interiors" },
    { id: "commercial", label: "Commercial Work" }
  ],
  portfolioItems: [
    {
      id: 1,
      category: "curtains",
      title: "Luxury Living Room Sheer & Velvet Curtains",
      location: "Bangsar, KL",
      image: "images/portfolio-curtains-1.jpg",
      description: "Double-track floor-to-ceiling sheer and heavy velvet curtains for a grand living area."
    },
    {
      id: 2,
      category: "residential",
      title: "Modern Minimalist Living Room Renovation",
      location: "Damansara Heights, KL",
      image: "images/portfolio-interior-1.jpg",
      description: "Complete interior styling featuring bespoke built-in media console and warm lighting accents."
    },
    {
      id: 3,
      category: "curtains",
      title: "Smart Motorized Roller Blinds",
      location: "Mont Kiara, KL",
      image: "images/portfolio-curtains-2.jpg",
      description: "Automated high-performance blackout roller blinds integrated with smart home system."
    },
    {
      id: 4,
      category: "residential",
      title: "Luxurious Master Bedroom Styling",
      location: "Desa ParkCity, KL",
      image: "images/portfolio-interior-2.jpg",
      description: "Cozy and elegant master bedroom setup with custom headboard, bedside curtains, and warm fabric paneling."
    },
    {
      id: 5,
      category: "commercial",
      title: "Contemporary Corporate Boardroom",
      location: "KL CC",
      image: "images/portfolio-commercial-1.jpg",
      description: "Professional interior design featuring custom acoustics, sleek conference furniture, and vertical blinds."
    },
    {
      id: 6,
      category: "curtains",
      title: "Classic Roman Shades & Drapes",
      location: "Subang Jaya, Selangor",
      image: "images/portfolio-curtains-3.jpg",
      description: "Elegant floral patterns and clean Roman fold shades for a classic country kitchen look."
    }
  ],

  // Testimonials Section
  testimonialsSection: {
    badge: "Client Testimonials",
    title: "What Our Clients Say About Us"
  },
  testimonials: [
    {
      name: "Datin Sarah Lim",
      location: "Damansara, KL",
      rating: 5,
      text: "The customized curtains they designed for my living room are absolutely stunning. The material feels premium, and their installers were extremely professional and precise. High recommended!"
    },
    {
      name: "Encik Farhan Harun",
      location: "Shah Alam, Selangor",
      rating: 5,
      text: "Excellent service from the initial measurement session to the final curtain hook placement. Their design suggestions saved us a lot of space, and the motorized blinds work flawlessly."
    },
    {
      name: "Marcus Tan",
      location: "Petaling Jaya, Selangor",
      rating: 5,
      text: "Top One Interior completely transformed our showroom in PJ. They handled the wallpaper installation, custom partition walls, and lighting. The design matches our brand perfectly."
    }
  ]
};
