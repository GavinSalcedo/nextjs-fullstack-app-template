import { BackgroundColor } from '../../_types/colors';

interface IButton {
  // eslint-disable-next-line no-unused-vars
  onClick?: (data?: any) => void;
  children?: React.ReactNode | string;
  isLoading?: boolean;
  isDisabled?: boolean;
  bgColor?: BackgroundColor;
  block?: boolean;
}

function Button(props: IButton) {
  const {
    onClick,
    children,
    isDisabled,
    isLoading,
    bgColor = 'bg-black',
    block = false,
  } = props;

  return (
    <button
      className={`${block ? 'w-full' : 'w-6/12'} ${bgColor} text-white p-3`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
