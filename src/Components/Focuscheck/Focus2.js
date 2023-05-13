import React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';


const Focus2 = () => {
    const { ref, focused, focusSelf } = useFocusable({
      });
  return (
    <div  className={focused ? 'button-focused' : 'button'}>
    Focus me2
  </div>
  )
}

export default Focus2
