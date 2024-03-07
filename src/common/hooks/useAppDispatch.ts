import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/config/store/store';

type DispatchFunc = () => AppDispatch;
const useAppDispatch: DispatchFunc = useDispatch;

export default useAppDispatch;
