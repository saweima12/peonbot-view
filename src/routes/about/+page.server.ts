import type { MarkedPageDetail } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({fetch}) => {
    const response = await fetch("/api/about");
    const data: MarkedPageDetail = await response.json()

    return {
        metadata: data.metadata,
        content: data.content,
        slugKey: data.slugKey,
        headings: data.headings
    }
}
