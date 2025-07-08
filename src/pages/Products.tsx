
import { ArrowRight, Package, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const productCategories = [
    {
      title: "Agro Commodities",
      description: "Premium quality seeds and commodities sourced directly from farms",
      products: [
        {
          name: "Coriander Seeds",
          grades: ["Eagle Grade", "Scooter Grade"],
          moq: "1 MT",
          countries: "Middle East, Europe, Africa",
          description: "Premium quality coriander seeds with excellent aroma and taste"
        },
        {
          name: "Cumin Seeds",
          grades: ["Europe Quality", "Premium Grade"],
          moq: "1 MT",
          countries: "Europe, Middle East, Vietnam",
          description: "Superior quality cumin seeds meeting international standards"
        },
        {
          name: "Groundnut Kernels",
          grades: ["Java Quality", "Bold Size"],
          moq: "5 MT",
          countries: "Middle East, Africa, Vietnam",
          description: "Fresh and nutritious groundnut kernels with excellent shelf life"
        },
        {
          name: "Tender Coconuts",
          grades: ["Fresh Export Quality"],
          moq: "1 Container",
          countries: "Middle East, Europe",
          description: "Fresh tender coconuts packed with natural goodness"
        }
      ]
    },
    {
      title: "Spices (Whole & Powdered)",
      description: "Aromatic spices with authentic flavors and natural goodness",
      products: [
        {
          name: "Turmeric",
          grades: ["Fingers", "Powder", "Curcumin Rich"],
          moq: "1 MT",
          countries: "Global Export",
          description: "High curcumin content turmeric with vibrant color and aroma"
        },
        {
          name: "Red Chilli",
          grades: ["Teja", "Sannam", "Powder"],
          moq: "1 MT",
          countries: "Middle East, Africa, Europe",
          description: "Premium quality red chillies with optimal heat and color"
        },
        {
          name: "Dry Ginger",
          grades: ["Premium Whole", "Powder"],
          moq: "500 KG",
          countries: "Global Export",
          description: "Sun-dried ginger with intense flavor and medicinal properties"
        },
        {
          name: "Fenugreek Seeds",
          grades: ["Machine Clean", "Sortex Clean"],
          moq: "1 MT",
          countries: "Middle East, Europe",
          description: "High-quality fenugreek seeds with excellent germination rate"
        },
        {
          name: "Fennel Seeds",
          grades: ["Premium Quality", "Export Grade"],
          moq: "1 MT",
          countries: "Global Export",
          description: "Sweet and aromatic fennel seeds with natural freshness"
        },
        {
          name: "Mustard Seeds",
          grades: ["Black", "Yellow", "Brown"],
          moq: "1 MT",
          countries: "Europe, Middle East",
          description: "Premium mustard seeds with high oil content"
        }
      ]
    },
    {
      title: "Cold Pressed Oils",
      description: "Traditional wood-pressed oils retaining natural nutrients and flavor",
      products: [
        {
          name: "Groundnut Oil",
          grades: ["Wood Pressed", "Filtered"],
          moq: "500 Liters",
          countries: "Global Export",
          description: "Traditional wood-pressed groundnut oil with natural aroma"
        },
        {
          name: "Coconut Oil",
          grades: ["Virgin", "Cold Pressed"],
          moq: "500 Liters",
          countries: "Middle East, Europe, Africa",
          description: "Pure virgin coconut oil with natural coconut fragrance"
        },
        {
          name: "Sesame Oil",
          grades: ["Cold Pressed", "Premium"],
          moq: "500 Liters",
          countries: "Global Export",
          description: "Nutrient-rich sesame oil with authentic taste"
        },
        {
          name: "Mustard Oil",
          grades: ["Cold Pressed", "Filtered"],
          moq: "500 Liters",
          countries: "Europe, Middle East",
          description: "Traditional mustard oil with natural pungency"
        },
        {
          name: "Castor Oil",
          grades: ["Commercial", "Pharmaceutical"],
          moq: "1000 Liters",
          countries: "Global Export",
          description: "High-quality castor oil for various industrial applications"
        }
      ]
    }
  ];

  const features = [
    "Customized packaging as per buyer requirements",
    "Private labeling options available",
    "Bulk and retail packaging both available",
    "Quality certificates with every shipment",
    "Competitive pricing for bulk orders",
    "Sample available on request"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Premium quality agro commodities, spices, and cold-pressed oils for global markets
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Our Products Stand Out</h2>
          <p className="text-lg text-gray-600 mb-8">
            We specialize in sourcing, processing, and exporting premium quality agricultural products from Gujarat, India. 
            Our in-house facilities ensure consistent quality, while our direct farm connections guarantee freshness and authenticity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, productIndex) => (
                <div key={productIndex} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <Package className="h-16 w-16 text-green-600" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-700">Available Grades:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {product.grades.map((grade, gradeIndex) => (
                            <span key={gradeIndex} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">MOQ: {product.moq}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{product.countries}</span>
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your import needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Place Your Order?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for competitive pricing, samples, and detailed product specifications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Quote Now
            </Link>
            <a
              href="mailto:shreehariexpoter11@gmail.com"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
