import { bindActionCreators, AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { useMemo, useCallback } from 'react';

type DependencyList = ReadonlyArray<any>;

export function useActions<A>(actions: A, deps?: DependencyList): A;

export function useActions(actions: {} | [], deps?: DependencyList) {
	const dispatch = useDispatch()
	return useMemo(
		() => {
			if (Array.isArray(actions)) {
				return actions.map(a => bindActionCreators(a, dispatch));
			}
			return bindActionCreators(actions, dispatch);
		},
		deps ? [dispatch, ...deps] : [dispatch],
	)
}

export function useAction<A>(actions: A, deps?: DependencyList): A;

export function useAction(action: AnyAction, deps?: DependencyList) {
	const dispatch = useDispatch()
	return useCallback(() => {
		return bindActionCreators(action, dispatch);
	},
		deps ? [dispatch, ...deps] : [dispatch],
	)
}
