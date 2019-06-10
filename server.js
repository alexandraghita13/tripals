const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const Sequelize=require('sequelize')

const sequelize=new Sequelize('db_android','root','root',{
   dialect:'mysql',
   define:{
       timestamps:false
   }
})

app.use(bodyParser.json())

const User = sequelize.define('user',{
   id_user:{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
  email: {
    type : Sequelize.STRING,
     unique:true,
    allowNull : false,
     validate : {
      len : [10,100],
      isEmail :true
    }
  },
  password: {
    type : Sequelize.STRING,
    allowNull : false,
    validate : {
      len : [8,100]
    }
  },
 type: {
    type : Sequelize.STRING,
    allowNull : false
  },
  phone_number:{
      type:Sequelize.STRING
  },
  address:{
      type:Sequelize.STRING
  }
}
,{
  underscored : true
})

const Location = sequelize.define('location',{
   id_location :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
  country : {
    type : Sequelize.STRING,
    allowNull : false
  },
  county : {
    type : Sequelize.STRING,
    allowNull : false
  },
 city : {
    type : Sequelize.STRING,
    allowNull : false
  }
}
,{
  underscored : true
})

const Event = sequelize.define('event',{
   id_event :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_location:{
       type:Sequelize.INTEGER
   },
  name : {
    type : Sequelize.STRING,
    allowNull : false
  },
  description : {
    type : Sequelize.STRING,
    allowNull : false
  },
 type : {
    type : Sequelize.STRING,
    allowNull : false
  },
  price:{
      type:Sequelize.FLOAT
  },
  start_date:{
      type:Sequelize.STRING
  },
  end_date:{
      type:Sequelize.STRING
  },
   pictures: { 
        type: Sequelize.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('pictures'));
        }, 
        set: function(val) {
            return this.setDataValue('pictures', JSON.stringify(val));
        }
    }
}
,{
  underscored : true
})

const Hotel = sequelize.define('hotel',{
   id_hotel :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_location:{
       type:Sequelize.INTEGER
   },
  name : {
    type : Sequelize.STRING,
    allowNull : false
  },
  description : {
    type : Sequelize.STRING,
    allowNull : false
  },
 keywords : {
    type : Sequelize.STRING,
    allowNull : false
  },
  rating:{
      type:Sequelize.FLOAT
  },
  pictures: { 
        type: Sequelize.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('pictures'));
        }, 
        set: function(val) {
            return this.setDataValue('pictures', JSON.stringify(val));
        }
    }
}
,{
  underscored : true
})

const Facility = sequelize.define('facility',{
   id_facility :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_hotel:{
       type:Sequelize.INTEGER
   },
  name : {
    type : Sequelize.STRING,
    allowNull : false
  },
  description : {
    type : Sequelize.STRING,
    allowNull : false
  }
}
,{
  underscored : true
})

const Review = sequelize.define('review',{
   id_review :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   field_to_search:{
       type:Sequelize.STRING
   },
  name : {
    type : Sequelize.STRING,
    allowNull : false
  },
  text_review : {
    type : Sequelize.STRING,
    allowNull : false
  },
 image_user : {
    type : Sequelize.STRING
  },
  rating:{
      type:Sequelize.STRING
  },
  date_of_review:{
      type:Sequelize.STRING
  }
}
,{
  underscored : true
})

const Room = sequelize.define('room',{
   id_room :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_hotel:{
       type:Sequelize.INTEGER
   },
  type : {
    type : Sequelize.STRING,
    allowNull : false
  },
  price : {
    type : Sequelize.FLOAT,
    allowNull : false
  },
  rate : {
    type : Sequelize.STRING,
    allowNull : false
  },
   pictures: { 
        type: Sequelize.STRING, 
        get: function() {
            return JSON.parse(this.getDataValue('pictures'));
        }, 
        set: function(val) {
            return this.setDataValue('pictures', JSON.stringify(val));
        }
    }
}
,{
  underscored : true
})

const BookedRoom = sequelize.define('booked_room',{
   id_condition :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_room:{
       type:Sequelize.INTEGER
   },
  start_date:{
      type:Sequelize.STRING
  },
  end_date:{
      type:Sequelize.STRING
  }
}
,{
  underscored : true
})

const Booking = sequelize.define('booking',{
   id_booking :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_user:{
       type:Sequelize.INTEGER
   },
   id_room:{
       type:Sequelize.INTEGER
   },
   id_hotel:{
       type:Sequelize.INTEGER
   },
  total_price:{
      type:Sequelize.FLOAT
  },
  nr_rooms:{
      type:Sequelize.FLOAT
  },
  discount:{
    type:Sequelize.INTEGER  
  },
  start_date:{
      type:Sequelize.STRING
  },
  end_date:{
      type:Sequelize.STRING
  },
  type_of_payment:{
      type:Sequelize.STRING
  },
  amountPaid:{
      type:Sequelize.FLOAT
  },
  amountOwing:{
      type:Sequelize.FLOAT
  }
  
}
,{
  underscored : true
})

