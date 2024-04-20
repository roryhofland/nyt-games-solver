export default function Spinner({ loading }) {
  return (
    <div
      className={
        loading
          ? "spinner-container fade-component"
          : "spinner-container fade-component active"
      }
    >
      <div className="spinner"></div>
    </div>
  );
}
