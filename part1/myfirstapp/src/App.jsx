const App = () => {
    //constant definitions
    const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name :'Fundamentals of react:',
    exercises : 10
    }, 
    {
    name: 'Using props to pass data:',
    exercises: 7
    }, 
    {
    name:'State of a component:',
    exercises: 14
    }
    ]
    }
    
    //component Header
    const headr = course.name
    const Header = ()=> { 
    return(
      <h1>{headr}</h1>
    )
    }

    //component Content
    const parts = course.parts
    const Content = ({parts}) =>
    <>
        {parts.map((part,index) => 
          <p key={index}>{part.name} {part.exercises}</p>
        )}
    </>

    //Component Total
  const Total1 = parts.map(part1 => part1.exercises).reduce((acc,curr) => {return acc + curr},0)
  const Total = ({parts}) =>
    <>
      <p> Number of exercises {Total1} </p>
    </>

return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
    )
   
}

export default App