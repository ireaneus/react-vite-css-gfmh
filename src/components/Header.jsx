import React from 'react';

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}

  </div>
  )
};

Header.defaultProps = {
  title: 'Grace Fellowship of Mountain Home Idaho',
};