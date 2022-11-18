import Carousel from 'react-bootstrap/Carousel';

function CarouselThing() {

    return(        
    <Carousel>
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src="https://www.austinchronicle.com/binary/9ef6/screens_feature3-1.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3> "Hello Peter, what's happening? Ummm, I'm gonna need you to go ahead come in tomorrow. So if you could be here around 9 that would be great, mmmk... 
                    oh oh! and I almost forgot ahh, I'm also gonna need you to go ahead and come in on Sunday too, kay."</h3>
                <p>-Bill Lumberg</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/13890766/job_interview_office_space.jpeg"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>"Looks like youve been missing quite a bit of work lately."</h3>
                <p>-the Bobs</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/13890692/office_space__1_.png"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>"[muttering]  I could set the building on fire."</h3>
                <p>
                    -Milton
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselThing;