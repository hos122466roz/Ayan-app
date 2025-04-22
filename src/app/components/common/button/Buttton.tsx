interface BuutonProps {
  label: string;
  clicked?: () => void;
  style?: boolean;
}
const Button: React.FC<BuutonProps> = ({ label, clicked,style}) => {
  return (
    <button
      
      className={`${style ? "bg-blue-600" : "bg-zinc-800"} w-full
          p-4
          rounded-xl
          font-bold
          
          text-white
          border-2 cursor-pointer
       font-Dana
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-blue-600`}
      onClick={clicked}
    >
      {label}
    </button>
  );
};
export default Button;
