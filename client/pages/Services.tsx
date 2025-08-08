import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useTranslation } from "@/contexts/TranslationContext";
import {
  Zap,
  ArrowRight,
  Server,
  Network,
  Code,
  Shield,
  Phone,
  Settings,
  Headphones,
  CheckCircle,
  Clock,
  Users,
  Wrench,
  Globe,
  Database,
  Lock,
  Monitor,
  Cpu,
  HardDrive,
  Router,
  Camera,
  PhoneCall,
  FileCode,
  Terminal,
  Bug,
  AlertTriangle,
  LifeBuoy,
  Music2,
  Linkedin,
} from "lucide-react";

export default function Services() {
  const { t } = useTranslation();
  const services = [
    {
      icon: Server,
      title: "System Administration",
      subtitle: "Comprehensive management of your IT infrastructure",
      description: "Complete server management, monitoring, and maintenance services to keep your infrastructure running smoothly and efficiently.",
      features: [
        "Server setup and maintenance (Windows Server, Linux: Ubuntu, CentOS, Fedora)",
        "Active Directory and domain structure support",
        "VMware virtualization implementation and support",
        "Microsoft Exchange and SQL Server administration",
        "Terminal server setup and RDP access configuration",
        "System troubleshooting and error resolution",
        "Performance optimization and capacity planning",
        "Regular security updates and patch management"
      ],
      benefits: [
        "24/7 system monitoring and alerting",
        "Automated backup and disaster recovery",
        "Proactive maintenance and updates",
        "Expert troubleshooting and support"
      ]
    },
    {
      icon: Network,
      title: "Network Administration",
      subtitle: "Reliable and secure networks for your business",
      description: "Design, implement, and maintain robust network infrastructure with enterprise-grade security and performance.",
      features: [
        "LAN design and configuration",
        "Network equipment selection and setup (Cisco, MikroTik, HP)",
        "Network segmentation and routing (OSPF, BGP)",
        "VPN networks, IPsec, QoS, Firewall configuration",
        "Network security monitoring and maintenance",
        "NETping equipment support",
        "Load balancing and traffic management",
        "Network performance optimization"
      ],
      benefits: [
        "Secure and scalable network architecture",
        "High availability and redundancy",
        "Advanced security features",
        "Comprehensive monitoring and reporting"
      ]
    },
    {
      icon: Phone,
      title: "IP Telephony & CCTV",
      subtitle: "Communication and security in one package",
      description: "Complete IP telephony and video surveillance solutions to enhance your business communication and security.",
      features: [
        "IP telephony setup and ongoing support",
        "CCTV system implementation under key",
        "Integration with other security systems",
        "Video surveillance monitoring and management",
        "Call center and PBX configuration",
        "Mobile app integration for remote access",
        "Recording and storage management",
        "System maintenance and updates"
      ],
      benefits: [
        "Cost-effective communication solutions",
        "Enhanced security and monitoring",
        "Scalable and flexible systems",
        "Professional installation and support"
      ]
    },
    {
      icon: Settings,
      title: "Ready Solutions & Automation",
      subtitle: "Reduce routine - increase efficiency",
      description: "Automate your business processes and create custom solutions to streamline operations and boost productivity.",
      features: [
        "Custom automation scripts (Python, PowerShell, Bash)",
        "Backup and deployment automation solutions",
        "Custom utility development for specific tasks",
        "Business process automation and optimization",
        "Data processing and reporting automation",
        "Integration with existing systems",
        "Workflow automation and scheduling",
        "Performance monitoring and optimization"
      ],
      benefits: [
        "Increased operational efficiency",
        "Reduced manual workload",
        "Improved accuracy and consistency",
        "Custom solutions tailored to your needs"
      ]
    },
    {
      icon: Code,
      title: "Development",
      subtitle: "IT solutions that work for your results",
      description: "Custom software development and integration services to create solutions that drive your business forward.",
      features: [
        "Custom application development (Python, Shell, C#)",
        "Internal system integration and API development",
        "Business logic configuration and optimization",
        "Database design and management",
        "Web application development",
        "Mobile app development and integration",
        "Legacy system modernization",
        "Third-party service integration"
      ],
      benefits: [
        "Custom solutions for unique business needs",
        "Seamless integration with existing systems",
        "Scalable and maintainable code",
        "Expert development and support"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      subtitle: "Data protection - priority #1",
      description: "Comprehensive cybersecurity services to protect your business from threats and ensure compliance with security standards.",
      features: [
        "Information security audit and assessment",
                 "Security testing and penetration testing",
        "Security policy configuration on servers and networks",
        "Vulnerability assessment and remediation",
        "Security monitoring and incident response",
        "Compliance and regulatory support",
        "Security awareness training",
        "Threat intelligence and monitoring"
      ],
      benefits: [
        "Comprehensive security protection",
        "Regulatory compliance support",
        "Proactive threat detection",
        "Expert security consulting"
      ]
    },
    {
      icon: Headphones,
      title: "Comprehensive IT Support",
      subtitle: "24/7 support and solving any technical issues",
      description: "Round-the-clock technical support and maintenance services to ensure your IT infrastructure runs smoothly.",
      features: [
        "Technical troubleshooting and problem resolution",
        "Remote administration and support",
        "Regular IT infrastructure maintenance",
        "Consultation and system modernization support",
        "Help desk and user support",
        "System monitoring and proactive maintenance",
        "Emergency response and disaster recovery",
        "Technology consulting and planning"
      ],
      benefits: [
        "24/7 expert technical support",
        "Proactive maintenance and monitoring",
        "Rapid response to issues",
        "Comprehensive IT consulting"
      ]
    }
  ];

  const technologies = [
    { name: "Windows Server", icon: Server },
    { name: "Linux (Ubuntu, CentOS, Fedora)", icon: Cpu },
    { name: "VMware", icon: Monitor },
    { name: "Active Directory", icon: Database },
    { name: "Cisco & MikroTik", icon: Router },
    { name: "Python & PowerShell", icon: FileCode },
    { name: "SQL Server", icon: Database },
    { name: "CCTV Systems", icon: Camera },
    { name: "IP Telephony", icon: PhoneCall },
    { name: "Cybersecurity Tools", icon: Lock },
    { name: "Automation Scripts", icon: Terminal },
    { name: "Network Security", icon: Shield }
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
              <Link to="/services" className="text-blue-600 font-medium">{t('nav.services')}</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.about')}</Link>
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
              {t('services.badge')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('services.hero.title')}
              <span className="text-blue-600 block">{t('services.hero.subtitle')}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t('services.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <h3 className="text-xl text-blue-600 mb-4">{service.subtitle}</h3>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                
                <div className={`bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.slice(4, 8).map((feature, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-sm text-gray-600">{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
               {t('services.technologies.title')}
             </h2>
             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
               {t('services.technologies.description')}
             </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="text-center p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{tech.name}</h3>
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
             {t('services.cta.title')}
           </h2>
           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
             {t('services.cta.description')}
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-50">
               {t('services.cta.consultation')}
               <ArrowRight className="ml-2 w-5 h-5" />
             </Button>
             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
               {t('services.cta.pricing')}
             </Button>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 