export default function EurToUsd(props) {
  return (
    <div>
      <label htmlFor="">EUR</label>
      <input type="number" placeholder="EUR..." {...props} value={props.eur} />
    </div>
  );
}
