import React from 'react'
import { useActions, useAction } from './useActions';


const add = (is: string) => ({
	type: 'dsfd',
	payload: {
		is,
	}
})

const mapDispatch = {
	add,
}

const mapDispatchNext = [
	add,
]

type ActionType = typeof mapDispatch;

const App = () => {

	const { add } = useActions(mapDispatch);
	const [actionNext] = useActions(mapDispatchNext);
	const action = useAction(add)


	return (
		<div>
			<text>hello</text>
		</div>
	)
}
