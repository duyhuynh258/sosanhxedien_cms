# EV Model Specifications Migration

This directory contains scripts to migrate from the old hardcoded specification fields to the new component-based structure.

## Migration Process

1. **Schema Changes**:
   - Added new component types:
     - `specifications.spec-item`: For individual specification items (label, value, highlight)
     - `specifications.spec-section`: For grouping specifications into sections
   - Added `specifications` field to the EV Model schema (component, repeatable)
   - Removed all individual specification fields (acceleration, top_speed, power, etc.)

2. **Data Migration**:
   - Run the migration script after Strapi has been restarted with the new schema

## Running the Migration

1. Make sure Strapi is stopped
2. Restart Strapi to apply schema changes
3. Run the migration script:

```bash
NODE_ENV=development node src/api/ev-model/migrations/specifications-migration.js
```

## Verification

After running the migration:
1. Check the Strapi admin panel
2. Verify that EV Models now have the specification sections and items
3. Check that all data has been transferred correctly

## Benefits of the New Structure

- **Flexibility**: Easily add, remove, or modify specifications without changing the schema
- **Grouping**: Specifications are organized into logical sections
- **Rich UI**: Better content editing experience with component-based UI
- **Highlights**: Ability to highlight important specifications 
