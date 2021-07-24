type SpacerProps =
  | { top: string; bottom?: string }
  | { top?: string; bottom: string }
  | { top: string; bottom: string };

export default function Spacer({ top, bottom }: SpacerProps) {
  return (
    <div style={{ marginTop: top, marginBottom: bottom }} />
  )
}
