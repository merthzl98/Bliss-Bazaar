import "./Button.scss";

type ButtonProps = {
  text: string;
  onClick: () => void;
  fontSize: string;
  width: string;
  fontWeight: string;
  padding: string;
};

const Button = (props: ButtonProps) => {
  const { text, onClick, fontSize, width, fontWeight, padding } = props;
  return (
    <button
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        width: width,
        padding: padding,
      }}
      className="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
