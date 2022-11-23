import React, { useState, useEffect } from 'react'
import { Grid, Card, FlexContainer, Typography } from '../'

interface ICard {
  id: number
  value: number
  isRevealed: boolean
  isMatched: boolean
}

const GRID_SIZE = 16
const HALF_GRID_SIZE = GRID_SIZE / 2

export const Game: React.FC = () => {
  const [grid, setGrid] = useState<ICard[]>([])
  const [moves, setMoves] = useState<number>(0)

  const revealedCardsQuantity: number =
    grid.filter(card => card.isRevealed && !card.isMatched).length

  const matchedCardsQuantity: number =
    grid.filter(card => card.isMatched).length

  const cardValues: number[] =
    [0x1F60E, 0x1F47D, 0x1F649, 0x1F919, 0x1F9E0, 0x1F602, 0x1F914, 0x1F63A]

  useEffect(() => {
    const initialGrid =
      Array(GRID_SIZE).fill({})
      .map((_, index) => {
        const pairIndex: number =
          (index + 1) > HALF_GRID_SIZE ? (index - HALF_GRID_SIZE) : index

        return {
          id: pairIndex,
          value: cardValues[pairIndex],
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
      setMoves(moves + 1)

      const firstCardIndex = grid.indexOf(firstCard)
      const secondCardIndex = grid.indexOf(secondCard)

      const revealedGrid = [...grid]

      if(firstCard?.id == secondCard?.id) {
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
    <FlexContainer
      flexDirection='column'
      alignItems='center'
    >
      <Typography
        color='pink'
        size='24'
      >
        Total moves: {moves}
      </Typography>
      <Grid>
        {grid.map((card, index) => (
          <Card
            key={index}
            onClick={() => card.isMatched ? null : handleRevealCard(index)}
            disabled={revealedCardsQuantity == 2}
          >
            {card.isRevealed && (
              <Typography size='45'>{String.fromCodePoint(card.value)}</Typography>
            )}
          </Card>
        ))}
      </Grid>
      {(matchedCardsQuantity == GRID_SIZE) && (
        <Typography
          color='pink'
          size='24'
        >
          Congratulations! You've won the game!
        </Typography>
      )}
    </FlexContainer>
  )
}