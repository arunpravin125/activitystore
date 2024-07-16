const express=require("express")
const  cors=require("cors")
const mongoose=require("mongoose")

const app =express()
app.use(cors())
app.use(express.json())

// const fruit =[""]

mongoose.connect("mongodb+srv://arunpravin125:okmijnuhb@cluster0.vbaicva.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0").then(function(){
    console.log("DB connect succsess")
}).catch(()=>console.log("DM Failed"))

const Fruit =mongoose.model("Fruit",{name:String},"fruit")

app.get("/fruitlist",function(req,res){

    Fruit.find().then(function(retrievedata){
        console.log(retrievedata.name)
        res.send(retrievedata)
    })
    // res.send(fruit)
})

app.post("/addfruit",function(req,res){
    var newfruit=req.body.newfruit
    
    const newFruit = new Fruit(
        {
            name:newfruit
        }
    );
    newFruit.save().then(()=>console.log("Save success"))
   
})


app.listen(5001,function(){
    console.log("Server Started...... :)")
})