/** Renders `**run**` markers as the red run, the way the app's HighlightedHeadline does. */
export default function Highlighted({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} className="hl">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
