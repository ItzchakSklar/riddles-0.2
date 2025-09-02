import express from 'express';
import  configRoutes  from './Routes/configRoutes.js';
import cors from "cors";

const PORT = process.env.PORT || 3005;

const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());

configRoutes(app);

app.listen(PORT, () => {
    console.log(`Server runing on port:${PORT}`);
})

