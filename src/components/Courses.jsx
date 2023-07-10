import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/courses'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

const Courses = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const query = queryString.parse(location.search)
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  )

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey(undefined)
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? 'Courses sorted by ' + sortKey : 'Courses'}</h1>
      <ul>
        {sortedCourses.map((course) => (
          <li key={course.id}>
            <NavLink to={course.slug}>{course.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Courses
