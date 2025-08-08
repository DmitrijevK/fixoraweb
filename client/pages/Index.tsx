import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Server, Network, Code, Shield, Cloud, Zap, ArrowRight, CheckCircle, Phone, Settings, Wrench, Headphones, Music2, Linkedin } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Index() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Server,
      title: t('home.services.sysadmin.title'),
      description: t('home.services.sysadmin.description'),
      features: [t('home.services.sysadmin.feature1'), t('home.services.sysadmin.feature2'), t('home.services.sysadmin.feature3'), t('home.services.sysadmin.feature4')]
    },
    {
      icon: Network,
      title: t('home.services.network.title'),
      description: t('home.services.network.description'),
      features: [t('home.services.network.feature1'), t('home.services.network.feature2'), t('home.services.network.feature3'), t('home.services.network.feature4')]
    },
    {
      icon: Phone,
      title: t('home.services.telephony.title'),
      description: t('home.services.telephony.description'),
      features: [t('home.services.telephony.feature1'), t('home.services.telephony.feature2'), t('home.services.telephony.feature3'), t('home.services.telephony.feature4')]
    },
    {
      icon: Settings,
      title: t('home.services.automation.title'),
      description: t('home.services.automation.description'),
      features: [t('home.services.automation.feature1'), t('home.services.automation.feature2'), t('home.services.automation.feature3'), t('home.services.automation.feature4')]
    },
    {
      icon: Code,
      title: t('home.services.development.title'),
      description: t('home.services.development.description'),
      features: [t('home.services.development.feature1'), t('home.services.development.feature2'), t('home.services.development.feature3'), t('home.services.development.feature4')]
    },
    {
      icon: Shield,
      title: t('home.services.security.title'),
      description: t('home.services.security.description'),
      features: [t('home.services.security.feature1'), t('home.services.security.feature2'), t('home.services.security.feature3'), t('home.services.security.feature4')]
    },
    {
      icon: Headphones,
      title: t('home.services.support.title'),
      description: t('home.services.support.description'),
      features: [t('home.services.support.feature1'), t('home.services.support.feature2'), t('home.services.support.feature3'), t('home.services.support.feature4')]
    }
  ];

  const features = [
    t('home.features.security'),
    t('home.features.support'),
    t('home.features.scalable'),
    t('home.features.pricing'),
    t('home.features.deployment'),
    t('home.features.integrations')
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Fixora</span>
              </div>
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
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.services')}</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.about')}</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.pricing')}</Link>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.contact')}</a>
            </nav>
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              <Button className="bg-blue-600 hover:bg-blue-700">
                {t('nav.getStarted')}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              {t('home.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('home.hero.title')}
              <span className="text-blue-600 block">{t('home.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                {t('home.hero.startProject')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                {t('home.hero.viewWork')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.services.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('home.features.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('home.features.description')}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Shield className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Server className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Network className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Code className="w-8 h-8 text-orange-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">6+</div>
                    <div className="text-sm text-gray-600">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              {t('home.cta.consultation')}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              {t('home.cta.quote')}
            </Button>
          </div>
        </div>
      </section>

      {/* Добавляем отзывы перед футером */}
      <Testimonials />
      <Footer />
    </div>
  );
}
