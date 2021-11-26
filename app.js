const express=require("express")
const app =express()
const cors=require("cors")
const { response, request } = require("express")
app.use(express.json())
app.use(cors())
app.listen(4000,console.log("server is running"))
const moviesData=[{name:"movie1",rating:4,releasedDate:"2021 june 21"},
    {name:"movie2",rating:3,releasedDate:"2020 april 21"},
    {name:"movie3",rating:3.6,releasedDate:"2020 march 21"},
    {name:"movie4",rating:2,releasedDate:"2020 may 21"},
    {name:"movie5",rating:2.3,releasedDate:"2020 april 21"},
    {name:"movie6",rating:4.3,releasedDate:"2020 july 21"},
    {name:"movie7",rating:3,releasedDate:"2020 jan 21"},
    {name:"movie8",rating:4,releasedDate:"2020 feb 21"},
    {name:"movie10",rating:2,releasedDate:"2021 may 21"},
    {name:"movie11",rating:2.3,releasedDate:"2021 april 21"},
    {name:"movie12",rating:4.3,releasedDate:"2021 july 21"},
    {name:"movie13",rating:3,releasedDate:"2021 jan 21"},
    {name:"movie14",rating:4,releasedDate:"2021 feb 21"}
]
app.get("/",(request,response)=>{
    response.send(moviesData)
})

app.get("/:movie",(request,response)=>{
    const {movie}=request.params
    const movieDetails=moviesData.filter(each=>each.name===movie)
    response.send(movieDetails)
})

app.post("/addmovie",(request,response)=>{
    const data=request.body
    moviesData.push(data)
    response.send(data)
})