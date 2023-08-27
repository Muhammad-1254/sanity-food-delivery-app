import {defineField, defineType,} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name:'name',
      type:'string',
      title:'Dish Name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name:'description',
      type:'string',
      title:'Dish description',
      validation: Rule => Rule.required()
    }),
    defineField({
      name:'image',
      type:'image',
      title: 'image of the Category'
    }),
    defineField({
        name:'price',
        type:'number',
        title:'Price of the dish in PKR',
        validation: Rule => Rule.required()
      }),
  ],
})
