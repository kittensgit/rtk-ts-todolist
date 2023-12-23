import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../types/redux';

import type { TypedUseSelectorHook } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
