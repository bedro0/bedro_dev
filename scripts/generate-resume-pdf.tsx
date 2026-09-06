// Pre-renders src/components/ResumePdf.tsx to a static public/resume.pdf at
// build (and dev) time, so the site never has to ship @react-pdf/renderer to
// the browser just to let visitors download the resume.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { renderToBuffer } from "@react-pdf/renderer";
import ResumePdf from "../src/components/ResumePdf";

const outFile = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    "..",
    "public",
    "resume.pdf",
);

const buffer = await renderToBuffer(<ResumePdf />);
await writeFile(outFile, buffer);

console.log(`Wrote ${path.relative(process.cwd(), outFile)} (${buffer.byteLength.toLocaleString()} bytes)`);
