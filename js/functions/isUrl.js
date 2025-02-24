export default function isUrl(str) {
    return typeof str === 'string' && str.startsWith('http');
}
