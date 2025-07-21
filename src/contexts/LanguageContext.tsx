import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    storeLocator: 'Store Locator',
    services: 'Services',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    
    // Common
    search: 'Search products...',
    whatsapp: 'WhatsApp',
    callUs: 'Call Us',
    getDirections: 'Get Directions',
    readMore: 'Read More',
    subscribe: 'Subscribe',
    
    // Home page
    heroTitle: "Tanzania's Premier Electronics Store",
    heroSubtitle: 'Discover the latest technology at unbeatable prices. From smartphones to laptops, we have everything you need.',
    
    // Footer
    companyDescription: "Tanzania's premier electronics retailer, offering the latest technology and exceptional customer service since 2015.",
    quickLinks: 'Quick Links',
    ourStores: 'Our Stores',
    contactUs: 'Contact Us',
    
    // About page
    aboutTitle: 'About Microspace',
    aboutSubtitle: 'Since 2015, Microspace has been Tanzania\'s trusted partner in technology, providing cutting-edge electronics and exceptional service to customers across the country.',
    
    // Contact page
    contactTitle: 'Contact Us',
    contactSubtitle: 'Get in touch with our team for any inquiries or support',
    
    // FAQ page
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Find answers to common questions about our products and services',
    
    // Services page
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive sales and technology support services tailored to your needs.',
    
    // Products page
    productsTitle: 'Our Product Categories',
    productsSubtitle: 'Welcome to explore the wide range of products available at our Microspace stores.',
    
    // Store Locator page
    storeLocatorTitle: 'Microspace Store Locator',
    storeLocatorSubtitle: 'Automatically finds your nearest Microspace outlet, shows it on a map, and lets you get turn‑by‑turn directions with one click.',
  },
  sw: {
    // Navigation
    home: 'Nyumbani',
    products: 'Bidhaa',
    storeLocator: 'Mahali pa Duka',
    services: 'Huduma',
    about: 'Kuhusu',
    faq: 'Maswali',
    contact: 'Mawasiliano',
    
    // Common
    search: 'Tafuta bidhaa...',
    whatsapp: 'WhatsApp',
    callUs: 'Piga Simu',
    getDirections: 'Pata Mwelekeo',
    readMore: 'Soma Zaidi',
    subscribe: 'Jisajili',
    
    // Home page
    heroTitle: 'Duka Kuu la Elektroniki Tanzania',
    heroSubtitle: 'Gundua teknolojia ya hivi karibuni kwa bei za ushindani. Kutoka simu za mkononi hadi kompyuta za mkononi, tuna kila kitu unachohitaji.',
    
    // Footer
    companyDescription: 'Muuzaji mkuu wa elektroniki Tanzania, akitoa teknolojia ya hivi karibuni na huduma bora za wateja tangu 2015.',
    quickLinks: 'Viungo vya Haraka',
    ourStores: 'Maduka Yetu',
    contactUs: 'Wasiliana Nasi',
    
    // About page
    aboutTitle: 'Kuhusu Microspace',
    aboutSubtitle: 'Tangu 2015, Microspace imekuwa mshirika wa kuaminika wa Tanzania katika teknolojia, ikitoa elektroniki za kisasa na huduma bora kwa wateja kote nchini.',
    
    // Contact page
    contactTitle: 'Wasiliana Nasi',
    contactSubtitle: 'Wasiliana na timu yetu kwa maswali yoyote au msaada',
    
    // FAQ page
    faqTitle: 'Maswali Yanayoulizwa Mara kwa Mara',
    faqSubtitle: 'Pata majibu ya maswali ya kawaida kuhusu bidhaa na huduma zetu',
    
    // Services page
    servicesTitle: 'Huduma Zetu',
    servicesSubtitle: 'Huduma kamili za mauzo na msaada wa teknolojia zilizobinafsishwa kulingana na mahitaji yako.',
    
    // Products page
    productsTitle: 'Aina za Bidhaa Zetu',
    productsSubtitle: 'Karibu kuchunguza aina mbalimbali za bidhaa zinazopatikana katika maduka yetu ya Microspace.',
    
    // Store Locator page
    storeLocatorTitle: 'Kitafuta Duka la Microspace',
    storeLocatorSubtitle: 'Kinapata kiotomatiki duka la Microspace lililokaribuni nawe, kinalionyesha kwenye ramani, na kinakuruhusu kupata mwelekeo wa hatua kwa hatua kwa kubofya mara moja.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'sw' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};