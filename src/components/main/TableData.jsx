const TableData = (props) => {
  const {
    name,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: percentage,
    market_cap,
    id,
    image,
  } = props;

  const totalVolume = getFormatedPrice(total_volume);
  const marketCap = getFormatedPrice(market_cap);

  return (
    <tr key={id}>
      <td>
        <img src={image} alt="coin-img" />
        <span>{name}</span>
      </td>
      <td>{symbol.toUpperCase()}</td>
      <td>${current_price}</td>
      <td>${totalVolume}</td>
      <td style={{ color: `${percentage > 0 ? "green" : "red"}` }}>
        {percentage.toFixed(2)}%
      </td>
      <td>Mkt Cap : ${marketCap}</td>
    </tr>
  );
};

const getFormatedPrice = (price) => {
  return new Intl.NumberFormat().format(price);
};

export default TableData;
