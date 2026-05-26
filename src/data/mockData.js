export const properties = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    location: "Beverly Hills, CA",
    price: 4500000,
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: "Villa",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    rating: 4.9,
    agent: {
      name: "Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Skylight Penthouse",
    location: "Manhattan, NY",
    price: 8500000,
    beds: 3,
    baths: 3,
    sqft: 2800,
    type: "Penthouse",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    rating: 4.8,
    agent: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Eco-Friendly Forest Retreat",
    location: "Aspen, CO",
    price: 2200000,
    beds: 4,
    baths: 3,
    sqft: 3500,
    type: "Cabin",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    rating: 4.7,
    agent: {
      name: "Emma Wilson",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    },
    featured: true,
  },
  {
    id: 4,
    title: "Oceanfront Contemporary",
    location: "Malibu, CA",
    price: 12000000,
    beds: 6,
    baths: 7,
    sqft: 7500,
    type: "Mansion",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
    rating: 5.0,
    agent: {
      name: "David Ross",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    },
    featured: false,
  },
  {
    id: 5,
    title: "Industrial Loft",
    location: "Chicago, IL",
    price: 950000,
    beds: 2,
    baths: 2,
    sqft: 1800,
    type: "Loft",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200",
    rating: 4.6,
    agent: {
      name: "Sarah Jenkins",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    featured: false,
  },
  {
    id: 6,
    title: "Mediterranean Estate",
    location: "Miami, FL",
    price: 5800000,
    beds: 5,
    baths: 5,
    sqft: 5200,
    type: "Estate",
    status: "For Rent",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    rating: 4.9,
    agent: {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    },
    featured: false,
  }
];

export const agents = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Luxury Property Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    rating: 4.9,
    listings: 45,
    experience: "10+ Years",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Commercial Real Estate",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    rating: 4.8,
    listings: 32,
    experience: "8+ Years",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Residential Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    rating: 4.7,
    listings: 28,
    experience: "6+ Years",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    name: "David Ross",
    role: "Beachfront Expert",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    rating: 5.0,
    listings: 52,
    experience: "15+ Years",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Homeowner",
    text: "Finding my dream home was so easy with this platform. The 3D tours and detailed info really helped me make a decision.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    rating: 5
  },
  {
    id: 2,
    name: "Linda Garcia",
    role: "Investor",
    text: "The analytics and market insights provided here are top-notch. I've successfully closed three deals this year already.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
    rating: 5
  },
  {
    id: 3,
    name: "Mark Stevens",
    role: "First-time Buyer",
    text: "As a first-time buyer, I was nervous, but the support and guidance I found through the agents here were amazing.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    rating: 4
  }
];
