export function FieldError({ id, message }: { id?: string; message: string }) {
  return (
    <p id={id} className="gj-body-sm text-gj-error" role="alert">
      {message}
    </p>
  );
}
