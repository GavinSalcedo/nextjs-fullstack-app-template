import { InputType } from '../../_types/input-types';

interface IInput {
  placeholder?: string;
  block?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (data?: any) => void;
  type?: InputType;
  name?: string;
  id?: string;
  value?: string | number;
  defaultValue?: string | number;
}

function Input(props: IInput) {
  const { placeholder, block, onChange, type, name, id, value, defaultValue } =
    props;
  return (
    <>
      <input
        className={`${
          block ? 'w-full' : 'w-1/3'
        } rounded p-3 text-black outline-none border-black`}
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
    </>
  );
}

export default Input;
