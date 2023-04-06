import {Link} from 'react-router-dom'

const modules = import.meta.glob('./*.tsx')

const slides = Object.keys(modules).map(m => m.match(/\.\/(.*)\.tsx/)?.[1])

export default function App() {
  return (
    <div>
      <h1>Slides</h1>
      <ul>
        {slides.map(slide => (
          <li key={slide}>
            <Link to={`/${slide}`}>{slide}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
