# Strapi Seed Data

This directory contains seed scripts to populate your Strapi CMS with initial data for the EV comparison website.

## Available Seeds

1. `ev-brands.js` - Creates EV brand data
2. `ev-models.js` - Creates EV model data (depends on brands)

## How to Run Seeds

### Step 1: Start your Strapi application

```bash
cd strapi_cms
npm run develop
```

### Step 2: Run the brands seed first

```bash
NODE_ENV=development npm run strapi -- seed:run --name=ev-brands
```

### Step 3: Run the models seed

```bash
NODE_ENV=development npm run strapi -- seed:run --name=ev-models
```

## Verifying Seed Data

After running the seeds, you should be able to:

1. See EV Brands in the Strapi Admin UI under Content Manager > EVBrand
2. See EV Models in the Strapi Admin UI under Content Manager > EVModel
3. Test the API endpoints:
   - Brands: `http://localhost:1337/api/ev-brands`
   - Models: `http://localhost:1337/api/ev-models`
   - Model with brand: `http://localhost:1337/api/ev-models?populate=brand`

## API Permissions

Make sure you've configured the necessary permissions for public access:

1. Go to Strapi Admin > Settings > Roles
2. Select the "Public" role
3. Enable "find" and "findOne" permissions for both EVBrand and EVModel
4. Save your changes

## Custom Seed Run

To run a specific seed file directly:

```javascript
// Example of running a seed programmatically
const seed = require('./ev-brands');
seed.run({ strapi })
  .then(() => console.log('Seed completed'))
  .catch(err => console.error('Seed failed:', err));
``` 
