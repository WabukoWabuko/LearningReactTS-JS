// // import MyName from "./MyName"
// import Gallery from "./Gallery"
// import { Profile } from "./Gallery"

// export default function App() {

//   return (
//     <>
//       <Gallery/>
//       <Profile/>
//       {/* <h1>React and Vite kickstart</h1>
//       <h1>Officially Starting on a serious note.</h1>
//       <MyName name="Trendafilova"/> */}
//     </>
//   )
// }

// // export default App


// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {isPacked ? name + "✅" : name}
//     </li>
//   )
//   // if (isPacked){return <li className="items">{name} ✅</li>;}
//   // return <li className="items">{name}</li>;
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={false} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//     </section>
//   );
// }

// Rendering data from Arrays

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];


export default function List() {
  // Assigning a variable to mapped data
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}

// for array lists with mapping the command is below:
// const variableNameOfList = variableName.map(variableName => variableName.keyOfItems)
// and when filtering we use === sign
// const variableNameOfList = variableName.map(variableName => variableName.keyOfItems === "whateverIsBeingFiltered")