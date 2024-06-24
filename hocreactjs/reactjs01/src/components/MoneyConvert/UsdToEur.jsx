export default function UsdToEur(props) {
  return (
    <div>
      <label htmlFor="">USD</label>
      <input type="number" placeholder="USD..." {...props} value={props.usd} />
    </div>
  );
}
