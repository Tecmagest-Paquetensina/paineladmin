import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import "./featuredinfo.css"

const Featuredinfo = () => {
    return (
        <div className="featuredinfo">
            <div className="featured__Item">
                <span className="featured__Title">Receitas</span>
                <div className="featured_Money__Container">
                    <span className="featured__Money">$2.49</span>
                    <span className="featured_Money__Rate">
                        -4.49 <ArrowDownward className="featured__Icon negative" />
                    </span>
                </div>
                <span className="featured__SubTitle">Compare com o mês passado!</span>
            </div>
            <div className="featured__Item">
                <span className="featured__Title">Vendas</span>
                <div className="featured_Money__Container">
                    <span className="featured__Money">$5.49</span>
                    <span className="featured_Money__Rate">
                        -2.5 <ArrowDownward className="featured__Icon negative" />
                    </span>
                </div>
                <span className="featured__SubTitle">Compare com o mês passado!</span>
            </div>
            <div className="featured__Item">
                <span className="featured__Title">Custos</span>
                <div className="featured_Money__Container">
                    <span className="featured__Money">$2.20</span>
                    <span className="featured_Money__Rate">
                        +5.30 <ArrowUpward className="featured__Icon" />
                    </span>
                </div>
                <span className="featured__SubTitle">Compare com o mês passado!</span>
            </div>
        </div>
    );
}

export default Featuredinfo
