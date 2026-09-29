

export default function Courses({Courses}){
    return(
        <div>
            <h1>Our Courses</h1>
            {Courses.map((course)=>(
                <div key={course.id}>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <p><strong>Instructor:</strong> {course.instructor}</p>
                    <p><strong>Category:</strong> {course.category}</p>
                    <p><strong>Leval:</strong>
                        {course.leval}</p>
                    <p> <strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Students:</strong>{course.students}</p>
                    <p><strong>Lessons:</strong>{course.lessons}</p>
                    <p><strong>Status</strong>{course.status}</p>
                </div>
            ))}
        </div>
    )
}