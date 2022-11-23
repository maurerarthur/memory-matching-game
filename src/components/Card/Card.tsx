import { styled } from '@stitches/react'

export const Card = styled('button', {
  backgroundColor: '#FF84E8',
  color: '#414361',
  fontSize: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',
  height: '100px',
  cursor: 'pointer',
  border: 'none',
  borderRadius: '10px',
  transition: '1s',
  '&:hover': {
    opacity: '0.9'
  }
})