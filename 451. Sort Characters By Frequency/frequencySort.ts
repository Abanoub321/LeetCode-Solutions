function frequencySort(s: string): string {
  const map = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  let result = "";
  for (let i = 0; i < sorted.length; i++) {
    const [char, count] = sorted[i];
    result += char.repeat(count);
  }
  return result;
}

export default frequencySort;
