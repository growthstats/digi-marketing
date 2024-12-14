import { SearchIcon } from '@sanity/icons';
import { RiPagesFill } from 'react-icons/ri';
import { VscEdit } from 'react-icons/vsc';
import { defineArrayMember, defineField, defineType } from 'sanity';

import imageBlock from '../fragments/image-block';

export default defineType({
  name: 'blog.post',
  title: 'Blog post',
  icon: VscEdit,
  type: 'document',
  groups: [
    {
      title: 'Main Content',
      name: 'mainContent',
      icon: RiPagesFill,
      default: true,
    },
    {
      title: 'SEO / Metadata',
      name: 'seo',
      icon: SearchIcon,
    },
  ],
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      group: 'mainContent',
      validation: (Rule) => Rule.required().error('A title is required.'),
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      group: 'mainContent',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }),
      ],
      validation: (Rule) => Rule.required().error('A hero image is required.'),
    }),
    defineField({
      name: 'publishDate',
      type: 'date',
      group: 'mainContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'string',
      group: 'mainContent',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Categories',
      group: 'mainContent',
      of: [{ type: 'reference', to: { type: 'blog.category' } }],
    }),
    defineField({
      name: 'body',
      type: 'array',
      group: 'mainContent',
      of: [
        { type: 'block' },
        imageBlock,
        defineArrayMember({
          type: 'youtube',
        }),
        defineArrayMember({
          type: 'code',
          options: {
            withFilename: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'relatedPosts',
      type: 'array',
      group: 'mainContent',
      of: [{ type: 'reference', to: [{ type: 'blog.post' }] }],
    }),
    defineField({
      name: 'metadata',
      type: 'metadata',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'heroImage',
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'date',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Title',
      name: 'title',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
});
