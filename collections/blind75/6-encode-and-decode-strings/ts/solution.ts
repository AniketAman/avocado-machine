export class Codec {
  encode(strs: string[]): string {
    let out = "";
    for (let s of strs) {
      out += s.length + "," + s;
    }
    return out;
  }

  decode(data: string): string[] {
    let i = 0;
    const out: string[] = [];
    while (i < data.length) {
      const start = i;

      while (data[i] !== ",") i++;

      const len = +data.slice(start, i);
      const s = data.slice(i + 1, i + 1 + len);
      out.push(s);
      i = i + 1 + len;
    }
    return out;
  }
}
