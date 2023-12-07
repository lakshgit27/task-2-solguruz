import React, {useState,useEffect} from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Step-1- Making-Importing the dummy json data
          // the deault value of id-2 has set "true" , rest all are false
 const seatsData = [
  {id:1,seatNumber:"A1", booked:false},
  {id:2,seatNumber:"B1", booked:true},
  {id:3,seatNumber:"C1", booked:false},
  {id:4,seatNumber:"A2", booked:false},
  {id:5,seatNumber:"B2", booked:false},
  {id:6,seatNumber:"C2", booked:false},
  {id:7,seatNumber:"A3", booked:false},
  {id:8,seatNumber:"B3", booked:false},
  {id:9,seatNumber:"C3", booked:false},
  {id:10,seatNumber:"A4", booked:false},
  {id:11,seatNumber:"B4", booked:false},
  {id:12,seatNumber:"C4", booked:false},
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
 },[]);

//  Now, after mapping the items , both the methods declared over there has been defined here

 const handleInputChange = (e)=>{
  setNumSeats(parseInt(e.target.value));
 };

const toggleSeatSelection = (seatId)=>{
  const updatedSeats =seats.map((seat)=>{
    if(
      seat.id ===seatId && 
      !seat.booked && selectedSeats.length< numSeats
    ) {
      return {...seat,booked:!seat.booked}
    }
    return seat;

  });
  // Assigning all the values to my data state - setSeats
  setSeats(updatedSeats);
  localStorage.setItem("seatsData", JSON.stringify(updatedSeats))
};

// Form Submission method 
  const handleFormSubmit=(e)=>{
    e.preventDefault();

  };
// After successfully submitting the data, displaying the data by - 
const sumbiteddata = () =>{
  let res = seats.filter((seat) => seat.booked)
  .map((seat) => seat.id);
  console.log(res);
  setBookedSeats(res)
}
  

  return (
    <>
    <div>
      {/* Created an form with input as number (seats) and submit button to confirm the seats, the decoration has been done with bootstrap */}
      <h1 className="selectedseating">Seat Selection Task</h1>
      <form onSubmit={handleFormSubmit}>
       <div className="input-group mb-3">
        <label htmlFor="numSeats"></label>
        <input type="number" id="numSeats" name="numSeats" value={numSeats} onChange={handleInputChange} className="form-control"
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
      <div className="main-container">
        <div className="legends">
        <div className="seat" id="selected">
            Selected
          </div>
          <div className="seat" id="booked">
            Booked
          </div>
          <div className="seat" id="available">
            Available
          </div>

        </div>
        {/* Now, below has done mapping of the seating data and using ternary operator done the work. Additionally, attached an onclick handler with name {toggleSeatSelection} which will be defined above*/}
        <div className="seatMa">
          {/* {JSON.stringify(seats)} */}
          {seats.map((seat) => (
            <>
           
              <div
                key={seat.id}
                className={`seat ${
                  seat.booked
                    ? "booked"
                    : selectedSeats.includes(seat.id)
                    ? "selected"
                    : "available"
                }`}
                onClick={() => toggleSeatSelection(seat.id)}
              >
                {seat.seatNumber}
              </  div>
              
            </>
          ))}
        </div>
        <div className="disp-flex">
        {BookedSeats.map((bseat) => (
            <>
            
              <div key={bseat.id} className=" box"  >
                {bseat}
              </div>
            </>
          ))}
        </div>
        <div className="Submit-button">
          <button className="submitted" onClick={sumbiteddata}>Submit</button>

        </div>
      </div>

    </div>
      
    </>
  )
}

export default SeatSelection
