import React from 'react';

const HOCFails = <P extends object>(
  Component: React.ComponentType<P>,
): React.ComponentType<P> => {
  const withFClass = (props: P) => <Component {...props as P} />;
  return withFClass;
};

export default HOCFails;
