// utilizando o prop-types para validação, como o ESLint recomenda.
import PropTypes from "prop-types";

Input.propTypes = {
  passwordSize: PropTypes.number.isRequired,
  setPasswordSize: PropTypes.func.isRequired,
};

export default function Input({ passwordSize, setPasswordSize }) {
  return (
    <input
      type="number"
      id="passwordSize"
      min={1}
      value={passwordSize}
      onChange={(ev) => setPasswordSize(+ev.target.value)}
    />
  );
}
