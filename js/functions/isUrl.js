export default function isUrl(str) {
    const httpRegex = new RegExp('^https?:\\/\\/');
    return (typeof str === 'string') && httpRegex.test(str);
}
