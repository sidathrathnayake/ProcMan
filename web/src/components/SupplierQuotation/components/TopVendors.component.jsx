// import React, {Component} from 'react';
// import '../../../css/supplier_quotation/supplier_quotation.css';
// import { Pie } from 'react-chartjs-2';

// export default class TopVendorsComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             width:1000,
//             topVendors:[],
//             data:{
//                 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//                 datasets: [
//                     {
//                         label: '# of Votes',
//                         data: [12, 19, 3, 5, 2, 3],
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)',
//                         ],
//                         borderColor: [
//                             'rgba(255, 99, 132, 1)',
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)',
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)',
//                         ],
//                         borderWidth: 1,
//                     },
//                 ]
//             }
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <Pie className="sup_vendor_chart"
//                      data={this.state.data}
//                      options={{ maintainAspectRatio: false }}
//                      width={400} height={400}
//                 />
//             </div>
//         );
//     }
// }

