const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total sum={course.parts.reduce((total, part) =>
                    total + part.exercises, 0)} />
      </div>
    )
}

const Header = ({ course} ) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part => 
      <Part key={part.id} part={part} />
    )}
  </>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

export default Course