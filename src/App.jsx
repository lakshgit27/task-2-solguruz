import React, {useState,useEffect} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Step-1- Making-Importing the dummy json data
          // the deault value of id-2 has set "true" , rest all are false
 const seatsData = [
  {id:1,seatNumber:"A1", booked:false},
  {id:2,seatNumber:"A1", booked:true},
  {id:3,seatNumber:"A1", booked:false},
  {id:4,seatNumber:"A1", booked:false},
  {id:5,seatNumber:"A1", booked:false},
  {id:6,seatNumber:"A1", booked:false},
  {id:7,seatNumber:"A1", booked:false},
  {id:8,seatNumber:"A1", booked:false},
  {id:9,seatNumber:"A1", booked:false},
  {id:10,seatNumber:"A1", booked:false},
  {id:11,seatNumber:"A1", booked:false},
  {id:12,seatNumber:"A1", booked:false},
  // You can modify the data as per your requirement
 ]

//  Defining 3 state variables for storing our data
 

function SeatSelection() {
 const[numSeats,setNumSeats] = useState(0);  // for showing the number of seats
 const[selectedSeats,setSelectedSeats] = useState([]);   // for showing the number of selected seats
 const[BookedSeats,setBookedSeats] = useState([]);       // for showing the booked seats after successfull submit
 const[seats,setSeats] = useState(seatsData);           // storing all the dummy json data


 useEffect(()=>{
  //  For storing the dummy data in the local storage we're using the useEffect hook.
        const storedSeatsData = JSON.parse(localStorage.getItem("seatsData"));
           if(storedSeatsData){
            setSeats(storedSeatsData);
           }
 })
  

  return (
    <>
    <div>
      <h1 className="selectedseating">Seat Selection Task</h1>
      <form>
       <div className="input-group mb-3">
        <label htmlFor="numSeats"></label>
        <input type="number" id="numSeats" name="numSeats" value={numSeats} className="form-control"
            placeholder="Enter No. of Seats"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"></input>
            <input
            type="submit"
            className="btn btn-outline-secondary"
            id="button-addon2"
          />

        </div>

      </form>

    </div>
      
    </>
  )
}

export default SeatSelection
