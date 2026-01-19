# Sanity CMS Schema Mapping for DOMUS Journal

This document outlines how to structure your blog posts in Sanity CMS to match the DOMUS Journal implementation.

## Required Schema Types

### 1. Post Schema (Main Blog Post)

Create a schema type called `post` with the following fields:

```javascript
{
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short description shown on blog listing page',
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility'
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category.title'
    },
    prepare(selection) {
      const {category} = selection
      return {...selection, subtitle: category && `in ${category}`}
    }
  }
}
```

### 2. Category Schema

Create a schema type called `category`:

```javascript
{
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    }
  ]
}
```

## Field Mappings

| DOMUS Field | Sanity Field | Type | Notes |
|------------|-------------|------|-------|
| `title` | `title` | string | Blog post title |
| `description` | `excerpt` | text | Short description for cards |
| `href` | `slug.current` | slug | URL slug (e.g., "welcoming-spring-rituals-for-renewal") |
| `category` | `category.title` | reference | Category name |
| `image` | `mainImage.asset.url` | image | Main featured image |
| `date` | `publishedAt` | datetime | Publication date |
| `content` | `body` | array | Rich text content (Portable Text) |

## Image Handling

- **Main Image**: Used for blog card thumbnails
  - Access via: `post.mainImage.asset.url`
  - Alt text: `post.mainImage.alt`

- **Body Images**: Embedded images within the post content
  - Handled automatically by Portable Text
  - Access via: `body` array items of type `image`

## Category Values

The current categories in the DOMUS Journal are:
- **Wellness**
- **Philosophy**
- **Lifestyle**

Create these categories in Sanity, or add new ones as needed.

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token  # Optional, for authenticated requests
```

## Example Post Structure in Sanity

```json
{
  "_type": "post",
  "title": "Welcoming Spring: Rituals for Renewal",
  "slug": {
    "current": "welcoming-spring-rituals-for-renewal"
  },
  "excerpt": "As the seasons shift, our bodies and nervous systems respond. How to align your wellness practice with the rhythms of nature.",
  "mainImage": {
    "asset": {
      "_ref": "image-abc123",
      "_type": "reference"
    },
    "alt": "Spring renewal ritual"
  },
  "category": {
    "_ref": "category-wellness",
    "_type": "reference"
  },
  "publishedAt": "2024-03-01T00:00:00.000Z",
  "body": [
    {
      "_type": "block",
      "style": "normal",
      "children": [
        {
          "_type": "span",
          "text": "Spring brings a natural impulse toward renewal..."
        }
      ]
    }
  ]
}
```

## Next Steps

1. Create these schemas in your Sanity Studio
2. Add the environment variables to `.env.local`
3. Create some test posts in Sanity
4. The blog pages will automatically fetch and display posts from Sanity

