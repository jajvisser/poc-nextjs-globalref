// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getMap as getWrongMap } from '../../factory/WrongFactory'
import { getMap as getCorrectMap } from '../../factory/CorrectFactory'

type Data = {
  wrongMapSize: number
  correctMapSize: number
  wrongMapNames: string[]
  correctMapNames: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get the map from the factory (wrong way)
  const wrongMap = getWrongMap()
  // Get the map from the factory (correct way)
  const correctMap = getCorrectMap()

  res.status(200).json({
    wrongMapSize: wrongMap.size,
    correctMapSize: correctMap.size,
    wrongMapNames: Array.from(wrongMap.keys()),
    correctMapNames: Array.from(correctMap.keys())
  })
}
