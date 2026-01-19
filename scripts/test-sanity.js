// Test script to verify Sanity connection
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function testConnection() {
  console.log('🔍 Testing Sanity connection...\n');
  console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET || 'production');
  console.log('API Token:', process.env.SANITY_API_TOKEN ? '✅ Set' : '❌ Missing\n');

  try {
    // Test 1: Check if we can query the dataset
    console.log('Test 1: Checking dataset access...');
    const datasets = await client.datasets.list();
    console.log('✅ Dataset access successful');
    console.log('Available datasets:', datasets.map(d => d.name).join(', '), '\n');

    // Test 2: Check for post schema
    console.log('Test 2: Checking for "post" documents...');
    const posts = await client.fetch('*[_type == "post"] | order(_createdAt desc) [0...5]');
    console.log(`✅ Found ${posts.length} post(s)`);
    if (posts.length > 0) {
      console.log('Sample posts:');
      posts.forEach((post, i) => {
        console.log(`  ${i + 1}. ${post.title || 'Untitled'} (slug: ${post.slug?.current || 'no slug'})`);
      });
    } else {
      console.log('⚠️  No posts found. Make sure you have created posts in Sanity Studio.');
    }
    console.log('');

    // Test 3: Check for category schema
    console.log('Test 3: Checking for "category" documents...');
    const categories = await client.fetch('*[_type == "category"] | order(title asc)');
    console.log(`✅ Found ${categories.length} category/categories`);
    if (categories.length > 0) {
      console.log('Categories:');
      categories.forEach((cat, i) => {
        console.log(`  ${i + 1}. ${cat.title || 'Untitled'} (slug: ${cat.slug?.current || 'no slug'})`);
      });
    } else {
      console.log('⚠️  No categories found. Make sure you have created categories in Sanity Studio.');
    }
    console.log('');

    // Test 4: Check all document types
    console.log('Test 4: Checking all document types in dataset...');
    try {
      const allDocs = await client.fetch('*[] | order(_type) [0...50]');
      const uniqueTypes = [...new Set(allDocs.map(item => item._type))];
      console.log(`✅ Found ${uniqueTypes.length} document type(s):`);
      uniqueTypes.forEach(type => {
        console.log(`  - ${type}`);
      });
    } catch (e) {
      console.log('⚠️  Could not fetch document types (this is okay if dataset is empty)');
    }
    console.log('');

    console.log('✅ All tests passed! Sanity connection is working correctly.\n');
    console.log('📝 Next steps:');
    console.log('   1. Make sure you have created "post" and "category" schemas in Sanity Studio');
    console.log('   2. Create some test posts and categories');
    console.log('   3. Your blog should now display content from Sanity!\n');

  } catch (error) {
    console.error('❌ Connection test failed:\n');
    if (error.message.includes('401') || error.message.includes('Unauthorized')) {
      console.error('   Authentication failed. Please check your SANITY_API_TOKEN.');
    } else if (error.message.includes('404') || error.message.includes('not found')) {
      console.error('   Project or dataset not found. Please check your project ID and dataset name.');
    } else {
      console.error('   Error:', error.message);
    }
    console.error('\n   Full error:', error);
    process.exit(1);
  }
}

testConnection();

