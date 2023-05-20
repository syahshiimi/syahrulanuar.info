import type { LayoutLoad } from './$houdini';

export const load = ({ url }) => {
    return {
        url: url.pathname
    };
};

export const prerender = true;
