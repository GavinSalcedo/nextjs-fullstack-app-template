import CartItem from '../../_components/CartItem';
import Header from '../../_components/Header';
import OrderSummary from '../../_components/OrderSummary';

function Cart() {
  return (
    <>
      <Header>Shopping Cart</Header>
      <span className="flex justify-between gap-16">
        <CartItem
          img="https://www.pngmart.com/files/1/Jacket-PNG-Clipart.png"
          productName="Stardew Hoodie"
          productVariant="Premium Pullover Hoddie"
          color="Heather Grey"
          size="S"
          price={49.99}
        />

        <OrderSummary />
      </span>
    </>
  );
}

export default Cart;
