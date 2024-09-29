import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FloatingLabel, Form, Row, Alert} from "react-bootstrap";
import {useModuleList} from "./useModuleList";

const Campus = () => {
    const {modules, fetchModuleList} = useModuleList()
    const [ignoredModules, setIgnoredModules] = useState<string[]>([])

    const handleSubmit = (event: any) => {
        const studentNumberInputElement = document.getElementById("studentNumber") as HTMLInputElement
        const createCalendarFormElement = document.getElementById("create-calendar-form") as HTMLFormElement
        fetchModuleList(studentNumberInputElement.value)

        createCalendarFormElement.classList.remove('hidden')

        event.preventDefault()
        event.stopPropagation()
    }

    const ignoreModuleChange = (event: any) => {
        const moduleNumber: string = event.target.value
        const checked: boolean = event.target.checked

        if(checked) {
            setIgnoredModules([...ignoredModules, moduleNumber])
        } else {
            setIgnoredModules(ignoredModules.filter((id) => id !== event.target.value))
        }
    }

    const createCalendarLink = (event: any) => {
        const studentNumberInputElement = document.getElementById("studentNumber") as HTMLInputElement
        const linkElement = document.getElementById("link") as HTMLAnchorElement
        let link = "https://api.svenliebert.de/htw-dresden/timetable-ical/"

        if (studentNumberInputElement && studentNumberInputElement.value) {
            link += "?matNumber=" + studentNumberInputElement.value
        } else {
            event.preventDefault()
            event.stopPropagation()
            return
        }

        link += "&ignoredModules=" + ignoredModules.toString()

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
            <h1>Kalendergenerator für Studiengänge der HTW Dresden am Hauptcampus</h1>
            <br/>
            <Form onSubmit={handleSubmit}>
                <>
                    <FloatingLabel
                        controlId="studentNumber"
                        label="Matrikelnummer"
                        className="mb-3"
                    >
                        <Form.Control type="number" required placeholder="Matrikelnummer"/>
                    </FloatingLabel>
                </>
                <Button type="submit">Module laden</Button>
            </Form>
            <br />
            <Form id="create-calendar-form" className="hidden" onSubmit={createCalendarLink}>
                <>
                    <Alert key="warning" variant="warning">
                        In der Liste der Module tauchen einige doppelt auf, wenn einige Veranstaltungen in einem Modul mit einem anderen Studiengang zusammen durchgeführt werden, jedoch andere nicht.
                    </Alert>
                    <Form.Group as={Row} className="mb-3" controlId="checkbox">
                        <Form.Label sm="2" column>
                            <b>Zu ignorierende Module:</b>
                        </Form.Label>
                        {Object.keys(modules).map((item: string) => (
                            <>
                                <div key={item} className="mb-3">
                                    <Form.Check // prettier-ignore
                                        type="checkbox"
                                        id={item}
                                        onChange={ignoreModuleChange}
                                        label={`${modules[item as any].module} (${item})`}
                                        value={item}
                                    />
                                </div>
                            </>
                        ))}
                    </Form.Group>
                    <Button type="submit">Kalenderlink erstellen</Button>

                </>
            </Form>
            <br/>
            <p className="hidden">Link für das Kalenderabonnement: <a
                href="https://api.svenliebert.de" id="link">https://api.svenliebert.de</a></p>
            <br />
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
        </div>
    )
}

export default Campus
