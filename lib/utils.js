export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatNumber(num) {
  if (typeof num === "number") {
    return new Intl.NumberFormat().format(num);
  }
  return num;
}

export function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
