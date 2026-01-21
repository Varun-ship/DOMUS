# Setting Up Sanity Hosted Studio

This guide will help you deploy your Sanity Studio to Sanity's hosted platform, so you can access it at `https://your-project-id.sanity.studio`.

## Prerequisites

- Sanity project already created
- Sanity CLI installed globally: `npm install -g @sanity/cli`
- Your project ID and dataset name

## Step 1: Install Sanity CLI (if not already installed)

```bash
npm install -g @sanity/cli
```

## Step 2: Login to Sanity

```bash
sanity login
```

This will open your browser to authenticate with Sanity.

## Step 3: Verify Your Configuration

Your project already has `sanity.config.ts` configured. Make sure it has:
- Correct `projectId` (from environment variables)
- Correct `dataset` (usually "production")
- All your schemas properly exported

No need to run `sanity init` - your config is already set up!

## Step 4: Deploy Studio to Sanity Hosting

From your project root, run:

```bash
sanity deploy
```

You'll be prompted to:
1. Choose a hostname (e.g., `domus-cms` or your project name)
2. Confirm the deployment

After deployment, your studio will be available at:
```
https://your-project-id.sanity.studio
```

Or if you chose a custom hostname:
```
https://your-custom-hostname.sanity.studio
```

## Step 5: Verify Your Configuration

Make sure your `sanity.config.ts` matches your project:

```typescript
export default defineConfig({
  name: 'default',
  title: 'DOMUS CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  // ... rest of config
});
```

## Step 6: Update Environment Variables

Your `.env.local` should have:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

## Step 7: Access Your Studio

Once deployed, you can access your studio at:
- **Hosted URL**: `https://your-project-id.sanity.studio`
- **Or custom hostname**: `https://your-custom-hostname.sanity.studio`

## Updating Your Studio

After making changes to your schemas or configuration:

1. Make your changes to `sanity/schemas/` or `sanity.config.ts`
2. Deploy again:
   ```bash
   sanity deploy
   ```

## Benefits of Hosted Studio

✅ **Always Available**: Access from anywhere, no local setup needed  
✅ **No Server Required**: Works perfectly with static hosting like SiteGround  
✅ **Automatic Updates**: Sanity handles all infrastructure  
✅ **Secure**: Built-in authentication and security  
✅ **Free**: Included with your Sanity plan  

## Removing Local Studio Route (Optional)

Since you're using hosted studio, you can remove the `/studio` route from your Next.js app:

1. Delete `app/studio/` directory (won't work on SiteGround anyway)
2. This reduces your bundle size
3. Users will access studio via the hosted URL

## Troubleshooting

### "Project not found"
- Make sure you're logged in: `sanity login`
- Verify your project ID in `.env.local`
- Check you're in the correct Sanity organization

### "Deployment failed"
- Check your `sanity.config.ts` is valid
- Ensure all schema files are correct
- Try: `sanity deploy --force`

### "Cannot find module"
- Run `npm install` to ensure all dependencies are installed
- Check that `sanity/schemas/index.ts` exports all schemas correctly

## Next Steps

1. **Share Access**: Add team members via Sanity's dashboard
2. **Set Permissions**: Configure who can edit content
3. **Customize Studio**: Add more schemas, plugins, or customizations
4. **Update Documentation**: Note the hosted studio URL in your project docs

## Useful Commands

```bash
# Login to Sanity
sanity login

# Deploy studio
sanity deploy

# View studio locally (for development)
npm run studio

# Check Sanity project status
sanity projects list

# Manage datasets
sanity datasets list
```

## Resources

- [Sanity Hosting Docs](https://www.sanity.io/docs/deployment)
- [Sanity CLI Docs](https://www.sanity.io/docs/cli)
- [Sanity Studio Customization](https://www.sanity.io/docs/studio)

