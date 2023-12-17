import {useState} from "react";
import {toursData} from "../helpers/datatour";
import Tours from "../components/Tours";
import AppList from "../components/AppList";
import { bookedData } from "../helpers/bookeddata";

const Homepage=()=>{

    const [tours, setTours] = useState(toursData)
    const [booked, setBooked] = useState(bookedData)

    console.log(booked);
    console.log(tours)
    return (
        <main className="text-center mt-2 vh-100">
            <h1 className="display-5  fw-bold mt-3 " style={{color :"blue", fontFamily:"lobster"}}> ✈️ CLARUS TOURISM 🤽🏻‍♀️ </h1>
            <Tours tours={tours} booked={booked} setBooked={setBooked}/>
            <AppList booked={booked} setBooked={setBooked}/>
            
        </main>
    )
}

export default Homepage;