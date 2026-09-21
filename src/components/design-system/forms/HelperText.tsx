export function HelperText({ id, children }: { id?: string; children: string }) {
  return (
    <p id={id} className="gj-caption">
      {children}
    </p>
  );
}
