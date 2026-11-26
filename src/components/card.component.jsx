import {Button,Card} from 'react-bootstrap'
import Apple from '../assets/apple.jpg'

export default function CardComponent(){

 const courses = [
        { id: 1, name: "React JS", price: 5000 },
        { id: 2, name: "Angular", price: 6000 },
        { id: 3, name: "Node JS", price: 4000 }
    ]

    return(
        <>
         <div className="container">
             <div className="row">
                {
                     courses.map((val) => {
                       
                        return (
                             <div className="col-md-3 col-xs-1">
                            <Card>
                                <Card.Img
                                 variant = "top"
                                 src={Apple}
                                 alt="Image"
                                 height={100}
                                 width={100}
                                />
                                <Card.Body>
                                    <Card.Title>
                                        {val.name}
                                    </Card.Title>
                                    <Card.Text>
                                        price: {val.price}
                                    </Card.Text>
                                    <Button variant="success">
                                        Enroll
                                    </Button>
                                </Card.Body>
                            </Card>
                         </div>   
                        )
                     })
                }
             </div>
         </div>
        </>
    )
    
}