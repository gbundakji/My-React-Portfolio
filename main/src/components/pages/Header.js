import '../../styles/Header.css';
import Navigation from '../pages/Navigation';
import coverImg from '../../images/odyssy4k.png';

function Header(props) {
    const { currentPage, handlePageChange } = props;
  
    return (
      <div>
        <section>
          <header className="header">
            <div>
              <h1>Gassan Bundakji</h1>
            </div>
          </header>
        </section>
        <section className="head-sec">
        <img src={coverImg} className="img" style={{ width: "100%" }} alt="cover"/>
          <div className="head-welc">
            <h2>Welcome Fellow Developer!</h2>
            <p>
              My portfolio contains some of my favorite projects and information about me. Feel free to look around!
            </p>
          </div>
        </section>
      </div>
    );
  }



export default Header;