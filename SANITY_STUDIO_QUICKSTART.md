# Sanity Hosted Studio - Quick Start

## Deploy Your Studio in 3 Steps

### 1. Install Sanity CLI (if needed)
```bash
npm install -g @sanity/cli
```

### 2. Login to Sanity
```bash
sanity login
```
This opens your browser to authenticate.

### 3. Deploy Studio
```bash
npm run studio:deploy
```
Or:
```bash
sanity deploy
```

When prompted, choose a hostname (e.g., `domus-cms`).

## Access Your Studio

After deployment, your studio will be available at:
```
https://your-project-id.sanity.studio
```

Or with custom hostname:
```
https://your-custom-hostname.sanity.studio
```

## That's It! 🎉

Your studio is now hosted and accessible from anywhere. No server needed!

## Updating Your Studio

After making changes to schemas or config:

```bash
npm run studio:deploy
```

## Need More Details?

See `SANITY_HOSTED_STUDIO.md` for complete documentation.

