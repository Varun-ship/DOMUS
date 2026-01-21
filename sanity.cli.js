import {defineCliConfig} from 'sanity/cli'

// Hardcode project ID for CLI (fallback to env var if available)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '55iqrylx';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineCliConfig({
  api: {
    projectId: projectId,
    dataset: dataset,
  },
})

