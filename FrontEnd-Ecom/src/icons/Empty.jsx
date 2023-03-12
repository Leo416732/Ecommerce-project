export default function Empty() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%", margin: "auto" }}>
        <img style={{ width: "50%" }} src="../empty.svg" alt="" />
        <p className="stock">your basket empty</p>
      </div>
    </div>
  );
}
