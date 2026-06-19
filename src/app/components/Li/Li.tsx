interface LiProps {
  title: string;
  clicked: () => void;
  active?: boolean;
}

const Li: React.FC<LiProps> = ({ title, clicked, active }) => {
  return (
    <li className={`${active ? "text-primary" : ""}`} onClick={clicked}>
      {title}
    </li>
  );
};
export default Li;
