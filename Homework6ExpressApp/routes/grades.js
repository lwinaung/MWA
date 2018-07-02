var express = require('express');
var validator = require('express-validator');

var app = express();
var router = express.Router();

app.use(express.urlencoded({extended: true}));
app.use(validator());


const grades = [
  {id:1, name: 'Asaad Saad', course: 'CS572', grade: 95, email: 'asaad@mum.edu'}, 
]

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req,res,next) {
  res.send(grades);
})

router.get('/:id', function(req,res,next) {
  console.log(req.params.id);
  for(let grade of grades){
    if(grade['id'] == req.params.id){
      res.send(grade);
    }
  }  
})

router.post('/', function(req,res,next) {
  req.assert('name', 'Name is required').notEmpty();
  req.assert('course', 'Course is required').notEmpty();
  req.assert('email', "Email is required and correct format.").notEmpty().isEmail();

  var errors = req.validationErrors();
  if(errors){
    res.send({'Error ': errors});
  }
  else{
    var grade = {};
    grade['name'] = req.body.name;
    grade['course'] = req.body.course;
    grade['grade'] = req.body.grade;
    grade['email'] = req.body.email;
    grades.push(grade);
    console.log("Data " + JSON.stringify(grades));
    res.json({Success: "Insert is successful"});
    res.end();
  }
})

module.exports = router;
