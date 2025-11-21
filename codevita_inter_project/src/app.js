import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


import authRoutes from '../routes/auth.routes.js'
import userRoutes from '../routes/user.routes.js';
import restaurantRoutes from '../routes/restaurant.routes.js'
import driverRoutes from '../routes/driver.routes.js'
import vehicleRoutes from '../routes/vehicle.routes.js'
import routeRoutes from '../routes/route.routes.js';
import wasteRoutes from '../routes/waste.routes.js'
import auditRoutes from '../routes/audit.routes.js'
import binRoutes from "../routes/bin.routes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/drivers', driverRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/waste', wasteRoutes);
app.use('/api/audit', auditRoutes);
app.use("/api/bins", binRoutes);



app.get('/', (req, res) => res.json({ status: 'ok', version: '1.0.0' }));


export default app;