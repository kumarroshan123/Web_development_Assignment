import Greetings from './components/Greetings'

function App() {
  let peopleGreetings = [
    { greeting: "Hello", name: "Alice" },
    { greeting: "Hi", name: "Bob" },
    { greeting: "Good morning", name: "Charlie" },
    { greeting: "Hey", name: "Diana" },
    { greeting: "Greetings", name: "Ethan" },
    { greeting: "What's up", name: "Fiona" },
    { greeting: "Howdy", name: "George" },
    { greeting: "Good afternoon", name: "Hannah" },
    { greeting: "Yo", name: "Ian" },
    { greeting: "Welcome", name: "Jasmine" }
  ];
  return (
    <>
     {peopleGreetings.map((ele,i)=>{ 
              return <Greetings key={i} name={ele.name} greeting={ele.greeting}  />
           }) }
    </>
  )
}

export default App
