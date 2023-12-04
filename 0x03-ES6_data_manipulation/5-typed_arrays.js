export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw new Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const dv = new DataView(buffer, 0, length);
  dv.setInt8(position, value);

  return dv;
}
