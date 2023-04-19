import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async({fetch}) => {

    const response = await fetch("/api/config");
    const config: Record<string, string> = await response.json();

    return {
        config
    }
}