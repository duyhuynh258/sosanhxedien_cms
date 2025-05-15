'use strict';

/**
 * Migration script to convert individual specification fields to component-based structure
 * Run this script after updating the schema and restarting Strapi
 * Usage: NODE_ENV=development node src/api/ev-model/migrations/specifications-migration.js
 */
module.exports = async () => {
  try {
    // Load Strapi
    const strapi = require('@strapi/strapi');
    await strapi().load();

    console.log('Starting specification migration...');

    // Get all EV models
    const models = await strapi.entityService.findMany('api::ev-model.ev-model', {
      populate: '*'
    });

    console.log(`Found ${models.length} EV models to migrate`);

    // Process each model
    for (const model of models) {
      console.log(`Migrating: ${model.model_name}`);

      // Create specification sections based on old fields
      const specifications = [
        // Performance section
        {
          section_title: 'Performance',
          specs: [
            { label: 'Acceleration (0-100 km/h)', value: model.acceleration || 'N/A', is_highlighted: true },
            { label: 'Top Speed', value: model.top_speed || 'N/A', is_highlighted: false },
            { label: 'Power', value: model.power || 'N/A', is_highlighted: true },
            { label: 'Torque', value: model.torque || 'N/A', is_highlighted: false },
            { label: 'Drive Type', value: model.drive_type || 'N/A', is_highlighted: false }
          ].filter(spec => spec.value !== 'N/A')
        },

        // Dimensions section
        {
          section_title: 'Dimensions',
          specs: [
            { label: 'Dimensions (L×W×H)', value: model.dimensions || 'N/A', is_highlighted: false },
            { label: 'Wheelbase', value: model.wheelbase || 'N/A', is_highlighted: false },
            { label: 'Ground Clearance', value: model.ground_clearance || 'N/A', is_highlighted: false },
            { label: 'Weight', value: model.weight || 'N/A', is_highlighted: false }
          ].filter(spec => spec.value !== 'N/A')
        },

        // Interior section
        {
          section_title: 'Interior',
          specs: [
            { label: 'Seating Capacity', value: model.seating_capacity || 'N/A', is_highlighted: true },
            { label: 'Cargo Volume', value: model.cargo_volume || 'N/A', is_highlighted: false }
          ].filter(spec => spec.value !== 'N/A')
        },

        // Warranty section
        {
          section_title: 'Warranty',
          specs: [
            { label: 'Warranty', value: model.warranty || 'N/A', is_highlighted: false }
          ].filter(spec => spec.value !== 'N/A')
        }
      ];

      // Only include sections that have specs
      const filteredSpecs = specifications.filter(section => section.specs.length > 0);

      // Update the model with the new specifications structure
      await strapi.entityService.update('api::ev-model.ev-model', model.id, {
        data: {
          specifications: filteredSpecs
        }
      });

      console.log(`Migration completed for: ${model.model_name}`);
    }

    console.log('Migration completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}; 
