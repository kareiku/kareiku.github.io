export default function el(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([key, value]) => element[key] = value);
    children?.forEach(c => element.appendChild(c));
    return element;
}
