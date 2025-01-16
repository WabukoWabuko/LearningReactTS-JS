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


function Item({ name, isPacked }) {
  if (isPacked){return <li className="items">{name} ✅</li>;}
  return <li className="items">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
