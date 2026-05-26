import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../lib/paths';

interface PageBackLinkProps {
  label?: string;
  to?: string;
}

export default function PageBackLink({
  label = 'Volver al inicio',
  to = ROUTES.home,
}: PageBackLinkProps) {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 mb-8">
      <Link
        to={to}
        className="inline-flex items-center gap-2 font-body text-sm text-purple-300 hover:text-purple-200 transition-colors duration-200"
      >
        <ArrowLeft size={18} strokeWidth={1.5} />
        {label}
      </Link>
    </div>
  );
}
