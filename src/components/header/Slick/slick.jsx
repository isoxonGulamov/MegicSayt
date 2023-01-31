import Carousel from 'react-bootstrap/Carousel';
import  img1 from "../../../img/img1.jpg"
import img2 from "../../../img/img2.jpg"
import img3 from "../../../img/img3.jpg"
import img4 from "../../../img/img4.webp"
import img5 from "../../../img/img5.jpg"
function UncontrolledExample() {
  return (
    <Carousel className='Corusel'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Saytimizga Xush kelibsiz !</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Saytimizga Xush kelibsiz !</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Saytimizga Xush kelibsiz !</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Saytimizga Xush kelibsiz !</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Saytimizga Xush kelibsiz !</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;