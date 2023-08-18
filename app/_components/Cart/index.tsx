interface ICart {
  itemCount?: number | null | undefined;
}

function Cart(props: ICart) {
  const { itemCount = 0 } = props;
  return (
    <span>
      {itemCount !== null && itemCount > 0 ? (
        <div className="absolute bg-red-700 rounded-full text-center w-6 h-6 top-5 right-2.5">
          {itemCount}
        </div>
      ) : null}
      Cart
    </span>
  );
}

export default Cart;
