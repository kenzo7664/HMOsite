import "./Dashboard.css";
import Main from "./Main";
import Navbar from "../sidebar/Navbar";
import Welcomemessage from "../Dashboard/Welcomemessage";

function Dashboard() {
  return (
    <section className='dashboard'>
      <div className='Contentt'>
        <Navbar />
      </div>

      <div className='main-dashboard'>
        <Main />
      </div>

      <div className='main-dashboard'>
        <Welcomemessage />
      </div>
    </section>
  );
}

export default Dashboard;
