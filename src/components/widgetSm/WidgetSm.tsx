import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";

const WidgetSm = () => {
    return (
        <div className="widgetSm">
          <span className="widgetSmTitle">Novos Membros e Clientes</span>
          <ul className="widgetSmList">
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Laura Keller</span>
                <span className="widgetSmUserTitle">Administrator and Suporte</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Ver
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Afonsina Paquete</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Ver
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Bruno Felipe Paquete</span>
                <span className="widgetSmUserTitle">Finance Auditor</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Ver
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Paulo Sérgio Almeida </span>
                <span className="widgetSmUserTitle">Civil Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Ver
              </button>
            </li>
            <li className="widgetSmListItem">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Francelino D´Alva Paquete</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Ver
              </button>
            </li>
          </ul>
        </div>
      );
}

export default WidgetSm
