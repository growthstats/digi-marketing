import { stegaClean } from '@sanity/client/stega';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { processUrl } from '@/sanity/lib/url';

import TransitionLink from '../transition-link';

export default function CTALink({ link, style, className, children, ...rest }: Sanity.CTA & React.HTMLAttributes<HTMLAnchorElement>) {
  const linkContent = children || link?.label || link?.internal?.title || link?.external;
  const ariaLabel = link?.label ?? link?.internal?.title ?? link?.external ?? 'Link';

  const props = {
    className: cn(buttonVariants({ variant: style ?? 'link', size: 'link' }), className) || undefined,
    children: linkContent,
    'aria-label': ariaLabel,
    ...rest,
  };

  if (link?.type === 'internal' && link.internal) {
    return (
      <TransitionLink
        href={processUrl(link.internal, {
          base: false,
          params: link.params,
        })}
        {...props}
      >
        {linkContent}
      </TransitionLink>
    );
  }

  if (link?.type === 'external' && link.external) {
    return (
      <a href={stegaClean(link.external)} {...props}>
        {linkContent}
      </a>
    );
  }

  return props.children;
}