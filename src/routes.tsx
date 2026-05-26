import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './components/layout/SiteLayout';
import { ROUTES } from './lib/paths';
import HomePage from './pages/HomePage';
import ExperienciaPage from './pages/ExperienciaPage';
import SalasPage from './pages/SalasPage';
import SeguridadPage from './pages/SeguridadPage';
import ReservarPage from './pages/ReservarPage';
import EventosPage from './pages/EventosPage';
import PreciosPageRoute from './pages/PreciosPageRoute';
import BoutiquePageRoute from './pages/BoutiquePageRoute';
import DigitalPageRoute from './pages/DigitalPageRoute';
import FranquiciaPageRoute from './pages/FranquiciaPageRoute';
import FAQPage from './pages/FAQPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="experiencia" element={<ExperienciaPage />} />
        <Route path="salas" element={<SalasPage />} />
        <Route path="seguridad" element={<SeguridadPage />} />
        <Route path="reservar" element={<ReservarPage />} />
        <Route path="eventos" element={<EventosPage />} />
        <Route path="precios" element={<PreciosPageRoute />} />
        <Route path="boutique" element={<BoutiquePageRoute />} />
        <Route path="digital" element={<DigitalPageRoute />} />
        <Route path="franquicia" element={<FranquiciaPageRoute />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
}
