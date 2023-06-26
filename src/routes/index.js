import express from 'express';
import categories from './categoriesRoutes.js';

const routes = (app) => {
  app.use(
    express.json(),
    categories,
  );
};

export default routes;
