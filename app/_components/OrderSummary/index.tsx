import Button from '../Button';

function OrderSummary() {
  return (
    <span className="flex flex-col gap-5 px-4 py-8 w-2/6 h-80 bg-gray-100">
      <label className="font-bold text-3xl">Order Summary</label>
      <div className="flex justify-between">
        <label>Subtotal</label>
        <label>$49.99</label>
      </div>
      <div className="flex justify-between">
        <label>Shipping</label>
        <label>$16.99</label>
      </div>
      <div className="flex justify-between mb-4">
        <label className="text-xl font-bold">Total</label>
        <label className="text-xl font-bold">$16.99</label>
      </div>

      <Button>Checkout</Button>
    </span>
  );
}

export default OrderSummary;
