import { useSelector, shallowEqual } from 'react-redux';

export function useState<TState = {}, TSelected = unknown>(
	selector: (state: TState) => TSelected,
): TSelected;

export function useState(selector: (state: {}) => {}) {
	return useSelector(selector, shallowEqual);
}
