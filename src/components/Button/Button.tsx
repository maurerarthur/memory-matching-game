import { styled } from '@stitches/react'

export const Button = styled('button', {
  padding: 15,
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#FF84E8',
  color: '#2A2D43',
  fontSize: 16,
  cursor: 'pointer',
  transition: '1s',
  '&:hover': {
    opacity: '0.9'
  }
})