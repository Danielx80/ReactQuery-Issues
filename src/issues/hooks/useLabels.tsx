import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interface/label';
import { sleep } from '../../helpers/sleep';

const getLabelts = async (): Promise<Label[]> => {

	await sleep(2)
	const { data } = await githubApi.get<Label[]>('/labels', {
		headers: {
			Authorization: null
		}
	})
	console.log('getLabelts', data);
	return data
}

export const useLabels = () => {
	const labelsQuery = useQuery(
		['labels'],
		getLabelts,
		{
			staleTime: 1000 * 60 * 60,
			// placeholderData: [],
			// initialData: [{
			// 	id: 725156255,
			// 	node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
			// 	url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
			// 	name: "good first issue (taken)",
			// 	color: "b60205",
			// 	default: false,
			// },
			// {
			// 	id: 1249821345,
			// 	node_id: "MDU6TGFiZWwxMjQ5ODIxMzQ1",
			// 	url: "https://api.github.com/repos/facebook/react/labels/Component:%20ESLint%20Rules",
			// 	name: "Component: ESLint Rules",
			// 	color: "f7afdb",
			// 	default: false,
			// },
			// ]
		}
	)

	return labelsQuery
}
