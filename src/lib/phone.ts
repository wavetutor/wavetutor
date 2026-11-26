// Phone numbers: US numbers are formatted as you type, (512) 555-0142, and must have
// 10 digits (a leading 1 is allowed). Numbers starting with + are international and
// must have 8 to 15 digits, the international maximum. Keep in sync between the
// public site (src/lib/phone.ts) and the admin portal (src/lib/phone.ts).

const MAX_INTL_DIGITS = 15

/** Clean and format what was typed. Call on every input event. */
export function formatPhone(input: string): string {
  const raw = input.replace(/[^\d+()\-.\s]/g, "")
  if (raw.trimStart().startsWith("+")) {
    // International: keep their spacing, drop extra plus signs, stop at 15 digits.
    let digits = 0
    let out = "+"
    for (const ch of raw.trimStart().slice(1).replace(/\+/g, "")) {
      if (/\d/.test(ch)) {
        if (digits === MAX_INTL_DIGITS) break
        digits++
      }
      out += ch
    }
    return out.replace(/\s{2,}/g, " ")
  }
  let d = raw.replace(/\D/g, "")
  d = d.slice(0, d.startsWith("1") ? 11 : 10)
  const us = d.length === 11 ? d.slice(1) : d
  const prefix = d.length === 11 ? "1 " : ""
  if (us.length === 0) return d.length === 1 ? "1" : ""
  if (us.length <= 3) return prefix + us
  if (us.length <= 6) return `${prefix}(${us.slice(0, 3)}) ${us.slice(3)}`
  return `${prefix}(${us.slice(0, 3)}) ${us.slice(3, 6)}-${us.slice(6)}`
}

/** An error message, or "" when the number is fine. Empty input returns "" (check required separately). */
export function phoneError(value: string): string {
  const v = value.trim()
  if (!v) return ""
  const digits = v.replace(/\D/g, "")
  if (v.startsWith("+")) {
    return digits.length < 8 || digits.length > MAX_INTL_DIGITS
      ? "International numbers need 8 to 15 digits after the +."
      : ""
  }
  const us = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits
  if (us.length !== 10) return "Enter a 10-digit number, like (512) 555-0142. Outside the US, start with +."
  // US area codes never start with 0 or 1; a leading 0 usually means an international number.
  if (/^[01]/.test(us)) return "That isn't a US number. For numbers outside the US, start with + and the country code."
  return ""
}
