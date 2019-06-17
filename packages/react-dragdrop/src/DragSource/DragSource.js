/**
 * Copyright (c) ReactX and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import React, {type Element as RElement} from 'react';
import {connectDragSource} from '../DragUtils';
import {useDragDropContext} from '../ContextManager';
import uuid from 'uuid';

import {Actions} from '../../inline-typed'

export type DragSourceProps = {
  index?: number,
  cssTarget?: any,
  children: RElement<any>,
  handler?: Element,
  clonable?: boolean,
  onDragStart(e: EventTarget): void,
};

export function useDrag(props: DragSourceProps) {
  const [dnd,dispatch] = useDragDropContext();
  
  function dragStart(e: EventTarget) {  
    let payload = {
      source: e,
      sourceId: uuid.v4()    
    }
    dispatch({
      type: Actions.BEGIN_DRAG,
      payload,
    });
    if (props.onDragStart) {
      props.onDragStart(payload);
    }
  }

  return [dragStart];
}

function Component(props: DragSourceProps) {
  const [dragStart] = useDrag(props);
  const [ref, setRef] = React.useState(null);
  // const [item] = useDragDropContext();
  // const dragRef = React.createRef(null);

  const dragRefCallback = React.useCallback(node=>{
    if(node !== null)
    setRef(node);
  },[]);

 React.useEffect(() => {
  if(props.forwardedref){
    props.forwardedref = ref;
  }
  if(ref !== null)
  return connectDragSource(ref, {
    dragImage: props.handler,
    dragStart,
    props: props,
  });  
}, [ref]);

//Clean Unknown Props
const userProps = Object.assign({},props);
delete userProps.clonable;
delete userProps.handler;

  return (
    <div ref={dragRefCallback} {...userProps} style={props.cssTarget}>
      {props.children}
    </div>
  );
}

//TODO:Change to memoizable CP
const DragSource: any = React.memo((props: DragSourceProps) => {
  return (
    <Component {...props} forwardedref={props.ref}>
      {props.children}
    </Component>
  );
});

export default DragSource;
