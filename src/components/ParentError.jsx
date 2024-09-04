import {
    useRouteError,
} from 'react-router-dom'

export default function ParentError() {
    const error = useRouteError()

    return (
        <>
            <h1>Parent Error Component...</h1>
            <h3>{error.statusText}</h3>
            <p>{error.message}</p>
        </>
    )
}