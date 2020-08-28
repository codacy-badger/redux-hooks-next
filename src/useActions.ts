import { bindActionCreators } from 'redux';
import { useDispatch, shallowEqual } from 'react-redux';
import { useMemo, useCallback } from 'react';


export function useActions<A>(actions: A, deps?: []): A;

export function useActions(actions: [] | {}, deps?: []) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
			if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch));
			}
			return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}


export function useAction<A>(actions: A): A;

export function useAction(action: any) {
	const dispatch = useDispatch()
	return useCallback(() => {
		return bindActionCreators(action, dispatch);
	}, [dispatch]);
}