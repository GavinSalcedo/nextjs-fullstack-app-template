import { Products } from '../../_interfaces/products';
import FeaturedProduct from '../FeaturedProduct';

interface IProductsList {
  products: Products[];
}

function ProductsList(props: IProductsList) {
  const { products } = props;

  return (
    <section>
      <div className="flex flex-wrap basis-3/6 my-20 mx-48">
        {products.map((p: Products) => (
          <>
            <FeaturedProduct img={p.img} name={p.name} price={p.price} />
          </>
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
