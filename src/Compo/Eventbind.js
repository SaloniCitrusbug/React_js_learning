// import React, { Component } from 'react'

// class Eventbind extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: 'Hellow'
//         }
//         this.clickHandler = this.clickHandler.bind(this)
//     }

//     // clickHandler() {
//     //     this.setState ({
//     //         message: 'Clicked'
//     //     })
//     //     console.log(this)
//     // }

//     clickHandler = () => {
//         this.setState({
//             message: 'Clicked..!!!'
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div>{this.state.message}</div>
//                 <button onClick={this.clickHandler.bind(this)}>Click_1</button>
//                 <button onClick={() => this.clickHandler()}>Click_2</button>
//                 <button onClick={this.clickHandler}>Click_3</button>
//             </div>
//         )
//     }
// }

// export default Eventbind
