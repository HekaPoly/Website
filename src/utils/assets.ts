export function asset(path: string) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|data:|#)/i.test(path)) return path;

    return `${import.meta.env.BASE_URL}${path.replace(/^(?:\/+|public\/)/, '')}`;
}
