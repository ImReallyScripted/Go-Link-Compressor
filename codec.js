export function encode(url) {
    // url.replaceAll();

    let num = /\d/.test(url);
    let finalEncode = "";
    if (!num) {
        const alpha = url.replace(/(.)\1+/g, (match, char) => char + match.length);
        finalEncode = "<\\" + alpha;
    }
    if (num) {
        // not yet supported
    }
    return finalEncode;
}
export function decode(string) {
    let finalDecode = "";
    if (string.startsWith("<\\")) {
        finalDecode = string.slice(2).replace(/(.)(\d+)/g, (_, char, count) => { return char.repeat(Number(count)) });
    }
    return finalDecode;
}