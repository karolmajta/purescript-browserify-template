module Math where

import Data.Foldable
import Data.Array

quadruple :: Number -> Number
quadruple x = x * 4

avgBeers :: [Number] -> Number
avgBeers xs = (sum xs) / (length xs)
