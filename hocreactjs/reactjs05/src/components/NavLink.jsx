import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
export default function NavLink({ href, children, className = "", ...props }) {
  //Lấy đường dẫn (pathname) của href
  const resolved = useResolvedPath(href);
  //So sánh đường dẫn hiện tại với pathname của href
  const match = useMatch({
    path: resolved.pathname,
  });
  return (
    <li className={clsx(className, match && "active")}>
      <Link to={href} {...props}>
        {children}
      </Link>
    </li>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
