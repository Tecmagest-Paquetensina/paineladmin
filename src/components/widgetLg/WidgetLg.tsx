import "./widgetLg.css";

interface IWidgetLgType{
    type: string;
}

const WidgetLg = () => {
  const Button:React.FC<IWidgetLgType> = ({ type }) => {
    return <button className={"widgetLg__Button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widget__LgTitle">Ultimas transações</h3>
      <table className="widget__LgTable">
        <tr className="widget___LgTr">
          <th className="widget__LgTh">Clientes</th>
          <th className="widget__LgTh">Data</th>
          <th className="widget__LgTh">Montante</th>
          <th className="widget__LgTh">Status</th>
        </tr>
        <tr className="widget__LgTr">
          <td className="widget__LgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget__LgImg"
            />
            <span className="widget__LgName">Kiese D´Alva</span>
          </td>
          <td className="widget__LgDate">2 Jun 2021</td>
          <td className="widget__LgAmount">$122.00</td>
          <td className="widget__LgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widget__LgTr">
          <td className="widget__LgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget__LgImg"
            />
            <span className="widget__LgName">Abigail Neto Paquete</span>
          </td>
          <td className="widget__LgDate">2 Jun 2021</td>
          <td className="widget__LgAmount">$122.00</td>
          <td className="widget__LgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widget__LgTr">
          <td className="widget__LgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget__LgImg"
            />
            <span className="widget__LgName">Igor Ferreira Paquete</span>
          </td>
          <td className="widget__LgDate">2 Jun 2021</td>
          <td className="widget__LgAmount">$122.00</td>
          <td className="widget__LgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widget__LgTr">
          <td className="widget__LgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widget__LgImg"
            />
            <span className="widget__LgName">Aleandro Carvalho</span>
          </td>
          <td className="widget__LgDate">20 Jun 2021</td>
          <td className="widget__LgAmount">$122.00</td>
          <td className="widget__LgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg

