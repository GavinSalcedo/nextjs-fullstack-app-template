import ProductsList from '../_components/ProductsList';
import Tab from '../_components/Tab';
import { products } from '../_constant/products';

export default function HomePage() {
  return (
    <div>
      <video className="w-full" autoPlay loop>
        <source src="https://represent-com-production.s3.amazonaws.com/processed-videos/67e302e3691347f053d24fb707403517.mp4" />
      </video>
      <Tab></Tab>
      <ProductsList products={products} />
    </div>
  );
}
