import { createContext } from "preact"
import { type Signal, signal } from "@preact/signals"

export interface StateContextType {
    auth: Signal<{
        user: string | null
        password: string | null
        isAuthenticated: boolean
    }>
}

const StateContext = createContext<Partial<StateContextType>>({})

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const StateContextProvider = (props: any) => {
    const auth = signal({
        user: null,
        password: null,
        isAuthenticated: false,
    })

    return (
        <StateContext.Provider value={{ auth }}>
            {props.children}
        </StateContext.Provider>
    )
}

export { StateContext, StateContextProvider }