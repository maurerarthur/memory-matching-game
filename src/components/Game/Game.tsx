import React, { useState, useEffect } from 'react'
import { Grid, Card } from '../'

interface IGrid {
  value: string
  isRevealed: boolean
  isMatched: boolean
}

const GRID_SIZE = 16
const HALF_GRID_SIZE = GRID_SIZE / 2

export const Game: React.FC = () => {
  const [grid, setGrid] = useState<IGrid[]>([])

  useEffect(() => {
    const initialGrid =
      Array(GRID_SIZE).fill({})
      .map((_, index) => {
        return {
          value: (index + 1) > HALF_GRID_SIZE
            ? (index - HALF_GRID_SIZE).toString()
            : index.toString(),
          isRevealed: false,
          isMatched: false
        }
      })

    setGrid(initialGrid)
  }, [])

  useEffect(() => {
    const [firstCard, secondCard] =
      grid.filter(card => card.isRevealed && !card.isMatched)

    if(firstCard && secondCard) {
      const firstCardIndex = grid.indexOf(firstCard)
      const secondCardIndex = grid.indexOf(secondCard)

      const revealedGrid = [...grid]

      if(firstCard?.value == secondCard?.value) {
        revealedGrid[firstCardIndex].isMatched = true
        revealedGrid[secondCardIndex].isMatched = true

        return setGrid(revealedGrid)
      }

      setTimeout(() => {
        revealedGrid[firstCardIndex].isRevealed = false
        revealedGrid[secondCardIndex].isRevealed = false
  
        return setGrid(revealedGrid)
      }, 1000)
    }
  }, [grid])

  const handleRevealCard = (cardIndex: number) => {
    const revealedGrid = [...grid]
    revealedGrid[cardIndex].isRevealed = !revealedGrid[cardIndex].isRevealed
    setGrid(revealedGrid)
  }

  return(
    <Grid>
      {grid.map((card, index) => (
        <Card onClick={() => card.isMatched ? null : handleRevealCard(index)}>
          {card.isRevealed ? card.value : null}
        </Card>
      ))}
    </Grid>
  )
}