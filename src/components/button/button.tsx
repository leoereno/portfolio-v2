import './button.css';

type ButtonProps = {
    text: string;
    link: string;
    highlighted: boolean;
    download?: boolean;
}

export default function Button({text, link, highlighted, download}: ButtonProps) {
  return (
      <a href={link} download={download} >
        <button className={"btn" + (highlighted ? " btn-highlighted" : "")}>{text}</button>
      </a>
  );
}
