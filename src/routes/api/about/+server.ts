import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

import { getPage } from 'markedpage';

export const GET: RequestHandler = async () => {
    const page = await getPage("about")
    const content: string = await page.render()

    return json({
        metadata: page.frontMatter,
        content: content,
        slugKey: page.slugKey,
        headings: page.headings,
    })
}