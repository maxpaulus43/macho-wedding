import db from '$lib/db';

interface WeddingInfo {
	title: string;
	venue: string;
	desc: string;
	date: string;
	imageurl: string;
}

export async function get() {
	const weddingInfoRef = db.ref('weddingInfo');
	const data = await new Promise((resolve: (r: WeddingInfo) => void, _) => {
		weddingInfoRef.on('value', (snapshot) => {
			const data: WeddingInfo = snapshot.val();
			resolve(data);
		});
	});
	return {
		body: data
	};
}
