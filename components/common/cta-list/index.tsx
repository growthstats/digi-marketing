import CtaLink from '@/components/common/cta-link';
import { cn } from '@/lib/utils';

export default function CTAList({
  ctas,
  className,
}: React.HTMLAttributes<HTMLParagraphElement> & {
  ctas?: Sanity.CTA[];
}) {
  if (!ctas?.length) return null;

  return (
    <div className={cn('flex flex-wrap items-center gap-[.5em]', className)}>
      {ctas?.map((cta) => <CtaLink className="max-sm:w-full text-base" {...cta} key={cta._key} />)}
    </div>
  );
}
