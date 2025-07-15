import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const categories = [
    'All',
    'Orders & Payments',
    'Shipping & Delivery',
    'Returns & Warranty',
    'Technical Support',
    'Account & Services'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs = [
    {
      id: 1,
      category: 'Orders & Payments',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, mobile money (M-Pesa, Tigo Pesa, Airtel Money), bank transfers, and major credit/debit cards. Payment can be made in-store or through our WhatsApp Business API for online orders.'
    },
    {
      id: 2,
      category: 'Shipping & Delivery',
      question: 'Do you offer delivery services?',
      answer: 'Yes, we offer free delivery within city limits for orders over 500,000 TZS. For orders below this amount, standard delivery charges apply. We also offer express delivery for urgent orders.'
    },
    {
      id: 3,
      category: 'Returns & Warranty',
      question: 'What is your return policy?',
      answer: 'We offer a 14-day return policy for unopened products in original packaging. Electronics can be returned within 7 days if defective. All returns must include original receipt and packaging.'
    },
    {
      id: 4,
      category: 'Technical Support',
      question: 'Do you provide technical support?',
      answer: 'Yes, we have a dedicated technical support team available at all our stores. We offer device setup, troubleshooting, and repair services. You can also reach us via WhatsApp for quick technical assistance.'
    },
    {
      id: 5,
      category: 'Returns & Warranty',
      question: 'How long is the warranty coverage?',
      answer: 'Warranty periods vary by product and manufacturer. Typically: smartphones (1-2 years), laptops (1-3 years), accessories (6-12 months). We provide comprehensive warranty support and can assist with claims.'
    },
    {
      id: 6,
      category: 'Orders & Payments',
      question: 'Can I reserve a product before purchasing?',
      answer: 'Yes, you can reserve products for up to 24 hours by calling our stores or messaging us on WhatsApp. A small deposit may be required for high-value items.'
    },
    {
      id: 7,
      category: 'Shipping & Delivery',
      question: 'How long does delivery take?',
      answer: 'Standard delivery within Dar es Salaam, Dodoma, and Mwanza takes 1-2 business days. Express delivery is available for same-day delivery. Inter-city delivery may take 2-5 business days.'
    },
    {
      id: 8,
      category: 'Technical Support',
      question: 'Do you repair devices not purchased from TechHub?',
      answer: 'Yes, we provide repair services for all brands of smartphones, laptops, and tablets, regardless of where they were purchased. Diagnostic fees apply for non-warranty repairs.'
    },
    {
      id: 9,
      category: 'Account & Services',
      question: 'How can I track my order?',
      answer: 'Once your order is confirmed, you will receive tracking information via SMS or WhatsApp. You can also call our stores directly for order status updates.'
    },
    {
      id: 10,
      category: 'Orders & Payments',
      question: 'Are your products genuine?',
      answer: 'Yes, all our products are 100% authentic and sourced directly from authorized distributors. We provide official warranty cards and certificates of authenticity with every purchase.'
    },
    {
      id: 11,
      category: 'Account & Services',
      question: 'Do you offer bulk discounts for businesses?',
      answer: 'Yes, we offer special pricing for bulk orders and corporate customers. Contact our sales team for customized quotations and business account setup.'
    },
    {
      id: 12,
      category: 'Technical Support',
      question: 'What if my device stops working after warranty expires?',
      answer: 'We offer post-warranty repair services at competitive rates. Our technicians can diagnose issues and provide repair estimates. We also offer extended warranty plans for select products.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <div className="ml-4">
                    {openItems[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              {openItems[faq.id] && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No FAQs found matching your search criteria.</p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Still have questions?</h2>
          <p className="text-blue-700 mb-6">
            Can't find what you're looking for? Our support team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/255123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              WhatsApp Support
            </a>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+255123456789"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;