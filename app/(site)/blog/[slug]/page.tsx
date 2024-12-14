import { notFound } from 'next/navigation';
import { groq } from 'next-sanity';

import Modules from '@/components/modules';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/fetch';
import { modulesQuery } from '@/sanity/lib/queries';
import processMetadata from '@/utils/functions/process-metadata';

export default async function Page({ params }: Readonly<Props>) {
  const page = await getPageTemplate();
  const post = await getPost(params);

  if (!page || !post) notFound();
  return <Modules modules={page?.modules} page={page} post={post} />;
}

export async function generateMetadata({ params }: Props) {
  const post = await getPost(params);
  if (!post) notFound();
  return processMetadata(post);
}

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(groq`*[_type == 'blog.post' && defined(metadata.slug.current)].metadata.slug.current`);

  return slugs.map((slug) => ({ slug }));
}

async function getPost(params: Props['params']) {
  return await sanityFetch<Sanity.BlogPost>({
    query: groq`*[_type == 'blog.post' && metadata.slug.current == $slug][0]{
			...,
			'body': select(_type == 'image' => asset->, body),
			'readTime': length(pt::text(body)) / 200,
			'headings': body[style in ['h2', 'h3']]{
				style,
				'text': pt::text(@)
			},
			categories[]->,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
    params,
    tags: ['blog.post'],
  });
}

async function getPageTemplate() {
  const query = groq`*[_type == 'page' && metadata.slug.current == 'blog/*'][0]{
    ...,
    modules[]{ ${modulesQuery} },
    metadata { slug }
  }`;

  return await sanityFetch<Sanity.Page>({
    query,
    tags: ['blog/*'],
  });
}

type Props = {
  params: { slug?: string; lang: string };
};
