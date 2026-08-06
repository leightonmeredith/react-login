import { isRouteErrorResponse, useRouteError } from "react-router"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let errorMessage = 'Unknown error';
    if (isRouteErrorResponse(error)) {
        errorMessage = error.statusText || error.data?.message || 'Unknown Error';
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }
    
    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    )
}