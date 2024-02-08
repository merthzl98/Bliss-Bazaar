import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
