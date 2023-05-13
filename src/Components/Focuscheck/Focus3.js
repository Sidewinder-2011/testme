import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const Focus3 = ({focusKeyPlay}) => {
    const { ref, focused, focusSelf } = useFocusable({
        focusKey: `${focusKeyPlay}`,
      });
  return (
    <div  className={focused ? 'button-focused' : 'button'}>
    Focus me3
  </div>
  )
}

export default Focus3
