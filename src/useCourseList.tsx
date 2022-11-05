import {useState} from "react";

export type Course = {
    id: number,
    description: string
}

export const useCourseList = () => {
    const [courses, setCourses] = useState<Array<Course>>([])

    const fetchCourseList = () => {
        fetch('https://api.svenliebert.de/htw-dresden/pillnitz/courses').then(response => {

            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).then(
            (courses: Array<Course>) => setCourses(courses)
        )
    }

    return {courses, fetchCourseList}
}