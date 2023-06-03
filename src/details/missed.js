import React from "react";
const dataMiss = [{
  "id": 1,
  "first_name": "Loving",
  "phone": "+3 3446873511",
  "time": "10:19 PM",
  "date": "10/26/2022"
}, {
  "id": 2,
  "first_name": "Aldhous",
  "phone": "+8 8288419578",
  "time": "8:11 AM",
  "date": "1/13/2023"
}, {
  "id": 3,
  "first_name": "McLarnon",
  "phone": "+3 3055926886",
  "time": "10:40 PM",
  "date": "11/16/2022"
}, {
  "id": 4,
  "first_name": "Duffie",
  "phone": "+2 2671750680",
  "time": "8:07 PM",
  "date": "6/10/2022"
}, {
  "id": 5,
  "first_name": "Chapple",
  "phone": "+3 5926683670",
  "time": "12:27 PM",
  "date": "6/12/2022"
}, {
  "id": 6,
  "first_name": "Lear",
  "phone": "+7 6556851100",
  "time": "1:34 AM",
  "date": "1/15/2023"
}, {
  "id": 7,
  "first_name": "Sedgemond",
  "phone": "+8 5522699685",
  "time": "1:58 AM",
  "date": "5/8/2023"
}, {
  "id": 8,
  "first_name": "Rumin",
  "phone": "+3 7226029022",
  "time": "10:34 PM",
  "date": "8/25/2022"
}, {
  "id": 9,
  "first_name": "Jobern",
  "phone": "+3 5934086056",
  "time": "6:43 AM",
  "date": "9/30/2022"
}, {
  "id": 10,
  "first_name": "Moline",
  "phone": "+5 3905815307",
  "time": "2:12 PM",
  "date": "12/16/2022"
}, {
  "id": 11,
  "first_name": "Danskine",
  "phone": "+2 9994777707",
  "time": "10:07 PM",
  "date": "10/13/2022"
}, {
  "id": 12,
  "first_name": "Messruther",
  "phone": "+4 5313113781",
  "time": "8:23 AM",
  "date": "4/25/2023"
}, {
  "id": 13,
  "first_name": "Gumey",
  "phone": "+5 5215274709",
  "time": "8:58 AM",
  "date": "5/22/2023"
}, {
  "id": 14,
  "first_name": "Keld",
  "phone": "+8 7403587145",
  "time": "7:18 AM",
  "date": "4/2/2023"
}, {
  "id": 15,
  "first_name": "Coggill",
  "phone": "+6 9711111663",
  "time": "12:20 AM",
  "date": "6/14/2022"
}, {
  "id": 16,
  "first_name": "Sirr",
  "phone": "+8 5508606487",
  "time": "4:54 PM",
  "date": "9/1/2022"
}, {
  "id": 17,
  "first_name": "Peperell",
  "phone": "+1 7016333937",
  "time": "9:24 PM",
  "date": "9/5/2022"
}, {
  "id": 18,
  "first_name": "Doumerque",
  "phone": "+7 6379343438",
  "time": "2:06 AM",
  "date": "8/20/2022"
}, {
  "id": 19,
  "first_name": "Gumm",
  "phone": "+3 5166314016",
  "time": "4:37 PM",
  "date": "7/23/2022"
}, {
  "id": 20,
  "first_name": "MacFadzean",
  "phone": "+5 6475726295",
  "time": "5:03 AM",
  "date": "11/11/2022"
}, {
  "id": 21,
  "first_name": "Kulas",
  "phone": "+9 4413759869",
  "time": "8:54 PM",
  "date": "7/28/2022"
}, {
  "id": 22,
  "first_name": "Temblett",
  "phone": "+3 2955909344",
  "time": "1:18 AM",
  "date": "3/16/2023"
}, {
  "id": 23,
  "first_name": "O'Neal",
  "phone": "+2 1716044544",
  "time": "9:10 AM",
  "date": "3/15/2023"
}, {
  "id": 24,
  "first_name": "Vanes",
  "phone": "+9 6173676318",
  "time": "1:00 PM",
  "date": "7/15/2022"
}, {
  "id": 25,
  "first_name": "Kroin",
  "phone": "+8 3141492473",
  "time": "4:12 AM",
  "date": "6/11/2022"
}, {
  "id": 26,
  "first_name": "Tripet",
  "phone": "+7 5871676483",
  "time": "3:58 AM",
  "date": "12/24/2022"
}, {
  "id": 27,
  "first_name": "Bence",
  "phone": "+1 3605194401",
  "time": "7:12 AM",
  "date": "6/28/2022"
}, {
  "id": 28,
  "first_name": "Slaten",
  "phone": "+9 5607278549",
  "time": "12:08 PM",
  "date": "6/6/2022"
}, {
  "id": 29,
  "first_name": "Spiby",
  "phone": "+6 7316084211",
  "time": "8:14 AM",
  "date": "1/26/2023"
}, {
  "id": 30,
  "first_name": "Frier",
  "phone": "+2 8707009029",
  "time": "6:59 PM",
  "date": "11/5/2022"
}];
function Missed(){
    return(
      <center>
        <table>
          {
            dataMiss.map((miss_in)=>(
                <tr key={miss_in.id} style={{display:'flex',justifyContent:"space-evenly", gap:'1rem',color:"red"}}>
   
                  <span id="span1">
                    <td>{miss_in.first_name}</td>
                    <td>{miss_in.phone}</td>
                  </span>
                  <span id="span2">
                    <td>{miss_in.date}</td>
                    <td>{miss_in.time}</td>
                  </span>
                
                </tr>
            ))
          }
        </table><br/>
        </center>
    )
}
export default Missed