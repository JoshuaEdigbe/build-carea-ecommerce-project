export const CartButton = ({ label, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};







