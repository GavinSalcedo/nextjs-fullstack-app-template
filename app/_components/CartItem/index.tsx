import Image from 'next/image';
import { Size } from '../../_types/sizes';

interface ICartItem {
  img: string;
  productName: string;
  productVariant: string;
  size: Size;
  color: string;
  price: number;
}

function CartItem(props: ICartItem) {
  const { img, productName, productVariant, size, color, price } = props;
  return (
    <>
      <span className="flex flex-grow justify-between p-4 bg-gray-100 h-1/3">
        <div className="flex gap-5">
          <Image
            className="h-16"
            width={55}
            height={55}
            src={img}
            alt={productName}
          />
          <div className="flex flex-col gap-1">
            <label className="text-xl font-bold">{productName}</label>
            <label className="text-lg">{productVariant}</label>
            <div className="flex gap-3">
              <label className="text-sm text-gray-400">Size:{size}</label>
              <label className="text-sm text-gray-400">{color}</label>
            </div>
          </div>
        </div>
        <div>
          <label>${price}</label>
        </div>
      </span>
    </>
  );
}

export default CartItem;
