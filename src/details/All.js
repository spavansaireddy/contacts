import React from "react";
import './All.css';
const dataAll = [{
  "id": 1,
  "first_name": "Broe",
  "phone": "+5 4636271530",
  "time": "11:56 PM",
  "date": "6/17/2022"
}, {
  "id": 2,
  "first_name": "Josephs",
  "phone": "+5 8411656252",
  "time": "6:09 PM",
  "date": "4/27/2023"
}, {
  "id": 3,
  "first_name": "Abbey",
  "phone": "+9 6111497192",
  "time": "8:02 PM",
  "date": "8/29/2022"
}, {
  "id": 4,
  "first_name": "Kendle",
  "phone": "+6 7026725487",
  "time": "1:55 AM",
  "date": "1/3/2023"
}, {
  "id": 5,
  "first_name": "Breacher",
  "phone": "+7 2095753012",
  "time": "1:47 PM",
  "date": "3/21/2023"
}, {
  "id": 6,
  "first_name": "Vaughton",
  "phone": "+8 7148084893",
  "time": "11:15 AM",
  "date": "12/26/2022"
}, {
  "id": 7,
  "first_name": "Caffin",
  "phone": "+8 1285398203",
  "time": "8:15 AM",
  "date": "7/28/2022"
}, {
  "id": 8,
  "first_name": "MacShirie",
  "phone": "+7 4115622575",
  "time": "4:45 PM",
  "date": "6/17/2022"
}, {
  "id": 9,
  "first_name": "Torrance",
  "phone": "+8 9562863810",
  "time": "2:55 AM",
  "date": "3/4/2023"
}, {
  "id": 10,
  "first_name": "Pinckard",
  "phone": "+86 2409571829",
  "time": "6:42 PM",
  "date": "4/8/2023"
}, {
  "id": 11,
  "first_name": "Guy",
  "phone": "+7 6193737924",
  "time": "7:15 AM",
  "date": "3/21/2023"
}, {
  "id": 12,
  "first_name": "Backhouse",
  "phone": "+2 8838088184",
  "time": "11:56 AM",
  "date": "3/26/2023"
}, {
  "id": 13,
  "first_name": "Gilchrest",
  "phone": "+4 5002985224",
  "time": "10:43 AM",
  "date": "11/30/2022"
}, {
  "id": 14,
  "first_name": "Paternoster",
  "phone": "+6 2833932284",
  "time": "9:56 AM",
  "date": "10/23/2022"
}, {
  "id": 15,
  "first_name": "Matfin",
  "phone": "+8 6954848296",
  "time": "9:35 PM",
  "date": "4/27/2023"
}, {
  "id": 16,
  "first_name": "Sewards",
  "phone": "+5 1808863138",
  "time": "8:12 PM",
  "date": "8/15/2022"
}, {
  "id": 17,
  "first_name": "Kettlesting",
  "phone": "+1 3158947676",
  "time": "1:50 PM",
  "date": "7/9/2022"
}, {
  "id": 18,
  "first_name": "Keyes",
  "phone": "+6 7232775275",
  "time": "6:15 AM",
  "date": "10/12/2022"
}, {
  "id": 19,
  "first_name": "Charrette",
  "phone": "+5 5133879740",
  "time": "12:04 AM",
  "date": "2/17/2023"
}, {
  "id": 20,
  "first_name": "Grubbe",
  "phone": "+4 567863040",
  "time": "1:39 AM",
  "date": "12/27/2022"
}, {
  "id": 21,
  "first_name": "Sisley",
  "phone": "+7 7706734352",
  "time": "7:02 AM",
  "date": "7/18/2022"
}, {
  "id": 22,
  "first_name": "Carville",
  "phone": "+3 3106136396",
  "time": "11:47 PM",
  "date": "9/5/2022"
}, {
  "id": 23,
  "first_name": "Feeney",
  "phone": "+8 4222775563",
  "time": "12:09 PM",
  "date": "3/5/2023"
}, {
  "id": 24,
  "first_name": "Bodsworth",
  "phone": "+5 7856535343",
  "time": "6:03 PM",
  "date": "8/30/2022"
}, {
  "id": 25,
  "first_name": "Klampk",
  "phone": "+8 1259308323",
  "time": "6:55 PM",
  "date": "12/15/2022"
}, {
  "id": 26,
  "first_name": "Carnalan",
  "phone": "+4 1848239153",
  "time": "4:57 PM",
  "date": "7/4/2022"
}, {
  "id": 27,
  "first_name": "Hammel",
  "phone": "+2 3415351079",
  "time": "6:58 AM",
  "date": "8/3/2022"
}, {
  "id": 28,
  "first_name": "Charopen",
  "phone": "+8 1342855112",
  "time": "3:12 PM",
  "date": "8/3/2022"
}, {
  "id": 29,
  "first_name": "Bortoluzzi",
  "phone": "+8 1758735745",
  "time": "3:22 AM",
  "date": "4/23/2023"
}, {
  "id": 30,
  "first_name": "Sommerlin",
  "phone": "+8 2454009915",
  "time": "5:57 PM",
  "date": "11/5/2022"
}, {
  "id": 31,
  "first_name": "Cisneros",
  "phone": "+3 3912192923",
  "time": "3:17 AM",
  "date": "7/6/2022"
}, {
  "id": 32,
  "first_name": "Firk",
  "phone": "+2 4156331701",
  "time": "5:34 AM",
  "date": "8/16/2022"
}, {
  "id": 33,
  "first_name": "Stearndale",
  "phone": "+2 4122705595",
  "time": "2:21 AM",
  "date": "9/7/2022"
}, {
  "id": 34,
  "first_name": "Brickell",
  "phone": "+5 2501866687",
  "time": "2:51 PM",
  "date": "3/14/2023"
}, {
  "id": 35,
  "first_name": "Bendell",
  "phone": "+8 6532303796",
  "time": "12:13 PM",
  "date": "12/10/2022"
}, {
  "id": 36,
  "first_name": "Thoma",
  "phone": "+3 5749283062",
  "time": "3:53 AM",
  "date": "5/9/2023"
}, {
  "id": 37,
  "first_name": "Francom",
  "phone": "+8 2652162443",
  "time": "9:53 AM",
  "date": "3/9/2023"
}, {
  "id": 38,
  "first_name": "Toping",
  "phone": "+8 3663350644",
  "time": "5:41 AM",
  "date": "9/22/2022"
}, {
  "id": 39,
  "first_name": "Rudge",
  "phone": "+6 8912642414",
  "time": "11:23 PM",
  "date": "4/12/2023"
}, {
  "id": 40,
  "first_name": "Gotts",
  "phone": "+5 4478604290",
  "time": "6:19 AM",
  "date": "5/31/2023"
}];
function All(){
    return(
        <center>
        <table>
          {
            dataAll.map((all_in)=>(
                <tr key={all_in.id} className="all_in">
                 <span id='span1'>
                    <td>{all_in.first_name}</td>
                    <td>{all_in.phone}</td>
                 </span>
                 <span id="span2">
                    <td>{all_in.date}</td>
                    <td>{all_in.time}</td>
                 </span>
                </tr>
            ))
          }
         
        </table>
        <br/>
        </center>
        
    )
}
export default All