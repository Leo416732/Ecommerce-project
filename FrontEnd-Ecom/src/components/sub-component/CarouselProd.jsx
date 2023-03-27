import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../context/ProductsContext";
import { ThemeContext } from "../../context/Theme";
import "../../styles/slider.css";

function CarouselProd() {
  const { data } = useContext(ProductContext);
  const { themeMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={themeMode == "light" ? "slideLight" : "slideDark"}>
      <Carousel variant="light">
        {data &&
          data.map((product, index) => {
            if (product.stock < 4) {
              return (
                <Carousel.Item key={index} className="carousel">
                  <div className="back">
                    <img
                      className="slider-img"
                      src={product.image}
                      alt="First slide"
                    />
                    <div className="round">only {product.price}$</div>
                  </div>
                  <Carousel.Caption>
                    <h5>{product.name}</h5>
                    <div className="btns">
                      <button
                        className="shop-btn"
                        onClick={() => {
                          navigate(`../product/${product._id}`);
                        }}
                      >
                        Shop now
                      </button>
                      <button
                        className="view-btn"
                        onClick={() => {
                          navigate(`../product/${product._id}`);
                        }}
                      >
                        view more
                      </button>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            }
          })}
      </Carousel>
    </div>
  );
}

export default CarouselProd;
