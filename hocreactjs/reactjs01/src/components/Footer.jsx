import PropTypes from "prop-types";

export default function Footer({ name }) {
  return <h2>Footer: {name}</h2>;
}

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};
