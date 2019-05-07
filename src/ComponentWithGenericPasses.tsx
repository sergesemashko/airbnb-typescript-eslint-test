import React from 'react';

const ComponentWithGenericPasses = <P extends object>(
  props: P,
): React.ReactElement<P> => <button {...props as P} />;

export default ComponentWithGenericPasses;
