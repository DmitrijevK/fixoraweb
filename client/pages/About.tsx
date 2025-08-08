import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useTranslation } from "@/contexts/TranslationContext";
import { 
  Zap, 
  Users, 
  Award, 
  Clock, 
  Target, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Globe,
  Lightbulb,
  Heart,
  Linkedin,
  Music2
} from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  const team = [
    {
      name: "Kirill Dmitrijev",
      role: "Lead System Administrator",
      experience: "5+ years",
      specialties: ["Linux", "Docker", "Virtualization", "AWS","Cisco", "Firewall", "VPN", "Security", "Windows Server"]
    },
    {
      name: "Matvei",
      role: "Lead Developer",
      experience: "4+ years",
      specialties: ["Scripts", "Soft Development", "Data Science", "Automation"]
    },
    {
      name: "Daniil",
      role: "SALES MANAGER",
      experience: "4+ years",
      specialties: ["Customer Relations", "Sales Strategy", "Business Development"]
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every solution we implement prioritizes security and data protection at its core."
    },
    {
      icon: Clock,
      title: "24/7 Reliability",
      description: "Round-the-clock monitoring and support to ensure your systems never sleep."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and best practices."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our mission. We're invested in your long-term growth."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Fixora</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.home')}</Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.services')}</Link>
              <Link to="/about" className="text-blue-600 font-medium">{t('nav.about')}</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.pricing')}</Link>
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
              {t('about.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('about.hero.title')}
              <span className="text-blue-600 block">{t('about.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('about.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fixora was founded with a simple mission: to make enterprise-grade IT infrastructure 
                accessible to businesses of all sizes. What started as a small team of passionate 
                engineers has grown into a trusted partner for hundreds of companies worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that technology should empower businesses, not complicate them. That's why 
                we focus on creating solutions that are not only powerful and secure but also 
                intuitive and maintainable.
              </p>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Founded in 2014</div>
                  <div className="text-gray-600">A decade of continuous innovation and growth</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 mb-4">
                <Globe className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Global Reach</div>
                  <div className="text-gray-600">Serving clients across North America and Europe</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">Industry Recognition</div>
                  <div className="text-gray-600">Award-winning solutions and customer satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <Target className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{t('about.mission.title')}</h3>
                    <p className="text-gray-600 text-sm">
                      {t('about.mission.description')}
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <Users className="w-8 h-8 text-green-600 mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">{t('about.vision.title')}</h3>
                    <p className="text-gray-600 text-sm">
                      {t('about.vision.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every solution we create
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional IT solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
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
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your IT infrastructure 
            and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.tiktok.com/@yourcompany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Music2 className="w-6 h-6" />
              <span>TikTok</span>
            </a>
            <a
              href="https://www.linkedin.com/company/yourcompany" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
