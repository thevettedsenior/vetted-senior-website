import { readFileSync } from "fs";
// mirror of telLinks in BusinessCard.tsx
function telLinks(phone) {
  return phone
    .split(/\s+or\s+|\s*\/\s*(?=\d)/i)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((segment) => {
      const paren = segment.match(/\((\d[\d\s().-]{6,})\)/);
      const parenDigits = paren ? paren[1].replace(/[^\d]/g, "") : "";
      const extMatch = segment.match(
        /(?:ext\.?|x|poste|option)\s*\.?\s*(\d+)/i,
      );
      let digits;
      if (extMatch) {
        digits = segment.slice(0, extMatch.index).replace(/[^+\d]/g, "");
      } else if (parenDigits.length >= 10) {
        digits = parenDigits;
      } else {
        digits = segment.replace(/[^+\d]/g, "");
      }
      const href = `tel:${digits}${extMatch ? `,,${extMatch[1]}` : ""}`;
      return { label: segment, href };
    })
    .filter((l) => /\d{3}/.test(l.href));
}
const rows = JSON.parse(readFileSync("src/lib/data/businesses.json", "utf8"));
let bad = 0,
  interesting = [];
for (const r of rows) {
  const links = telLinks(r.phone);
  if (links.length === 0) {
    bad++;
    console.log("NO LINKS:", r.id, r.phone);
    continue;
  }
  for (const l of links) {
    const base = l.href.replace("tel:", "").split(",,")[0].replace("+", "");
    const core =
      base.startsWith("1") && base.length === 11 ? base.slice(1) : base;
    if (![3, 7, 10].includes(core.length)) {
      bad++;
      console.log("BAD LEN:", r.id, JSON.stringify(r.phone), "->", l.href);
    }
  }
  if (/ext|x |\bor\b|\(|option|poste/i.test(r.phone))
    interesting.push(
      `${r.phone}  ->  ${links.map((l) => l.href).join("  |  ")}`,
    );
}
console.log(`\n${rows.length} rows checked, ${bad} problems`);
console.log("\nCompound cases resolved:");
for (const i of [...new Set(interesting)]) console.log(" ", i);
