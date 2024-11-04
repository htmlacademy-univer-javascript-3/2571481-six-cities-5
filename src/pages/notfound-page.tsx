import { Fragment } from "react";
import { Link } from "react-router-dom";

export function NotFoundPage(): JSX.Element {
    return(
        <Fragment>
            <h1>
                404.
                <br />
                <small>Page not found</small>
            </h1>
            <Link to="/"><u>Go to main page</u></Link>
        </Fragment>
    )
}