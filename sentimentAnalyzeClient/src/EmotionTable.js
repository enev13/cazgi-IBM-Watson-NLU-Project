import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
      console.log(this.props.emotions)
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              Object.entries(this.props.emotions).map((emotion) => (
                <tr>
                  <td>{emotion[0]}</td>
                  <td>{emotion[1]}</td>
                  <td>{emotion[2]}</td>
                  <td>{emotion[3]}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;