import React from 'react';

export default ({ component, children }) => {
  const Component = component || 'h1';

  return (
    <Component>
      {children}
    </Component>
  );
}