const express = require("express");
const applyMiddleware = require("./src/middlewares");
const globalErrorHandler = require("./src/utils/globalErrorHandler");
const connectDB = require("./src/db/connectDB");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const userRoute = require('./src/routes/Users/index')
const authentication = require('./src/routes/Authentication/index')
const TeacherApllication = require('./src/routes/TeacherApllication/index')
const teacherRequest = require('./src/routes/TeacherRequest/index')
const CoursesRoutes = require('./src/routes/Courses/index')
const PaymentIntant = require('./src/routes/Payment/index')
const EnrollmentRoute = require('./src/routes/AllEnrolMent/index')
const WebSiteData = require('./src/routes/MultipleData/index')
const coursesRequest = require('./src/routes/CoursesRequest/index')
const asignment = require('./src/routes/Assignment/index')
const FeedBackRoute = require('./src/routes/FeedBack/index')
applyMiddleware(app);

//routes
app.use(userRoute)
app.use(authentication)
app.use(TeacherApllication)
app.use(teacherRequest)
app.use(CoursesRoutes)
app.use(PaymentIntant)
app.use(EnrollmentRoute)
app.use(WebSiteData)
app.use(coursesRequest)
app.use(asignment)
app.use(FeedBackRoute)

app.get("/", (req, res) => {
  res.send("doctor is running....");
});

app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main=async ()=>{
    await connectDB()
    app.listen(port, () => {
        console.log(`CareerHunt Server is running on port ${port}`);
    });
   
}


main()