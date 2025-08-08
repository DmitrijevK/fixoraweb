import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useTranslation } from "@/contexts/TranslationContext";
import {
  Zap,
  ArrowRight,
  CheckCircle,
  X,
  Phone,
  Settings,
  Wrench,
  Shield,
  Headphones,
  Clock,
  Users,
  Globe,
  Star,
  Server,
  Network,
  Code,
  Music2,
  Linkedin
} from "lucide-react";

export default function Pricing() {
  const { t } = useTranslation();
  const plans = [
    {
      name: t('pricing.plans.starter.name'),
      price: "799",
      period: t('pricing.plans.starter.period'),
      description: t('pricing.plans.starter.description'),
      popular: false,
      features: [
        ...[0,1,2,3,4,5,6,7,8].map(i => ({ name: t(`pricing.plans.starter.features.${i}`), included: true })),
        ...[9,10,11,12,13,14].map(i => ({ name: t(`pricing.plans.starter.features.${i}`), included: false }))
      ]
    },
    {
      name: t('pricing.plans.professional.name'),
      price: "1,999",
      period: t('pricing.plans.professional.period'),
      description: t('pricing.plans.professional.description'),
      popular: true,
      features: [
        ...[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(i => ({ name: t(`pricing.plans.professional.features.${i}`), included: true })),
        { name: t('pricing.plans.professional.features.14'), included: false }
      ]
    },
    {
      name: t('pricing.plans.enterprise.name'),
      price: "4,999",
      period: t('pricing.plans.enterprise.period'),
      description: t('pricing.plans.enterprise.description'),
      popular: false,
      features: [
        ...[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(i => ({ name: t(`pricing.plans.enterprise.features.${i}`), included: true }))
      ]
    }
  ];

  const addOns = [
    {
      icon: Shield,
      name: "Advanced Security Package",
      price: "499",
      description: "Enhanced security monitoring, penetration testing, and compliance reporting"
    },
    {
      icon: Code,
      name: "Custom Development Hours",
      price: "200",
      description: "Additional development hours for custom applications and automation"
    },
    {
      icon: Phone,
      name: "IP Telephony Enhancement",
      price: "299",
      description: "Advanced IP telephony features and integration with existing systems"
    },
    {
      icon: Settings,
      name: "Automation Package",
      price: "399",
      description: "Advanced automation solutions and business process optimization"
    },
    {
      icon: Headphones,
      name: "Premium Support",
      price: "299",
      description: "Priority support with 15-minute response time and dedicated engineer"
    },
    {
      icon: Wrench,
      name: "CCTV & Security Enhancement",
      price: "399",
      description: "Advanced CCTV systems and security infrastructure upgrades"
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
    },
    {
      question: "What's included in the setup process?",
      answer: "All plans include a comprehensive onboarding process with system assessment, initial configuration, and team training."
    },
    {
      question: "Do you offer custom pricing for large enterprises?",
      answer: "Yes, we offer custom pricing and tailored solutions for enterprises with specific requirements. Contact us for a personalized quote."
    },
    {
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you before you reach your limits and help you upgrade to a suitable plan or add additional resources as needed."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TechFlow</span>
                <span className="text-xl font-bold text-gray-900">Fixora</span>
              </Link>
              {/* Social icons in header */}
              <div className="flex items-center space-x-2 ml-2">
                <a
                  href="https://www.tiktok.com/@yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="TikTok"
                >
                  <Music2 className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/yourcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.home')}</Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.services')}</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.about')}</Link>
              <Link to="/pricing" className="text-blue-600 font-medium">{t('nav.pricing')}</Link>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.contact')}</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              {t('pricing.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('pricing.hero.title')}
              <span className="text-blue-600 block">{t('pricing.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('pricing.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-4 text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  
                  <div className="space-y-3 pt-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        {feature.included ? (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-900' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optional Add-ons
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your plan with additional services tailored to your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <addon.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    ${addon.price}<span className="text-sm font-normal text-gray-600">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {addon.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What's Included in Every Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Core features that come standard with all our service plans
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">System Administration</h3>
              <p className="text-gray-600">Complete server management and infrastructure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Management</h3>
              <p className="text-gray-600">Advanced network configuration and security</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IP Telephony & CCTV</h3>
              <p className="text-gray-600">Communication and security systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation & Development</h3>
              <p className="text-gray-600">Custom scripts and business process automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your plan and start transforming your IT infrastructure today. 
            Our team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              Start Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Compare All Plans
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
