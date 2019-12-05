import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reset, SubmissionError } from 'redux-form';
import Paginate from '../UI/Paginate';
import { loadTasks, createTask, editTask } from '../../actions/tasks';
import Task from '../UI/Task';
import CreateTaskForm from './forms/CreateTaskForm';
import Select from '../UI/Select';

class HomePage extends Component {
    state = {
        activePage: 1,
        sortField: '-',
        sortDirection: '-'
    };

    componentDidMount() {
        this.props.actions.loadTasks({page: 1});
    }

    onCreateTask = async formData => {
        try {
            await this.props.actions.createTask(formData);
            this.props.dispatch(reset('CreateTaskForm'));
            this.props.actions.loadTasks({page: this.state.activePage});
        } catch(e) {
            if(Object.keys(e).length)
                throw new SubmissionError(e);
            else
                console.error(e);
        }
    };

    onPageChange = page => {
        this.props.actions.loadTasks({
            ...this.getSortParams(),
            page
        });
        this.setState({activePage: page});
    };

    onSortDirectionChange = e => {
        this.props.actions.loadTasks({
            ...this.getSortParams(),
            sort_direction: e.target.value
        });
        this.setState({sortDirection: e.target.value});
    };

    onSortFieldChange = e => {
        this.props.actions.loadTasks({
            ...this.getSortParams(),
            sort_field: e.target.value
        });
        this.setState({sortField: e.target.value});
    };

    getSortParams = () => {
        let { activePage, sortField, sortDirection } = this.state;
        let params = {};
        if(activePage && activePage !== '-')
            params.page = activePage;
        if(sortField && sortField !== '-')
            params.sort_field = sortField;
        if(sortDirection && sortDirection !== '-')
            params.sort_direction = sortDirection;
        return params;
    };

    render() {
        let { activePage, sortField, sortDirection } = this.state;
        let { tasks, auth, actions } = this.props;

        return (
            <div className="home-page container">
                <CreateTaskForm onSubmit={this.onCreateTask} />
                <div className="home-page__list-controls row">
                    <div className="col-8">
                        <Paginate
                            pageCount={Math.ceil(tasks.totalTasksCount / 3)}
                            activePage={activePage}
                            onPageChange={this.onPageChange}
                        />
                    </div>
                    <div className="home-page__list-controls__sorting col-4 row">
                        <div className="text-light">
                            Sort field:
                        </div>
                        <Select
                            value={sortField}
                            options={['-', 'id', 'username', 'email', 'status']}
                            onChange={this.onSortFieldChange}
                        />
                        <div className="text-light">
                            Sort direction:
                        </div>
                        <Select
                            value={sortDirection}
                            options={['-', 'asc', 'desc']}
                            onChange={this.onSortDirectionChange}
                        />
                    </div>
                </div>
                {tasks.tasksList.map(task => <Task task={task} key={task.id} isAuthenticated={auth.isAuthenticated} editTask={toEdit => actions.editTask(toEdit, task)}/>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks,
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        loadTasks,
        createTask,
        editTask
    }, dispatch),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);