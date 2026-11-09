// Tiny PNG header reader — width/height from the IHDR chunk, no deps.
import { openSync, readSync, closeSync } from 'node:fs';

export const PNG = {
  size(file) {
    const fd = openSync(file, 'r');
    const buf = Buffer.alloc(24);
    readSync(fd, buf, 0, 24, 0);
    closeSync(fd);
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  },
};
