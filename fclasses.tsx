import React from 'react';

export default class DoNotPasses {
  static shouldFailOnEslintFix = <P extends object>(props: P
  ) : React.ReactElement<P> => <button {...props as P}/>
}
