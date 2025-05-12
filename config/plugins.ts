export default () => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Sosanhxedien API Documentation',
        description: 'Documentation for the Sosanhxedien API endpoints',
        contact: {
          name: 'API Support',
          email: 'support@example.com', // Replace with your contact email
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
  },
});
