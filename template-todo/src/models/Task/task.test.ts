import {UserTask as Task} from '.';

import {expect, test} from 'vitest'

test('should create a valid task with only a title', () => {
    const task = new Task('title');
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(false);
    expect(task.status).to.equal('upcoming');
    expect(task.priority).to.equal('low');
    expect(task.subTasks).to.deep.equal([]);
});

test('should create a valid task with a title and description', () => {
    const task = new Task('title', 'description');
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('description');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(false);
    expect(task.status).to.equal('upcoming');
    expect(task.priority).to.equal('low');
    expect(task.subTasks).to.deep.equal([]);
});

test('should create a valid task with a title, description, and due date', () => {
    const task = new Task('title', 'description', new Date(2023, 1, 1));
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('description');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(false);
    expect(task.status).to.equal('upcoming');
    expect(task.priority).to.equal('low');
    expect(task.subTasks).to.deep.equal([]);
});

test('should create a due date 12 hours from now if no due date is provided', () => {
    const task = new Task('title');
    const dueDate = new Date();
    dueDate.setHours(dueDate.getHours() + 12);
    expect(task.dueDate).to.be.a('date');
    expect(task.dueDate.getHours()).to.equal(dueDate.getHours());
    expect(task.dueDate.getMinutes()).to.equal(dueDate.getMinutes());
});

test('should create a valid task with a title, description, due date, and completed', () => {
    const task = new Task('title', 'description', new Date(2023, 1, 1), true);
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('description');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(true);
    expect(task.status).to.equal('upcoming');
    expect(task.priority).to.equal('low');
    expect(task.subTasks).to.deep.equal([]);
});

test('should create a valid task with a title, description, due date, completed, and status', () => {
    const task = new Task('title', 'description', new Date(2023, 1, 1), true, 'completed');
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('description');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(true);
    expect(task.status).to.equal('completed');
    expect(task.priority).to.equal('low');
    expect(task.subTasks).to.deep.equal([]);
});

test('should create a valid task with a title, description, due date, completed, status, and priority', () => {
    const task = new Task('title', 'description', new Date(2023, 1, 1), true, 'completed', 'high');
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('description');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(true);
    expect(task.status).to.equal('completed');
    expect(task.priority).to.equal('high');
    expect(task.subTasks).to.deep.equal([]);
});

test('should create a valid task with a title, description, due date, completed, status, priority, and subtasks', () => {
    const subtask = new Task('subtask')
    const task = new Task('title', 'description', new Date(2023, 1, 1), true, 'completed', 'high', [subtask]);
   
    expect(task.title).to.equal('title');
    expect(task.description).to.equal('description');
    expect(task.dueDate).to.be.a('date');
    expect(task.completed).to.equal(true);
    expect(task.status).to.equal('completed');
    expect(task.priority).to.equal('high');
    expect(task.subTasks).to.deep.equal([subtask]);
});
