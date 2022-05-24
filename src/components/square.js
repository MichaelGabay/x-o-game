import React, { useEffect, useState } from 'react'

export default function Square({ Css, game, onSclick}) {
  let cssStr = `square ${Css} `;
  const onClick = () => {
    if (!game)
      onSclick();
  }

  return (
    <div onClick={onClick} className={Css && cssStr || "col-auto square"}>{game}</div>
  )
}
