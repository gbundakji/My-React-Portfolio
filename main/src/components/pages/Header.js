import '../styles/Header.css';
import Navigation from '../Navigation';
import coverImg from '../../../public/images/odyssy4k.png';

function Header(props) {
    const { currentTab, handleTabChange } = props;
  
    return (
      <div>
        <section>
          <header className="flex-row px-1">
            <div>
              <h1>Gassan Bundakji</h1>
            </div>
            <div>
              <Navigation
                currentTab={currentTab}
                handleTabChange={handleTabChange}
              ></Navigation>
            </div>
          </header>
        </section>
        <section className="head-sec">
          <div className="head-welc">
            <img src={coverImg} className="" style={{ width: "100%" }} alt="cover"/>
            <h2>Welcome Fellow Developer</h2>
            <p>
              My portfolio contains some of my favorite projects and information about me. Feel free to look around!
            </p>
          </div>
        </section>
      </div>
    );
  }



export default Header;