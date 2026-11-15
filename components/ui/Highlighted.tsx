/** Renders `**run**` markers as the italic accent run of a Visto headline. */
export default function Highlighted({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, index) => (index % 2 === 1 ? <em key={index}>{part}</em> : part))}
    </>
  );
}
