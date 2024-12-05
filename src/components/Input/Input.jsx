import "./Input.scss";

const Input = ({ label, type }) => {
  return (
    <div className="input_wrapper">
      <label className="label">{label}</label>
      <input type={type} />
    </div>
  );
};

export default Input;
