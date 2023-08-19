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
    bgColor = 'bg-black',
    block = false,
  } = props;

  return (
    <button
      className={`${block ? 'w-full' : 'w-6/12'} ${bgColor} text-white p-3`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
