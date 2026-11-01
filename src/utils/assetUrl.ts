// Turns a content path from the JSON files into a URL that works on every page.
// "audio/x.mp3", "./audio/x.mp3", "public/audio/x.mp3" and "/audio/x.mp3"
// all become "/audio/x.mp3".
export function assetUrl(path: string): string {
  if (/^(https?:)?\/\//.test(path)) {
    return path
  }

  const relativePath = path.replace(/^(\.?\/)?(public\/)?/, '')
  return import.meta.env.BASE_URL + relativePath
}
