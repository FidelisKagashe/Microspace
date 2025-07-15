import { Users, Award, Shield, Heart, Target, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years in Business', value: '9+' },
    { label: 'Happy Customers', value: '50K+' },
    { label: 'Products Sold', value: '100K+' },
    { label: 'Store Locations', value: '3' },
  ];

  const team = [
    {
      name: 'John Mwangi',
      position: 'Store Manager - Dar es Salaam',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'With over 8 years of experience in electronics retail, John leads our flagship store in Dar es Salaam.'
    },
    {
      name: 'Sarah Ahmed',
      position: 'Store Manager - Dodoma',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Sarah brings technical expertise and customer service excellence to our Dodoma location.'
    },
    {
      name: 'Michael Joseph',
      position: 'Store Manager - Mwanza',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Michael has been with Microspace for 6 years and is known for his exceptional product knowledge.'
    },
    {
      name: 'Grace Mwalimu',
      position: 'Technical Support Lead',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Grace heads our technical support team and oversees repair services across all locations.'
    }
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: 'Quality Assurance',
      description: 'We only sell authentic products from trusted manufacturers with full warranty support.'
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.'
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in product quality, customer service, and technical support.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community',
      description: 'We are committed to serving the Tanzanian community and contributing to digital advancement.'
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Microspace</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Since 2015, Microspace has been Tanzania's trusted partner in technology, providing cutting-edge electronics and exceptional service to customers across the country.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Microspace Store"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Microspace was founded in 2015 with a simple mission: to make the latest technology accessible to everyone in Tanzania. What started as a small electronics shop in Dar es Salaam has grown into a trusted network of stores serving customers across the country.
                </p>
                <p>
                  Our journey began when our founder recognized the need for a reliable electronics retailer that could provide genuine products, competitive prices, and exceptional customer service. Today, we continue to uphold these values while expanding our reach and improving our services.
                </p>
                <p>
                  With locations in Dar es Salaam, Dodoma, and Mwanza, we've helped thousands of customers find the perfect technology solutions for their personal and professional needs. From students buying their first laptop to businesses upgrading their IT infrastructure, we're here to help.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Microspace History"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
              </div>
              <p className="text-blue-800">
                To provide Tanzania with access to the latest technology through quality products, competitive pricing, and exceptional customer service. We aim to be the bridge between global innovation and local needs.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Our Vision</h3>
              </div>
              <p className="text-green-800">
                To become East Africa's leading electronics retailer, known for innovation, reliability, and community impact. We envision a future where technology empowers every Tanzanian to achieve their goals.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Store Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dar es Salaam Store"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Dar es Salaam</h3>
                <p className="text-white/90 text-sm">Our flagship store</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Dodoma Store"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Dodoma</h3>
                <p className="text-white/90 text-sm">Serving the capital</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mwanza Store"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold text-lg">Mwanza</h3>
                <p className="text-white/90 text-sm">Lake zone headquarters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-400 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Microspace?</h2>
          <p className="text-xl mb-6 text-blue-100">
            Visit one of our stores today and discover why thousands of customers trust us with their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/stores"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find a Store
            </a>
            <a
              href="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;