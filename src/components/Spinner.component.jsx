import { Spinner } from "react-bootstrap"


export default function SpinnerComponent() {
    return (
        <>
            <div className="contaienr">
                <Spinner variant="primary" />
                <Spinner variant="success" />
                <Spinner variant="danger" />
                <Spinner variant="warning" />
                <Spinner variant="info" />
                <Spinner variant="dark" />
            </div>
        </>
    )
}