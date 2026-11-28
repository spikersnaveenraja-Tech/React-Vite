import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonLayout(){

    const navigate = useNavigate()
    return (
        <>
         <Container>
            <Button variant = 'primary' onClick={()=>navigate('/home')}>Home</Button>
            <Button variant = 'success' onClick={()=>navigate('/about')}>About</Button>
            <Button variant = 'danger' onClick={()=>navigate('/blog')}>Blog</Button>
         </Container>

        
        </>
    )
}