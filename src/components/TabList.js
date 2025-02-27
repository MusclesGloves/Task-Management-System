import React, { Component } from 'react'

export default class TabList extends Component {

    render() {
        const {categories, updateCategory}= this.props

        return (
            <ul className="nav nav-tabs" style={{borderBottom: "3px solid #f39c1273"}} id="tablist">
                <li className="nav-item" key="All">
                    <div className="nav-link active" style={{backgroundColor: "#f39c1273", cursor: "pointer"}} data-toggle="tab" onClick={()=>updateCategory("All")}>All</div>
                </li>
                {
                    Object.keys(categories).map((id)=>{
                            return(  
                            <li className="nav-item" key={id}>
                                <div className="nav-link" style={{backgroundColor: "#f39c1273", cursor: "pointer"}} data-toggle="tab" onClick={()=>updateCategory(id)}>{categories[id].title}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
