import React from 'react';
import { Consumer } from './stateCounterProvider';

export default WrappedComponent => ({observedBits, ...rest}) => (
    <Consumer unstable_observedBits={observedBits}>
        {state => <WrappedComponent {...state} {...rest} />}
    </Consumer>
);