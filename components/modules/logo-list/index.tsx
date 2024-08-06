/* eslint-disable @typescript-eslint/no-explicit-any */
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';

import Img from '@/components/common/Img';
import Pretitle from '@/components/common/pretitle';
import { cn } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/fetch';

import css from './logo-list.module.scss';

export default async function LogoList({
  pretitle,
  intro,
  logos,
  logoType = 'default',
  autoScroll,
}: Readonly<
  Partial<{
    pretitle: string;
    intro: any;
    logos: Sanity.Logo[];
    logoType: 'default' | 'light' | 'dark';
    autoScroll?: boolean;
  }>
>) {
  const allLogos = logos || (await sanityFetch<Sanity.Logo[]>({ query: groq`*[_type == 'logo']` }));

  return (
    <section className="section space-y-8">
      {(pretitle || intro) && (
        <header className="richtext mx-auto max-w-screen-sm text-balance text-center text-foreground">
          <Pretitle>{pretitle}</Pretitle>
          <PortableText value={intro} />
        </header>
      )}

      <figure
        className={cn(
          'mx-auto flex items-center gap-y-8 pb-4',
          autoScroll ? `${css.track} overflow-fade max-w-max overflow-hidden` : 'flex-wrap justify-center gap-x-4',
        )}
        style={
          {
            '--count': allLogos?.length,
          } as React.CSSProperties
        }
      >
        {allLogos.map((logo, key) => (
          <Img
            className=" w-[200px] shrink-0 object-contain max-sm:w-[150px]"
            style={{ '--index': key } as React.CSSProperties}
            image={logo.image?.[logoType]}
            imageWidth={400}
            key={logo._key}
          />
        ))}
      </figure>
    </section>
  );
}
