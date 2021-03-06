/**
 * Copyright (c) ReactX and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import Sidebar from './Sidebar/Sidebar';
import Collapse from './Collapse/Collapse';

export type CollapsePropsType = {|
  children: ReactElement<any>,
  isOpened: boolean,
  forceInitialAnimation?: boolean,
  hasNestedCollapse?: boolean,
  fixedHeight?: number,
  style: any,
  collapseClassName: string,
  contentClassName: string,
  onMeasure: () => void,
|};


const ReactComponents = {
  Sidebar,
  Collapse,
};

export default ReactComponents;
