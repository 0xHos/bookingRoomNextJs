export default function stripHtmlTags(text: string) {
  return text.replace(/<\/?[^>]+(>|$)/g, ""); // Regular expression to remove HTML tags
}
