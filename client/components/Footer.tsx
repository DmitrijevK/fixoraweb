import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
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
            <h3 className="font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.sysadmin.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.network.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.telephony.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.automation.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.development.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.security.title')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('home.services.support.title')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">{t('nav.pricing')}</Link></li>
              <li><a href="mailto:hello@techflow.com" className="hover:text-white transition-colors">{t('common.contact')}</a></li>
              <li><a href="mailto:hello@fixora.com" className="hover:text-white transition-colors">{t('common.contact')}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">{t('common.contact')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:hello@techflow.com" className="hover:text-white transition-colors">{t('common.email')}</a></li>
              <li><a href="mailto:hello@fixora.com" className="hover:text-white transition-colors">{t('common.email')}</a></li>
              <li><a href="tel:+15551234567" className="hover:text-white transition-colors">{t('common.phone')}</a></li>
              <li>{t('common.support247')}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t('common.copyright')}</p>
        </div>
      </div>
    </footer>
  );
} 