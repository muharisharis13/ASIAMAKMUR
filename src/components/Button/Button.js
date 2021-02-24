import React from 'react'
import styled from 'styled-components'


export default function Button({
  name,
  className,
  bgColor,
  padding,
  borderRadius,
  fontSize,
  color,
  onClick
}) {
  const Btn = styled.button`
      background-color: ${bgColor} !important;
      color: ${color};
      font-weight: 700;
      padding: ${padding};
      font-size: ${fontSize}px;
      border-radius: ${borderRadius}px;
      &:hover {
        color:${color};
      }
  `
  return (
    <Btn
      className={className}
      onClick={onClick}
    >
      {name}
    </Btn>
  )
}
