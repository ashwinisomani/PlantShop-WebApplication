import Accordion from "../component/Accordion";
import "../styles/Products.css";

const Products = () => {
  const productDetails = [
    {
        title: "Our flower menu", 
        content: [{
          product: "Lilies", 
          value: 10
        },{
          product: "Orchids", 
          value: 9
        },{
          product: "Roses", 
          value: 8
        },{
          product: "Tulips", 
          value: 7
        }]
    },
    {
      title: "Our plant menu", 
      content: [{
        product: "Money Plant", 
        value: 10
      },{
        product: "Snake Plant", 
        value: 9
      },{
        product: "Bamboo Palm", 
        value: 8
      },{
        product: "Pony Tail Plant", 
        value: 7
      }]
    },
    {
      title: "Organics", 
      content: [{
        product: "Limestone", 
        value: 10
      },{
        product: "Cow Manure", 
        value: 9
      }]
    }
  ]; 
  return (
    <div className="product-container">
      <div className="product-heading">
        <h1>PRODUCTS</h1>
      </div>
      <div className="product-content">
        {
          productDetails.map((item, index) => {
              return (
                  <Accordion title={item.title} content={item.content}></Accordion>
              );
          })
        }
      </div>
    </div>
  )
};

export default Products;