import { encode } from "./codec.js";

const urlInput = document.getElementById("urlInput");
const encodeBtn = document.getElementById("encodeBtn");
const output = document.getElementById("output");

encodeBtn.addEventListener("click", async () => {
    const rawUrl = urlInput.value.trim();
    if (!rawUrl) return;

    const compressed = encode(rawUrl);
    output.textContent = compressed || "Cannot encode URLs with numbers yet";

    if (compressed) {
        await navigator.clipboard.writeText(compressed);
    }
});
