import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit'

import { siteConfig } from 'markedpage';

export const GET: RequestHandler = async () => {

    const config = await siteConfig();

    return json({
        ...config
    })
}