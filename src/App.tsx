import React, {useEffect} from 'react';
import './App.scss';
import {useCourseList} from "./useCourseList";
import {Form, FloatingLabel, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, NavLink, Switch, Route, Redirect} from "react-router-dom";

function App() {

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
        <BrowserRouter>
            <div>
                <nav>
                    <ul className="navigation">
                        <li className="navigation-item">
                            <NavLink activeClassName="active" to="/home">Home</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="active" to="/datenschutz">Datenschutz</NavLink>
                        </li>
                        <li className="navigation-item">
                            <NavLink activeClassName="active" to="/impressum">Impressum</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>

                    <Route path="/datenschutz">
                        <div className="App-content">
                            <br/>
                            <h4>Datenschutz</h4>
                            <br/>
                            <h5>1. Datenschutz auf einen Blick</h5>
                            <h6>Allgemeine Hinweise</h6> <p>Die folgenden Hinweise geben einen einfachen Überblick
                            darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
                            können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
                            Text aufgeführten Datenschutzerklärung.</p>
                            <h6>Datenerfassung auf dieser Website</h6> <h4>Wer ist verantwortlich für die Datenerfassung
                            auf dieser Website?</h4> <p>Die Datenverarbeitung auf dieser Website erfolgt durch den
                            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt "Hinweis zur Verantwortlichen
                            Stelle" in dieser Datenschutzerklärung entnehmen.</p> <h4>Wie erfassen wir Ihre Daten?</h4>
                            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann
                                es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p> <p>Andere
                            Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
                            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
                            Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                            automatisch, sobald Sie diese Website betreten.</p> <h4>Wofür nutzen wir Ihre Daten?</h4>
                            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
                                werden.</p> <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4> <p>Sie haben
                            jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die
                            Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                            Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
                            widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                            Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p> <p>Hierzu sowie zu weiteren
                            Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
                            <h5>2. Hosting</h5>
                            <h6>Externes Hosting</h6> <p>Diese Website wird bei einem externen Dienstleister gehostet
                            (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
                            Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen,
                            Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                            sonstige Daten, die über eine Website generiert werden, handeln.</p> <p>Der Einsatz des
                            Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                            bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                            und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter
                            (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde,
                            erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und §
                            25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
                            Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG
                            umfasst. Die Einwilligung ist jederzeit widerrufbar.</p> <p>Unser Hoster wird Ihre Daten nur
                            insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und
                            unsere Weisungen in Bezug auf diese Daten befolgen.</p> <p>Wir setzen folgenden Hoster
                            ein:</p>
                            <p>uberspace.de</p>
                            <h5>3. Allgemeine Hinweise und Pflichtinformationen</h5>
                            <h6>Datenschutz</h6> <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
                            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
                            den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p> <p>Wenn Sie
                            diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                            Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
                            erläutert auch, wie und zu welchem Zweck das geschieht.</p> <p>Wir weisen darauf hin, dass
                            die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                            möglich.</p>
                            <h6>Hinweis zur verantwortlichen Stelle</h6> <p>Die verantwortliche Stelle für die
                            Datenverarbeitung auf dieser Website ist:</p> <p>Sven Liebert<br/>
                            Gasteiner Str. 11<br/>
                            01279 Dresden</p>

                            <p>E-Mail: mail@sven-liebert.de</p>
                            <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
                                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                                Daten (z. B. Namen, E-Mail-Adressen o. ä.) entscheidet.</p>

                            <h6>Speicherdauer</h6> <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
                            für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                            oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                            wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                            Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten
                            Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                            <h6>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser
                                Website</h6> <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir
                            Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2
                            lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden.
                            Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr
                            Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung
                            zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
                            Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
                            erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                            Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen
                            Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                            Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs.
                            1 lit. f DSGVO erfolgen. über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird
                            in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
                            <h6>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h6> <p>Viele
                            Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                            können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis
                            zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                            <h6>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
                                (Art. 21 DSGVO)</h6> <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                            E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRüNDEN, DIE SICH AUS IHRER
                            BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
                            WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FüR EIN AUF DIESE BESTIMMUNGEN GESTüTZTES PROFILING.
                            DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                            DATENSCHUTZERKLäRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN
                            PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KöNNEN ZWINGENDE
                            SCHUTZWüRDIGE GRüNDE FüR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                            FREIHEITEN üBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSüBUNG ODER
                            VERTEIDIGUNG VON RECHTSANSPRüCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p> <p>WERDEN
                            IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
                            RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN
                            ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FüR DAS PROFILING, SOWEIT ES MIT
                            SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE
                            PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
                            (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                            <h6>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h6> <p>Im Falle von Verstößen
                            gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
                            insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder
                            des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet
                            anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                            <h6>Recht auf Datenübertragbarkeit</h6> <p>Sie haben das Recht, Daten, die wir auf Grundlage
                            Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder
                            an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern
                            Sie die direkte übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt
                            dies nur, soweit es technisch machbar ist.</p>
                            <h6>SSL- bzw. TLS-Verschlüsselung</h6> <p>Diese Seite nutzt aus Sicherheitsgründen und zum
                            Schutz der übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen,
                            die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
                            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                            "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
                            <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
                                übermitteln, nicht von Dritten mitgelesen werden.</p>
                            <h6>Auskunft, Löschung und Berichtigung</h6> <p>Sie haben im Rahmen der geltenden
                            gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                            Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                            sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns
                            wenden.</p>
                            <h6>Recht auf Einschränkung der Verarbeitung</h6> <p>Sie haben das Recht, die Einschränkung
                            der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                            jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden
                            Fällen:</p>
                            <ul>
                                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                                    bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer
                                    der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                                    personenbezogenen Daten zu verlangen.
                                </li>
                                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
                                    können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                                </li>
                                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
                                    Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie
                                    das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                                    personenbezogenen Daten zu verlangen.
                                </li>
                                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
                                    Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch
                                    nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                                    Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                </li>
                            </ul>
                            <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese
                                Daten - von ihrer Speicherung abgesehen - nur mit Ihrer Einwilligung oder zur
                                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
                                Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines
                                wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats
                                verarbeitet werden.</p>
                            <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
                        </div>

                    </Route>
                    <Route path="/impressum">
                        <div className="App-content">
                            <br/>
                            <h4>Impressum</h4>
                            <br/>
                            <h6>Angaben gemäß § 5 TMG</h6>
                            <p>Sven Liebert<br/>
                                Gasteiner Str. 11<br/>
                                01279 Dresden</p>

                            <h6>Kontakt</h6>
                            <p>E-Mail: mail@sven-liebert.de</p>

                            <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
                        </div>
                    </Route>
                    <Route path="/home">
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
                            <p className="hidden">Link für das Kalenderabonnement1: <a
                                href="https://api.sven-liebert.de" id="link">https://api.sven-liebert.de</a></p>
                        </div>
                    </Route>
                    <Route exact path="/">
                        <Redirect to={{pathname: "/home"}}/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>


    );
}

export default App;
