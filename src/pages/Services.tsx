import { ShoppingCart, Phone, MessageSquare, Download, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
      title: 'Product Sales',
      description: 'High-quality electronics and accessories available for purchase',
      features: [
        'Laptops, smartphones, and tablets',
        'Genuine accessories and peripherals',
        'Competitive pricing and discounts',
        'Flexible payment options',
        'Warranty on all products'
      ],
      pricing: 'Starting from 100,000 TZS'
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: 'Technology Support',
      description: 'Expert assistance for setup, troubleshooting, and optimization',
      features: [
        'Software installation',
        'Network setup and configuration',
        'Performance tuning',
        'Virus and malware removal',
        'Data backup and recovery'
      ],
      pricing: 'Consultation from 30,000 TZS'
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: 'Express Consultation',
      description: 'Quick support sessions for urgent needs',
      features: [
        'Same-day appointments',
        'Priority queue',
        'Remote or in-store sessions',
        'Follow-up support',
        '24/7 availability'
      ],
      pricing: 'Additional 20% surcharge'
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive sales and technology support services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-bold ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="border-t pt-4">
                <p className="text-blue-600 font-semibold">{service.pricing}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price List Download */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Complete Product Catalog</h2>
          <p className="text-blue-700 mb-6">
            Download our latest product catalog with pricing and specifications
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
            <Download className="h-5 w-5 mr-2" />
            Download Catalog (PDF)
          </button>
        </div>

        {/* Contact for Support */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak with our sales and support team</p>
              <a href="tel:+255123456789" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                +255 123 456 789
              </a>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick chat for inquiries</p>
              <a href="https://wa.me/255123456789" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Chat Now
              </a>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Visit Store</h3>
              <p className="text-gray-600 mb-4">Explore products in person</p>
              <a href="/stores" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
                Find Stores
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
