import React from "react"
import logo from './logo.svg';
import './App.css';
import {TextMessage} from "parcel-demo-library-sample/esm/messagetypes/common/TextMessage"
 import {SeatMap} from "parcel-demo-library-sample/esm/messagetypes/common/SeatMap"

const message =  {
  type: "text",
  sender: "chatbot",
  inputLock: false,
  quickReplies: [],
  skipLS: false,
  send_variable_to_apiai: false,
  sendVariableToLS: false,
  variable_name: "",
  delay: 0,
  containsHTML: true,
  payload: [
    {
      text:
        "<p class='ori-font-bold'>Information about Ashoka comes from his own inscriptions </p><p>other inscriptions that mention him or are possibly from his reign; and ancient literature, especially Buddhist texts.[14] These sources often contradict each other, although various historians have attempted to correlate their testimony.[15] Plenty is known or not known, and so, for example, while Ashoka is often attributed with building many hospitals during his time, there is no clear evidence any hospitals existed in ancient India during the 3rd century BC or that Ashoka was responsible for commissioning the construction of any</p>"
    },
    {
      lang: "hindi",
      text: "Information about Ashoka comes from his own inscriptions; "
    }
  ],
  timestamp: new Date()
}

// // const seatMapMessage = {
//   type: "form",
//   sender: "chatbot",
//   inputLock: false,
//   quickReplies: [],
//   skipLS: false,
//   send_variable_to_apiai: false,
//   sendVariableToLS: false,
//   variable_name: "",
//   delay: 0,
//   payload: [
//     {
//       title: "seat Map title",
//       subtitle: "<p class='ori-font-light'>hello i am html title</p>",
//       randomSelection: true,
//       clearSelection: true,
//       submitButtonText: "Continue with recommendation for all",
//       selectedSeats: [
//         {
//           name: "Swati Bhatia",
//           seatNo: "1A",
//           cost : 123,
//           isAllowed: true,
//           type: "Super Practical",
//           color: ""
//         },
//         {
//           name: "Vanshika Bhatia",
//           seatNo: "2B",
//           cost: 123,
//           isAllowed: true,
//           type: "super Practical",
//           color: ""
//         },
//         {
//           name: "Harsh Bhagtani",
//           seatNo: "1C",
//           cost : 123,
//           isAllowed: true,
//           type: "super Practical",
//           color: ""
//         },
//         {
//           name:"Shweta Bhatia",
//           seatNo:"1D",
//           cost: 123,
//           isAllowed: true,
//           type: "super Practical",
//           color: ""
//         }
//       ],
//       passengerSelect: {
//         name: "Passenger Select",
//         placeholder: "Passenger Name",
//         required: false,
//         options: [
//           { label: "Swati Bhatia", value: "Swati Bhatia" },
//           { label: "Vanshika Bhatia", value: "Vanshika Bhatia" },
//           { label: "Harsh Bhagtani", value: "Harsh Bhagtani" },
//           { label: "Shweta Bhatia", value: "Shweta Bhatia" }
//         ]
//       },
//       seatArrangement: [
//         {
//           rowName: "A",
//           seats: [
//             {
//               name: "1A",
//               isAllowed: true,
//               cost: 123,
//               type: "Super Practical",
//               color: "##EB3F55"
//             },
//             {
//               name: "2A",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "3A",
//               isAllowed: true,
//               isNextGap: true,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55"
//             },
//             {
//               name: "4A",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "5A",
//               isAllowed: true,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55"
//             },
//             {
//               name: "6A",
//               isAllowed: true,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55"
//             }
//           ]
//         },
//         {
//           rowName: "B",
//           seats: [
//             {
//               name: "1B",
//               isAllowed: true,
//               cost: 123,
//               type: "super Practical",
//               color: "#2b589d"
//             },
//             {
//               name: "2B",
//               isAllowed: true,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55"
//             },
//             {
//               name: "3B",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55",
//               isNextGap: true,
//               status: "Reserved"
//             },
//             {
//               name: "4B",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "##EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "5B",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "6B",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#2b589d",
//               status: "Reserved"
//             }
//           ]
//         },
//         {
//           rowName: "C",
//           seats: [
//             {
//               name: "1C",
//               isAllowed: true,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55"
//             },
//             {
//               name: "2C",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "3C",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               isNextGap: true,
//               status: "Reserved"
//             },
//             {
//               name: "4C",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "5C",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "6C",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               status: "Reserved"
//             }
//           ]
//         },
//         {
//           rowName: "D",
//           seats: [
//             {
//               name: "1D",
//               isAllowed: true,
//               cost: 123,
//               type: "Super Practical",
//               color: "#EB3F55"
//             },
//             {
//               name: "2D",
//               isAllowed: false,
//               cost: 123,
//               type: "Super Practical",
//               isAllow: true,
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "3D",
//               cost: 123,
//               type: "Super Practical",
//               color: "#EB3F55",
//               isAllowed: false,
//               isNextGap: true,
//               status: "Lady Only"
//             },
//             {
//               name: "4D",
//               cost: 123,
//               type: "Super Practical",
//               isAllowed: true,
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "5D",
//               cost: 123,
//               type: "super Practical",
//               isAllowed: true,
//               color: "#EB3F55",
//               status: "Reserved"
//             },
//             {
//               name: "6D",
//               isAllowed: false,
//               cost: 123,
//               type: "super Practical",
//               color: "#EB3F55",
//               status: "Reserved"
//             }
//           ]
//         }
//       ]
//     }
//     // {
//     //   lang: "hindi",
//     //   title: "seat Map title in Hindi",
//     //   selectedSeatName: "1A",
//     //   recommendedSeats: [
//     //     {
//     //       name: "SB",
//     //       seatNo: "1A",
//     //     },
//     //     {
//     //       name: "VB",
//     //       seatNo: "2B",
//     //     },
//     //     {
//     //       name: "",
//     //       seatNo: "2A",
//     //     },
//     //     {
//     //       name:"",
//     //       seatNo:"3A",
//     //     }
//     //   ],
//     //   seatArrangement: [
//     //     {
//     //       rowName: "A",
//     //       seats: [
//     //         {
//     //           name: "1A",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "Super Practical",
//     //           color: "##EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "2A",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "##EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "3A",
//     //           isAllowed: true,
//     //           isNextGap: true,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#000"
//     //         },
//     //         {
//     //           name: "4A",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "##EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "5A",
//     //           isAllowed: true,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#000"
//     //         },
//     //         {
//     //           name: "6A",
//     //           isAllowed: true,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#000"
//     //         }
//     //       ]
//     //     },
//     //     {
//     //       rowName: "B",
//     //       seats: [
//     //         {
//     //           name: "1B",
//     //           isAllowed: true,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#2b589d"
//     //         },
//     //         {
//     //           name: "2B",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "##EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "3B",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "##EB3F55",
//     //           isNextGap: true,
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "4B",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "##EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "5B",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "6B",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#2b589d",
//     //           status: "Reserved"
//     //         }
//     //       ]
//     //     },
//     //     {
//     //       rowName: "C",
//     //       seats: [
//     //         {
//     //           name: "1C",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "2C",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "3C",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           isNextGap: true,
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "4C",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "5C",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "6C",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         }
//     //       ]
//     //     },
//     //     {
//     //       rowName: "D",
//     //       seats: [
//     //         {
//     //           name: "1D",
//     //           isAllowed: true,
//     //           cost: 123,
//     //           type: "Super Practical",
//     //           color: "#EB3F55"
//     //         },
//     //         {
//     //           name: "2D",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "Super Practical",
//     //           isAllow: true,
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "3D",
//     //           cost: 123,
//     //           type: "Super Practical",
//     //           color: "#EB3F55",
//     //           isAllowed: false,
//     //           isNextGap: true,
//     //           status: "Lady Only"
//     //         },
//     //         {
//     //           name: "4D",
//     //           cost: 123,
//     //           type: "Super Practical",
//     //           isAllowed: true,
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "5D",
//     //           cost: 123,
//     //           type: "super Practical",
//     //           isAllowed: true,
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         },
//     //         {
//     //           name: "6D",
//     //           isAllowed: false,
//     //           cost: 123,
//     //           type: "super Practical",
//     //           color: "#EB3F55",
//     //           status: "Reserved"
//     //         }
//     //       ]
//     //     }
//     //   ]
//     // }
//   ],
//   timestamp: new Date()
// // };
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextMessage message={message}/>
        {/* <SeatMap message={seatMapMessage}/> */}
      </header>
    </div>
  );
}

export default App;
