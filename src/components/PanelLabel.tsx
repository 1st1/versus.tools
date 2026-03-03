export function PanelLabel({ label, color }: { label: string; color: string }) {
  return (
    <div style={{
      fontSize: "12px", fontWeight: 600,
      color,
      marginBottom: "14px", textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }}>
      {label}
    </div>
  );
}
