import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import { customerData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import "./home.css"


const Home = () => {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart />
            <div className="home__Widgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}

export default Home

