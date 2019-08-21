import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        super(props);
        this.state={
            dataObject : [
                { id: 1, name: "Test1", age: 27, city: "Pune", mark: 89, suggestions: [4, 5, 7] },
                { id: 2, name: "Veer", age: 23, city: "Surat", mark: 43, suggestions: [1, 3, 7] },
                { id: 3, name: "Vikas", age: 21, city: "Banglore", mark: 65, suggestions: [2, 6, 9] },
                { id: 4, name: "Ravi", age: 27, city: "Mumbai", mark: 50, suggestions: [1, 4, 8] },
                { id: 5, name: "Sachin", age: 23, city: "Chennai", mark: 44, suggestions: [3, 11, 4] },
                { id: 6, name: "Vidrohi", age: 29, city: "Vadodara", mark: 72, suggestions: [12, 10, 3] },
                { id: 7, name: "Ashish", age: 27, city: "Pune", mark: 89, suggestions: [1, 9, 12] },
                { id: 8, name: "Amir", age: 23, city: "Surat", mark: 43, suggestions: [11, 12, 8] },
                { id: 9, name: "Ravi", age: 21, city: "Banglore", mark: 65, suggestions: [8, 9, 10] },
                { id: 10, name: "Sameer", age: 27, city: "Mumbai", mark: 50, suggestions: [10, 6, 8] },
                { id: 11, name: "Vikram", age: 23, city: "Chennai", mark: 44, suggestions: [3, 2, 1] },
                { id: 12, name: "Jit", age: 29, city: "Vadodara", mark: 72, suggestions: [4, 5, 7] },
                ]
        
    }
}
    render() {
        const datas=this.state.dataObject.map(data=>{
            console.log(data);
            return(
                <li key={data.id}>
                Name:{data.name},
                Age:{data.age}, City:{data.city}
            </li>
            )
        })
        return (
            <div>
                <ul>{datas}</ul>
               
            </div>
        )
    }
}














