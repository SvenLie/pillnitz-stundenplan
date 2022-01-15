import React, {useEffect} from 'react';
import {useCourseList} from "./useCourseList";
import {Form, FloatingLabel, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    const {courses, fetchCourseList} = useCourseList()

    useEffect(() => {
        fetchCourseList()
    }, [fetchCourseList])

    const handleSubmit = (event: any) => {


        const courseSelectElement = document.getElementById("course") as HTMLSelectElement
        const groupInputElement = document.getElementById("floatingGroup") as HTMLInputElement
        const linkElement = document.getElementById("link") as HTMLAnchorElement
        let link = "https://api.sven-liebert.de/htw-dresden/pillnitz/timetable-ical/"

        if (courseSelectElement && courseSelectElement.value) {
            link += courseSelectElement.value
        } else {
            event.preventDefault()
            event.stopPropagation()
            return
        }


        if (groupInputElement && groupInputElement.value) {
            link += "?group=" + groupInputElement.value
        }


        if (linkElement && link) {
            linkElement.setAttribute("href", link)
            linkElement.innerText = link

            if (linkElement.parentElement) {
                linkElement.parentElement.classList.remove('hidden')
            }
        }

        linkElement.scrollIntoView()
        event.preventDefault()
        event.stopPropagation()
    }

    return (
        <div className="App-content">
            <br/>
            <h4>Kalendergenerator für Studiengänge der HTW Dresden am Standort Pillnitz</h4>
            <br/>
            <Form onSubmit={handleSubmit}>
                <Form.Select id="course" required>
                    <option value="">Bitte wählen...</option>
                    {courses.map(course => <option key={course.id}
                                                   value={course.id}>{course.description}</option>)}
                </Form.Select>
                <br/>
                <>
                    <FloatingLabel
                        controlId="floatingGroup"
                        label="Gruppe (optional)"
                        className="mb-3"
                    >
                        <Form.Control type="number" placeholder="Gruppe"/>
                    </FloatingLabel>
                </>
                <Button type="submit">Kalender generieren</Button>
            </Form>
            <br/>
            <div className="result">
                <p>Anleitung für:</p>
                <ul>
                    <li><a href="https://support.apple.com/de-de/guide/iphone/iph3d1110d4/ios"
                           rel="noreferrer" target="_blank">iOS (Abschnitt "Kalender abonnieren" mit der
                        URL oben)</a></li>
                    <li><a
                        href="https://support.google.com/calendar/answer/37100?hl=de&co=GENIE.Platform%3DDesktop&oco=1"
                        rel="noreferrer" target="_blank">Android (Abschnitt "Öffentlichen Kalender über
                        einen Link hinzufügen")</a></li>
                </ul>
            </div>
            <p className="hidden">Link für das Kalenderabonnement: <a
                href="https://api.sven-liebert.de" id="link">https://api.sven-liebert.de</a></p>
        </div>
    )
}

export default Home