import React from 'react';
export  function BoilingVerdict(props) {
  let tpl = <p>The water would not boil.</p>;
  if (props.celsius >= 100) {
    tpl = <p>The water would boil.</p>;
  }
  return tpl
}
