import { Component } from 'react'
import '../CSS/Footer.css';



export default class Footer extends Component {


    
    paginate = () => {
        this.props.Search(window.search_query );
    }
    
    
    render() {
        return <div id='footer'>
            <div>
                Page : {this.props.page} / {this.props.total_pages}
            </div>
            <div>
                    <div className="pagination left" onClick={() => {
                        window.page--;
                        this.paginate();
                    }}> Prevouis </div>
                    <div className="pagination right" onClick={() => {
                        window.page++;
                        this.paginate();
                    }}> Next </div>
            </div>
            <div>
                    <p>Copright Dan Atibu {new Date().getFullYear()}</p>
            </div>
      </div>
  }
}
