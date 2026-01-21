import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

// For hosted studio, we need to hardcode the project ID
// Environment variables aren't available during Sanity's build process
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '55iqrylx';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  console.warn('⚠️  NEXT_PUBLIC_SANITY_PROJECT_ID is not set');
}

export default defineConfig({
  name: 'default',
  title: 'DOMUS CMS',
  projectId,
  dataset,
  // basePath removed for hosted studio (not needed)
  // For local development, basePath: '/studio' is handled by Next.js routing
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

