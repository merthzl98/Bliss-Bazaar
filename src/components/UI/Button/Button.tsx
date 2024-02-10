import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
