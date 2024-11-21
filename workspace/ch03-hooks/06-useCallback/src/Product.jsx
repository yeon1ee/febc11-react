import PropTypes from "prop-types";

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  mainImage: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

function Product ({name, price, mainImage, content}) {
  return(
    <>
      <h1>06 useCallback(함수 자체를 memoize), React.memo(컴포넌트를 memoize)</h1>

      <h2>상품 설명</h2>
      <p>상품명: { name }</p>
      <p>가격: { price.toLocaleString() }</p>
      <p>상품 설명</p>
      <div>
        <img src={ `https://11.fesp.shop${mainImage}`} width="600"/>
        <p>{ content }</p>
      </div>
    </>
  );
}


export default Product;