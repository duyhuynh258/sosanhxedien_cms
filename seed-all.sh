#!/bin/bash

# Shell script to run all seed commands in sequence
# Run with: ./seed-all.sh

echo "===== RUNNING ALL SEEDS IN SEQUENCE ====="
echo ""

echo "Running EV Brands seed..."
NODE_ENV=development npm run strapi -- seed:run --name=ev-brands

echo ""
echo "Running EV Models seed..."
NODE_ENV=development npm run strapi -- seed:run --name=ev-models

echo ""
echo "Running Tags seed..."
NODE_ENV=development npm run strapi -- seed:run --name=tags

echo ""
echo "Running Authors seed..."
NODE_ENV=development npm run strapi -- seed:run --name=authors

echo ""
echo "Running Newsletter Subscribers seed..."
NODE_ENV=development npm run strapi -- seed:run --name=newsletter-subscribers

echo ""
echo "Running Review Articles seed..."
NODE_ENV=development npm run strapi -- seed:run --name=review-articles

echo ""
echo "Running Additional Review Articles seed..."
NODE_ENV=development npm run strapi -- seed:run --name=review-articles-more

echo ""
echo "✅ ALL SEEDS COMPLETED!"
echo "You can now check your Strapi admin panel to see the data." 
