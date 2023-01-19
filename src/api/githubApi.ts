import axios from "axios";


export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
});
