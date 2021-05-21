import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        const mapping = Object.keys(this.props.emotions).map(function(){
            return (
            <tr key='emotions_table'>
               <td>{this.props.emotions[0]}</td>
               <td>{this.props.emotions[1]}</td>
               <td>{this.props.emotions[2]}</td>
               <td>{this.props.emotions[3]}</td>
               <td>{this.props.emotions[4]}</td>
            </tr>
            )}
         );
      return (
            <div>{mapping}</div>
        );
   };
};
export default EmotionTable;
