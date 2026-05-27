import Section from '../ui/Section';
import FranchiseContent from '../franchise/FranchiseContent';

export default function Franchise() {
  return (
    <Section id="franquicia-home" dark className="relative overflow-hidden scroll-mt-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/35 via-eroscape-deep to-amber-950/15" />
        <div className="absolute -top-44 -left-44 h-[32rem] w-[32rem] rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute -bottom-52 -right-44 h-[36rem] w-[36rem] rounded-full bg-yellow-500/10 blur-[160px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>
      <div className="relative z-10">
        <FranchiseContent />
      </div>
    </Section>
  );
}
