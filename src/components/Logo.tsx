import React, { FC } from 'react';

import Icons from '../../resources/logos.svg';

interface Props {
  name: string;
  color?: string;
  style: string;
  icon: string;
}

const Logo: FC<Props> = ({ name, icon, color, style }) => {
  return (
    <>
      <svg className={style} fill={color}>
        <use xlinkHref={`${Icons}#${icon}`}></use>
        {/* {name} */}
      </svg>
    </>
  );
};

export default Logo;
