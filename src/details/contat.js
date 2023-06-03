import React,{useState} from "react";
const dataConat = [{
  "id": 1,
  "first_name": "Tear",
  "phone": "+2 4926054934"
}, {
  "id": 2,
  "first_name": "Dyers",
  "phone": "+1 5598189378"
}, {
  "id": 3,
  "first_name": "Coventry",
  "phone": "+9 4911977698"
}, {
  "id": 4,
  "first_name": "Cadden",
  "phone": "+4 7586837610"
}, {
  "id": 5,
  "first_name": "Ewbanks",
  "phone": "+5 6938794593"
}, {
  "id": 6,
  "first_name": "Hakewell",
  "phone": "+6 8223984467"
}, {
  "id": 7,
  "first_name": "Sebire",
  "phone": "+8 9905165289"
}, {
  "id": 8,
  "first_name": "Drayson",
  "phone": "+7 5619468771"
}, {
  "id": 9,
  "first_name": "Eisikowitch",
  "phone": "+1 1156045326"
}, {
  "id": 10,
  "first_name": "Kilby",
  "phone": "+4 1247042358"
}, {
  "id": 11,
  "first_name": "McCarry",
  "phone": "+5 4293328826"
}, {
  "id": 12,
  "first_name": "Salack",
  "phone": "+7 8977779441"
}, {
  "id": 13,
  "first_name": "Buttner",
  "phone": "+5 5735182077"
}, {
  "id": 14,
  "first_name": "Whatman",
  "phone": "+9 9145607810"
}, {
  "id": 15,
  "first_name": "Narracott",
  "phone": "+9 8634203207"
}, {
  "id": 16,
  "first_name": "Ashmole",
  "phone": "+7 7304514984"
}, {
  "id": 17,
  "first_name": "Gillooly",
  "phone": "+2 6396811132"
}, {
  "id": 18,
  "first_name": "Collough",
  "phone": "+4 5814912982"
}, {
  "id": 19,
  "first_name": "Barbrick",
  "phone": "+2 1212073263"
}, {
  "id": 20,
  "first_name": "Stallebrass",
  "phone": "+8 5478201565"
}, {
  "id": 21,
  "first_name": "Sorel",
  "phone": "+7 6358173372"
}, {
  "id": 22,
  "first_name": "Carmo",
  "phone": "+7 7726229292"
}, {
  "id": 23,
  "first_name": "Boutellier",
  "phone": "+5 5716819591"
}, {
  "id": 24,
  "first_name": "Wysome",
  "phone": "+1 1815870002"
}, {
  "id": 25,
  "first_name": "Wattingham",
  "phone": "+2 2688844832"
}, {
  "id": 26,
  "first_name": "Hodgen",
  "phone": "+1 1338410123"
}, {
  "id": 27,
  "first_name": "Sibille",
  "phone": "+6 5081526327"
}, {
  "id": 28,
  "first_name": "Harteley",
  "phone": "+5 2052011562"
}, {
  "id": 29,
  "first_name": "Dumini",
  "phone": "+4 3608975388"
}, {
  "id": 30,
  "first_name": "Ebdin",
  "phone": "+8 2903473752"
}, {
  "id": 31,
  "first_name": "Ondrak",
  "phone": "+2 2374831874"
}, {
  "id": 32,
  "first_name": "Martell",
  "phone": "+1 1377243658"
}, {
  "id": 33,
  "first_name": "Kondrat",
  "phone": "+3 4977228429"
}, {
  "id": 34,
  "first_name": "Mucklow",
  "phone": "+4 5064973676"
}, {
  "id": 35,
  "first_name": "Leer",
  "phone": "+5 5792938997"
}, {
  "id": 36,
  "first_name": "Hatt",
  "phone": "+7 7164656894"
}, {
  "id": 37,
  "first_name": "Halpine",
  "phone": "+5 5302066286"
}, {
  "id": 38,
  "first_name": "Maier",
  "phone": "+7 7918497785"
}, {
  "id": 39,
  "first_name": "Sidon",
  "phone": "+4 3892819215"
}, {
  "id": 40,
  "first_name": "Summerbell",
  "phone": "+5 1168820927"
}, {
  "id": 41,
  "first_name": "Ralfe",
  "phone": "+3 6644179997"
}, {
  "id": 42,
  "first_name": "Rate",
  "phone": "+4 8623546957"
}, {
  "id": 43,
  "first_name": "Hamson",
  "phone": "+3 7589911831"
}, {
  "id": 44,
  "first_name": "Scoines",
  "phone": "+5 2945607123"
}, {
  "id": 45,
  "first_name": "Tildesley",
  "phone": "+2 8238642812"
}, {
  "id": 46,
  "first_name": "Uc",
  "phone": "+1 1153483048"
}, {
  "id": 47,
  "first_name": "Sellwood",
  "phone": "+8 4673397971"
}, {
  "id": 48,
  "first_name": "Gynne",
  "phone": "+6 2417885405"
}, {
  "id": 49,
  "first_name": "Chinnick",
  "phone": "+2 9949032459"
}, {
  "id": 50,
  "first_name": "Sloy",
  "phone": "+9 6982127790"
}];
function Contacts(){
    const [search,setSearch] = useState();
    return(
        <>
         <center>
            <h5>Search Contact name : </h5>
            <input type='text' value={search} placeholder=" Enter here displays 👇"
            onChange={(e)=>setSearch(e.target.value)} style={{outline:'none'}}/>
            <br/>
              <table>
                {
                dataConat.filter(enter =>enter.first_name.toLowerCase().includes(search)).map((enter)=>(
                    <><br/>
                    <tr key ={enter.id} style={{display:"flex",justifyContent:"space-evenly",gap:'1rem',whiteSpace:'nowrap'}}>
                     <tb>{enter.first_name}</tb>
                     <tb>{enter.phone}</tb>
                    </tr>
                    </>
                ))
                }
              </table>
         </center>
        </>
    )
}
export default Contacts