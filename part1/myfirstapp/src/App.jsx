const App = () => {
//constant definitions
  const course = 'Half Stack application development'
  const part1 = {
    name :'Fundamentals of react:',
    exercises : 10}
  const part2 = {
    name: 'Using props to pass data:',
    exercises: 7}
  const part3 = {
    name:'State of a component:',
    exercises: 14}
//component Header
  const Header = ()=> { 
    return(
      <h1>{course}</h1>
    )
  }
//component Content


//Component Total
//const Total = ()=> {
//  return(
//    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//  )
//}


  return (
    <div>
      <Header course={course}/>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App
