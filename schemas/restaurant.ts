import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'latitude',
      type: 'number',
      title: 'Latitude od the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longitude',
      type: 'number',
      title: 'Longitude of the Restaurant',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a number between 1-5',
      validation: (Rule) => Rule.required().min(1).max(5).error('Pleas enter a valid number'),
    }),
    defineField({
      name: 'reviews',
      type: 'string',
      title: 'Reviews',
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (Rule) => Rule.required().min(1).error('Pleas enter a valid number'),
    }),
  ],
})