const Car = sequelize.define('car',{
   id_car :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   id_location:{
       type:Sequelize.INTEGER
   },
   model:{
       type:Sequelize.STRING,
       allowNull:false
   },
   car_type:{
       type:Sequelize.STRING,
       allowNull:false
   },
   manufacturer:{
       type:Sequelize.STRING,
       allowNull:false
   },
   year_of_fabrication:{
       type:Sequelize.INTEGER
   },
  price:{
      type:Sequelize.STRING
  },
  mileage:{
      type:Sequelize.INTEGER
  },
   picture: { 
        type: Sequelize.STRING, 
  
    },
	rate:{
		type:Sequelize.STRING
	}
}
,{
  underscored : true
})

const BookedCar = sequelize.define('booked_car',{
   id_booked :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
  id_car:{
       type:Sequelize.INTEGER
   },
  discount:{
    type:Sequelize.INTEGER  
  },
  pickup_date:{
      type:Sequelize.STRING
  },
  pickup_location:{
      type:Sequelize.STRING
  },
  dropoff_date:{
      type:Sequelize.STRING
  },
  dropoff_location:{
      type:Sequelize.STRING
  },
  type_of_payment:{
      type:Sequelize.STRING
  },
  total_price:{
      type:Sequelize.STRING
  }
}
,{
  underscored : true
})

const Attraction = sequelize.define('attraction',{
   id_attraction :{
     type:Sequelize.INTEGER, 
     allowNull:false,
     primaryKey:true,
     autoIncrement: true,
      validate: {
                isNumeric: true
            }
   },
   location:{
       type:Sequelize.STRING
   },
   name:{
       type:Sequelize.STRING,
       allowNull:false
   },
   type:{
       type:Sequelize.STRING,
       allowNull:false
   },
   description:{
       type:Sequelize.TEXT,
       allowNull:false
   },
  price:{
      type:Sequelize.STRING
  },
  opening_hours:{
      type:Sequelize.STRING
  },
  closing_hours:{
      type:Sequelize.STRING
  },
   pictures: { 
        type: Sequelize.TEXT, 
        get: function() {
            return JSON.parse(this.getDataValue('pictures'));
        }, 
        set: function(val) {
            return this.setDataValue('pictures', JSON.stringify(val));
        }
    },
   url_video:{
	   type:Sequelize.STRING
   },
   lang:{
	   type:Sequelize.STRING
   },
   long:{
	 type:Sequelize.STRING  
   },
   full_address:{
	   type:Sequelize.STRING,
	   allowNull:false
   },
   rate:{
	   type:Sequelize.STRING
   }
}
,{
  underscored : true
})

app.get('/create', (req, res, next) => {
  sequelize.sync({force : true})
    .then(() => res.status(201).send('created'))
    .catch((err) => next(err))
})

app.get('/users',(req, res, next) => {
  User.findAll()
    .then((users) => res.status(200).json(users))
    .catch((err) => next(err))
})

app.get('/user/:email/:password', (req, res, next) => {
   User.findAll({
  where: {
    email: req.params.email,
    password:req.params.password
  }})
  .then((user)=>{
     if(user) {res.status(200).json(user);
   }else
     res.status(404).send("Not found")
   }).catch((err)=>next(err))
})

app.post('/users',(req, res, next) => {
  User.create(req.body)
    .then((user) => res.status(201).json(req.body))
    .catch((err) => next(err))
})

app.put('/users/modify/:email/:password',(req, res, next) => {
   User.findAll({
  where: {
    email: req.params.email,
    password:req.params.password
  }})
   .then((user) => {
     if (user){
        return user.update(req.body, {fields : ['password','email','phone_number','address','type']})
      }else{
        res.status(404).send('Not found')
      }})
    .then(() => {
      if (!res.headersSent){
        res.status(201).send('Modified')
      }
    }).catch((err) => next(err))
})

app.get('/attractions/:location',(req, res, next) => {
	 Attraction.findAll({
  where: {
      location:req.params.location
  }}).then((attractions)=>{
     if(attractions) {res.status(200).json(attractions);
   }else
     res.status(404).send("Not found")
   }).catch((err)=>next(err))
  
})
 
app.post('/attractions',(req, res, next) => {
  Attraction.create(req.body)
    .then((user) => res.status(201).json(req.body))
    .catch((err) => next(err))
}) 

app.get('/reviews/:field_to_search',(req, res, next) => {
	 Review.findAll({
  where: {
      field_to_search:req.params.field_to_search
  }}).then((reviews)=>{
     if(reviews) {res.status(200).json(reviews);
   }else
     res.status(404).send("Not found")
   }).catch((err)=>next(err))
  
})

app.post('/reviews',(req, res, next) => {
  Review.create(req.body)
    .then((user) => res.status(201).json(req.body))
    .catch((err) => next(err))
})

app.use((err, req, res, next) => {
  console.warn(err)
  res.status(500).send(err)
})

app.listen(8080, () => console.log('Server running on port 8080'))