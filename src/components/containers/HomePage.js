import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset, SubmissionError } from 'redux-form';
import { loadTasks, createTask } from '../../actions/tasks';
import Task from '../UI/Task';
import CreateTaskForm from './forms/CreateTaskForm';
// import tasks from '../../utils/mocks/tasks';

class HomePage extends Component {
    componentDidMount() {
        this.props.actions.loadTasks();
    }

    onCreateTask = async formData => {
        try {
            await this.props.actions.createTask(formData);
            this.props.dispatch(reset('CreateTaskForm'));
        } catch(e) {
            if(Object.keys(e).length)
                throw new SubmissionError(e);
            else
                console.error(e);
        }
    };

    render() {
        return (
            <div className="container">
                <CreateTaskForm onSubmit={this.onCreateTask} />
                {this.props.tasksList.map(task => <Task task={task} key={task.id} />)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasksList: state.tasks.tasksList
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadTasks,
        createTask
    }, dispatch),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);