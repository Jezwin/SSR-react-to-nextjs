import React, { Component } from 'react';

class Admin extends Component {
    state = { data: null,
    isUpdated: false }
    
    componentDidMount() {
        this.getData();
    }
    deleteData= (id)=> {
        fetch(`/aukiserver/admin?id=${id}`,{
            method: 'DELETE',
        }).then((response)=> response.text())
            .then((data)=> {
                if(data === 'success') {
                    alert("Entry deleted");
                    const update = !this.state.isUpdated;
                    this.setState({
                        isUpdated:update
                    });
                }
                else {
                    alert("Unable to delete the entry!!");
                }
            })
            .catch((error)=> console.log(error));
    }
    componentDidUpdate() {
        this.getData();
    }

    getData = ()=> {
        fetch("/aukiserver/admin")
        .then((response)=>  response.text())
        .then((datas)=>{
            if(datas !== 'error'){
                this.setState({data: JSON.parse(datas)});
            }
            else {
                this.setState({data: "error"});
            }
        } )
        .catch((error)=> console.log(error));
    }
    render() { 
        return ( 
            <React.Fragment>
                { this.state.data && this.state.data !== 'error' ?  
                    <div>{this.state.data.map((data,index)=>{
                        return (
                            <React.Fragment  key={index}>
                                <button onClick={()=>{this.deleteData(data.id)}}>Delete Entry</button>
                                <ul>
                                <li> <b>First Name:   {data.fname}</b></li>
                                <li> <b>Last Name:   {data.lname}</b></li>
                                <li> <b>Email:   {data.email}</b></li>
                                <li>  <b>Phone:   {data.phone}</b></li>
                                <li>  <b>Company Name:   {data.companayName}</b></li>
                                <li>  <b>Company size:   {data.companySize}</b></li>
                                <li>  <b>No. of contractors hiring:   {data.contractorHiring}</b></li>
                                <li>  <b>Breif description of skills and expirence :   {data.skillAndExpirence}</b></li>
                                </ul>
                            </React.Fragment>
                        );
                    })}</div>
                : null}
                { !this.state.data ? <h1>Loading data...</h1> : null }
                { this.state.data === "error" ? <h1>Something went wrong!!</h1> :null}
            </React.Fragment>
        );
    }
}
 
export default Admin;