import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const Focus1 = ({focusKeyPlay}) => {
    const { ref, focused, focusSelf } = useFocusable({
        focusKey: `${focusKeyPlay}`,
      });
  return (
    <div className={focused ? 'button-focused' : 'button'}>
    Focus me1
  </div>
  )
}

export default Focus1;
