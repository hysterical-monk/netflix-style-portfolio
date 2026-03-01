export function parseLRC(text) {
  return text
    .split("\n")
    .map(line => {
      const match = line.match(/\[(\d+):(\d+.\d+)\](.*)/);
      if (!match) return null;

      const min = parseInt(match[1]);
      const sec = parseFloat(match[2]);
      return {
        time: min * 60 + sec,
        text: match[3].trim(),
      };
    })
    .filter(Boolean);
}