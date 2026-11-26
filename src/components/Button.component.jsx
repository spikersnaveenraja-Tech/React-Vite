import Button from 'react-bootstrap/Button'
export default function ButtonComponent(){

    return(
        <>
          <div className="container">
            <Button variant="primary me-2">Click Me</Button>
            <Button variant="secondary me-2">Click Me</Button>
            <Button variant="success">Click Me</Button>
          </div>
        </>
    )
}