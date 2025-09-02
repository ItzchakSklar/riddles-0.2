import RiddlesRouter from "./RiddleRoutes.js";

export default function configRoutes(app) {

  app.use('/riddles', RiddlesRouter);  
  
}

