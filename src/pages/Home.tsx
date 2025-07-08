
import { ArrowRight, CheckCircle, Globe, Shield, Truck, Users, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Own Manufacturing Unit",
      description: "State-of-the-art processing facility with quality control"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Premium Quality Products",
      description: "Certified and tested for international standards"
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Fast & Reliable Shipping",
      description: "Timely delivery with shipment tracking"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Global Export Experience",
      description: "Serving Middle East, Africa, Europe & Vietnam"
    }
  ];

  const products = [
    {
      title: "Coriander Seeds",
      description: "Premium Eagle & Scooter grades",
      image: "/placeholder.svg",
      link: "/products"
    },
    {
      title: "Cumin Seeds",
      description: "Europe quality specifications",
      image: "/placeholder.svg",
      link: "/products"
    },
    {
      title: "Cold Pressed Oils",
      description: "Wood-pressed groundnut & coconut oils",
      image: "/placeholder.svg",
      link: "/products"
    },
    {
      title: "Groundnut Kernels",
      description: "Java & Bold varieties available",
      image: "/placeholder.svg",
      link: "/products"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      country: "UAE",
      rating: 5,
      text: "Excellent quality coriander seeds. Very professional service and timely delivery."
    },
    {
      name: "Nguyen Tran",
      country: "Vietnam",
      rating: 5,
      text: "Great experience working with Shree Hari International. Quality products and fair pricing."
    },
    {
      name: "John Okafor",
      country: "Nigeria",
      rating: 5,
      text: "Reliable supplier for our spice requirements. Highly recommended for African importers."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium <span className="text-green-400">Agro Exports</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            From Gujarat's Fields to Global Markets - Your Trusted Partner for Quality Spices, Seeds & Oils
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              to="/products"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2"
            >
              <span>View Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Shree Hari International</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a leading exporter and manufacturer of premium quality agro commodities, spices, and cold-pressed oils. 
            With our own manufacturing unit in Gujarat, we ensure consistent quality and timely delivery to global markets.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Trusted by importers worldwide for quality and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Premium quality agro commodities for global markets</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-green-600 text-6xl font-bold">
                    {product.title.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to={product.link}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-2"
                  >
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl font-bold">MP</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Meet Nileshbhai Piprotar</h3>
              <p className="text-green-600 font-semibold mb-6">Founder & CEO</p>
              <div className="flex justify-center mb-6">
                <Quote className="h-8 w-8 text-green-600" />
              </div>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                "Our commitment to quality and customer satisfaction has made us a trusted partner for importers worldwide. 
                We believe in building long-term relationships through transparency and excellence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by importers across the globe</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-green-600">{testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Import Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get premium quality products with competitive pricing and reliable service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Request Quote
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
