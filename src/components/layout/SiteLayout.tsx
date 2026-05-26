import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Analytics from '../Analytics';
import SEOKeywords from '../SEOKeywords';
import { usePageMeta } from '../../hooks/usePageMeta';
import { useLegacyHashRedirect } from '../../hooks/useLegacyHashRedirect';
import { useScrollOnNavigate } from '../../hooks/useScrollOnNavigate';
import { useSectionFadeIn } from '../../hooks/useSectionFadeIn';

export default function SiteLayout() {
  usePageMeta();
  useLegacyHashRedirect();
  useScrollOnNavigate();
  useSectionFadeIn();

  return (
    <div className="min-h-screen bg-eroscape-void text-eroscape-text-primary">
      <Analytics />
      <SEOKeywords />
      <TopBar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
