import React from 'react';


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sourceIncome: '',
            sourceExpense: '',
            amount: '',
            expenseAmount: '',
            incomeArr: [],
            expenseArr: [],
            saving: '',
            clicked: false,
            clickedbtnn: false,
        }
    }

    handleIncomeSource = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleIncomeAmount = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleExpenseSource = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleIncomeDetails = () => {
        const arr = {
            sourceIncome: this.state.sourceIncome,
            amount: this.state.amount,
            saving: this.state.saving,

        }
        this.setState({
            incomeArr: [...this.state.incomeArr, arr],
            clicked: true,
        });
        if(this.state.amount!== this.state.amount){
            this.state.clicked= false;
        }
    }
    handleExpenseDetails = () => {
        const object = {
            sourceExpense: this.state.sourceExpense,
            expenseAmount: this.state.expenseAmount,
            saving: this.state.saving,

        }
        this.setState({
            expenseArr: [...this.state.expenseArr, object],
            clickedbtn: true,
        });
    }
    showSaving = (e) => {
        this.setState({
            saving: this.state.income - this.state.expenseAmount,
        });
    }
        
    render() {
        console.log(this.state.clicked);
        return (
            <div>
                <div className="jumbotron" style={{ background: "linear-gradient(to right, #009fff, #ec2f4b)" }}>
                    <div className="container">
                        <h3 className="display-4 text-center text-light">Expense Calculator</h3>
                    </div>
                </div>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card " style={{ width: "18rem", border: "1px solid black" }}>
                                <div className="card-body ">
                                    <h5 className="card-title text-center">Saving</h5>
                                    <p className="card-text">{this.state.saving}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" style={{ width: "18rem", border: "1px solid black" }}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Expense</h5>
                                    {this.state.clickedbtn ? <p className="card-text text-danger text-center">
                                        {this.state.expenseAmount}</p> : null}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card" style={{ width: "18rem", border: "1px solid black" }}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">Income</h5>
                                    {this.state.clicked ? <p className="card-text text-success text-center">
                                        {this.state.amount}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div><br />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Income Source</label>
                        <div className="col-sm-10 col-lg-3 ml-n4">
                            <input type="email" className="form-control"
                                id="inputEmail3" placeholder="Source"
                                name="sourceIncome"
                                onChange={this.handleIncomeSource} value={this.state.sourceIncome} />
                        </div>
                        <label className="col-sm-2 col-form-label ml-3">Expense Source</label>
                        <div className="col-sm-10 col-lg-3 ">
                            <input type="email" className="form-control"
                                placeholder="Source"
                                name="sourceExpense"
                                onChange={this.handleExpenseSource} value={this.state.sourceExpense} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Amount</label>
                        <div className="col-sm-10 col-lg-3 ml-n4">
                            <input type="text" className="form-control"
                                placeholder="Amount"
                                name="amount"
                                onChange={this.handleIncomeAmount} />
                            <button type="button" className="btn btn-primary item-center mt-4"
                                onClick={this.handleIncomeDetails}>Submit</button>
                        </div>
                        <label className="col-sm-2 col-form-label ml-3">Amount</label>
                        <div className="col-sm-10 col-lg-3">
                            <input type="text" className="form-control"
                                placeholder="Amount"
                                name="expenseAmount"
                                onChange={this.handleExpenseSource} value={this.state.expenseAmount} />
                            <button type="button" className="btn btn-primary item-center mt-4"
                                onClick={this.handleExpenseDetails}>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <button type="button" className="btn btn-primary py-3 mt-2 ml-5 px-2"
                        onClick={this.showSaving}>Show Saving</button>
                </div>
                <div className="container">
                    <div className="container float-left mt-5" style={{ width: "25rem" }}>
                        <h3 className="ml-5">Income Details</h3>

                        {this.state.incomeArr.map((incomeArr) => {
                            return (
                                <div>
                                    <div className="jumbotron" style={{
                                        background: "linear-gradient(to right, #c31432, #240b36)",
                                        marginTop: "10px", width: "20rem"
                                    }}>
                                        {/* <div className="container"> */}

                                        <h5 className="text-center text-light">{incomeArr.sourceIncome}-{incomeArr.amount}</h5><br />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="container float-right ml-n5 mt-5" style={{ width: "25rem" }}>
                        <h3 className="ml-5">Expense Details</h3>
                        {this.state.expenseArr.map((expenseArr) => {
                            return (
                                <div>
                                    <div className="jumbotron" style={{
                                        background: "linear-gradient(to right, #c31432, #240b36)",
                                        marginTop: "10px", width: "20rem"
                                    }}>
                                        <h5 className="text-center text-light">{expenseArr.sourceExpense}-{expenseArr.expenseAmount}</h5><br />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}