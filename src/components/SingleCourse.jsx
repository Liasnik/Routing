import { Link, useParams, useNavigate } from 'react-router-dom'
import courses from '../data/courses'
import { useEffect } from 'react'

const SingleCourse = () => {
  const params = useParams()
  const navigate = useNavigate()

  const course = courses.find((course) => course.slug === params.slug)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  // // Simply show NotFound component
  // if (!course) {
  //   return <NotFound />
  // }

  return (
    <>
      <h2>Single Course Info</h2>
      <h1>{course?.title}</h1>
      <h3>slug: {course?.slug}</h3>
      <h3>id: {course?.id}</h3>
      <Link to=".." relative="path">
        All courses
      </Link>
      <br />
      {/* <Link to="/courses">All courses</Link> */}
    </>
  )
}

export default SingleCourse
