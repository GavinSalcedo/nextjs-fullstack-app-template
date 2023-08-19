interface IHeader {
  children?: string | React.ReactElement;
}

function Header(props: IHeader) {
  const { children } = props;

  return <label className="text-3xl text-zinc-800 font-bold">{children}</label>;
}

export default Header;
