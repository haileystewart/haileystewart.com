import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumb">
      <Link className="breadcrumb-item nav_ac" to="/">...</Link>
      {pathnames.length > 0 && <span className="breadcrumb-separator"> / </span>}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span className="breadcrumb-item active nav_ac" key={to}>
            {value}
          </span>
        ) : (
          <React.Fragment key={to}>
            <Link className="breadcrumb-item nav_ac" to={to}>
              {value}
            </Link>
            <span className="breadcrumb-separator"> / </span>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
