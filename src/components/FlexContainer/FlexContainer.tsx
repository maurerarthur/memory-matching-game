import { styled } from '@stitches/react'

export const FlexContainer = styled('div', {
  display: 'flex',
  variants: {
    flexDirection: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    },
    justifyContent: {
      center: {
        justifyContent: 'center'
      },
      flexStart: {
        justifyContent: 'flex-start'
      },
      flexEnd: {
        justifyContent: 'flex-end'
      },
      spaceEvenly: {
        justifyContent: 'space-evenly'
      }
    },
    alignItems: {
      center: {
        alignItems: 'center',
      },
      flexStart: {
        alignItems: 'flex-start'
      },
      flexEnd: {
        alignItems: 'flex-end'
      }
    }
  }
})