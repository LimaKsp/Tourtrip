import Carousel from 'react-bootstrap/Carousel'

function Banners() {
    return (
      <div>
        <div className="bg-purple py-3">
          {/* <h1
            className="text-center py-3 mt-5 conteudo-margin"
            style={{
              fontSize: "30px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginTop: "20px",
            }}
          >
            Descubra nossas incríveis opções de viagens!
            <br />
            Embarque em uma experiência inesquecível!
          </h1> */}
        </div>
        <Carousel
          variant="dark"
          className="card-hover"
          style={{
            maxWidth: "900px",
            maxHeight: "500px",
            margin: "0 auto",
            marginBottom: "60px",
            marginTop:"60px"
          }}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\src\img\texto3.png"
              width={1500}
              height={500}
              alt="Imagem1"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\src\img\cascata.jpg"
              width={1500}
              height={500}
              alt="Imagem1"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\src\img\cataratas.jpg"
              width={1500}
              height={500}
              alt="imagem2"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=".\src\img\lenco.jpg"
              width={1500}
              height={500}
              alt="imagem3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Banners
