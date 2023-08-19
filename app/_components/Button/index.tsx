interface IButton {
  // eslint-disable-next-line no-unused-vars
  onClick?: (data?: any) => void;
  children?: React.ReactNode | string;
  isLoading?: boolean;
  isDisabled?: boolean;
}

function Button(props: IButton) {
  const { onClick, children, isDisabled } = props;
  return (
    <button
      className="w-full bg-black text-white p-3"
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
