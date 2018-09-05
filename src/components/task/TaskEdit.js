import React, { Component } from "react"

export default class TaskEdit extends Component {
    // Set initial state
    state = {
        name: "",
        details: '',
        due: ''
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    editTask = evt => {
        evt.preventDefault()

            const task = {
                name: this.state.task,
                details: this.state.details,
            }
            const taskEditId = parseInt(this.props.match.params.taskId)
            // Create the animal and redirect user to animal list
            this.props.editTask(task, taskEditId, 'tasks').then(() => this.props.history.push("/tasks"))
        }
    

    render() {
        return (
            <React.Fragment>
                <form className="taskEdit">
                    <div className="form-group">
                        <label htmlFor="task">Edit Task</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="task"
                               placeholder="Edit" />
                    </div>
                    <button type="submit" onClick={this.editTask} className="btn btn-primary">Edit</button>
                </form>
            </React.Fragment>
        )
    }
}