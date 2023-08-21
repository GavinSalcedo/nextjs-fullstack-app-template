import Image from 'next/image';
import { Products } from '../../_interfaces/products';

function FeaturedProduct(props: Products) {
  const { img, name, price } = props;
  const featuredImg = img[0];

  return (
    <span className="flex flex-col text-center gap-2 w-1/2">
      <Image
        className="m-auto"
        alt={name}
        src={featuredImg}
        width={450}
        height={450}
      />
      <div className="flex flex-col">
        <label>{name}</label>
        <label>${price}</label>
      </div>
    </span>
  );
}

export default FeaturedProduct;
