/**
 * ev-model controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::ev-model.ev-model', ({ strapi }) => ({
  async find(ctx) {
    // Call the default find controller
    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },
}));
