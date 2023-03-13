import React from 'react';

function Button(props) {
    const { styleBtn, clickBtn} = props


  return (
    <button className={styleBtn} onClick={clickBtn} >
      {props.children}
    </button>
  );
}

export default Button