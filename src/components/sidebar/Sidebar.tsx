import "./sidebar.css"
import {
    LineStyle,
    Timeline, 
    TrendingUp,
    PeopleAlt,
    People,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ContactSupport,
    WorkOutline, 
    Report, } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__Wrapper">
                <div className="sidebar__Menu">
                    <h3 className="sidebar__Title">Painel Principal</h3>
                    <ul className="sidebar__List">
                        <li className="sidebar__ListItem active">
                            <LineStyle className="sidebar__Icon"/>
                            Início
                        </li>
                        <li className="sidebar__ListItem">
                            <Timeline className="sidebar__Icon"/>
                            Análiticos
                        </li>
                        <li className="sidebar__ListItem">
                            <TrendingUp className="sidebar__Icon"/>
                            Vendas
                        </li>
                    </ul>
                </div>
                <div className="sidebar__Menu">
                    <h3 className="sidebar__Title">Menu Rápido</h3>
                    <ul className="sidebar__List">
                        <li className="sidebar__ListItem active">
                            <PeopleAlt className="sidebar__Icon"/>
                            Cliêntes
                        </li>
                        <li className="sidebar__ListItem">
                            <Storefront className="sidebar__Icon"/>
                            Produtos
                        </li>
                        <li className="sidebar__ListItem">
                            <AttachMoney className="sidebar__Icon"/>
                            Transações
                        </li>
                        <li className="sidebar__ListItem">
                            <BarChart className="sidebar__Icon"/>
                            Relatórios
                        </li>
                    </ul>
                </div>
                <div className="sidebar__Menu">
                    <h3 className="sidebar__Title">Informações</h3>
                    <ul className="sidebar__List">
                        <li className="sidebar__ListItem active">
                            <MailOutline className="sidebar__Icon"/>
                            email
                        </li>
                        <li className="sidebar__ListItem">
                            <DynamicFeed className="sidebar__Icon"/>
                            Feedback
                        </li>
                        <li className="sidebar__ListItem">
                            <ContactSupport className="sidebar__Icon"/>
                            Suporte
                        </li>
                    </ul>
                </div>
                <div className="sidebar__Menu">
                    <h3 className="sidebar__Title">Admin|Equipa</h3>
                    <ul className="sidebar__List">
                        <li className="sidebar__ListItem active">
                            <WorkOutline className="sidebar__Icon"/>
                            Gestão
                        </li>
                        <li className="sidebar__ListItem">
                            <People className="sidebar__Icon"/>
                            Usuários
                        </li>
                        <li className="sidebar__ListItem">
                            <Timeline className="sidebar__Icon"/>
                            Análiticos
                        </li>
                        <li className="sidebar__ListItem">
                            <Report className="sidebar__Icon"/>
                            Relatórios
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
