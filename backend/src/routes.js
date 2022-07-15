const express = require('express');
const cors = require('cors')
const routes = express.Router();


const AnnotationController = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

//Rota annotations
routes.post('/annotations', AnnotationController.create)
routes.get('/annotations',AnnotationController.read)
routes.delete('/annotations/:id',AnnotationController.delete)

//Rora das prioridades 
routes.get('/priorities',PriorityController.read)
routes.post('/priorities/:id', PriorityController.update)

//Rota content
routes.post('/contents/:id',ContentController.update)

module.exports = routes