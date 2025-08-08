import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Home, MessageCircle, Music2, Linkedin } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

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
              <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.services')}</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.about')}</Link>
              <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">{t('nav.contact')}</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              {t('nav.getStarted')}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {location.pathname === '/404' ? t('notfound.title') : t('common.comingSoon')}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {location.pathname === '/404' 
                ? t('notfound.description')
                : "This page is in development and will be available soon."
              }
            </p>
            <p className="text-gray-500 mb-8">
              Want this page to have specific content? Continue prompting in the chat to have it generated!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/">
                <Home className="mr-2 w-5 h-5" />
                {t('notfound.backHome')}
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              {t('common.goBack')}
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Visited: <code className="bg-gray-100 px-2 py-1 rounded text-xs">{location.pathname}</code>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TechFlow</span>
                <span className="text-xl font-bold">Fixora</span>
              </div>
              <p className="text-gray-400">
                Professional IT services for modern businesses. Building the future, one system at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>System Administration</li>
                <li>Network Engineering</li>
                <li>Python Development</li>
                <li>Cloud Hosting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@techflow.com</li>
                <li>hello@fixora.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechFlow. All rights reserved.</p>
            <p>&copy; 2024 Fixora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
