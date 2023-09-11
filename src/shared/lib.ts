import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => RootDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// const randomIntFromInterval = (min: number, max: number): number => {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

// export const lib = {
//   randomIntFromInterval,
// }
