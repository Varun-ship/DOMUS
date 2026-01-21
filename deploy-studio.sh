#!/bin/bash

# Deploy Sanity Studio with hostname "admindomus"
# This will create admindomus.sanity.studio

echo "🚀 Deploying Sanity Studio..."
echo "📝 Hostname: admindomus"
echo "🌐 Will be available at: https://admindomus.sanity.studio"
echo ""
echo "When prompted:"
echo "1. Select 'Create new studio hostname'"
echo "2. Enter: admindomus"
echo ""

sanity deploy

