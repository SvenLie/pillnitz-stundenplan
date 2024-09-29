import {useState} from "react";

export type Module = {
    [key: string]: {
        module: string
        moduleNumber: string
    }
}

export const useModuleList = () => {
    const [modules, setModules] = useState<Array<Module>>([])

    const fetchModuleList = (studentNumber: string) => {
        fetch(`https://api.svenliebert.de/htw-dresden/modules?matNumber=${studentNumber}`).then(response => {

            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        }).then(
            (modules: Array<Module>) => setModules(modules)
        )
    }

    return {modules, fetchModuleList}
}