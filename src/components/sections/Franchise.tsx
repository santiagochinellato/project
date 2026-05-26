import Section from '../ui/Section';
import FranchiseContent from '../franchise/FranchiseContent';

export default function Franchise() {
  return (
    <Section id="franquicia-home" dark className="relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <img src="/images/img_7343.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10">
        <FranchiseContent />
      </div>
    </Section>
  );
}
