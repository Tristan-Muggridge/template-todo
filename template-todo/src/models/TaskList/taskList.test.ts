import {UserTaskList as TaskList} from '.';
import {UserTask as Task} from '../Task';
import {expect, test} from 'vitest'

test('should create a valid task list with only a title', () => {
    const taskList = new TaskList();
    expect(taskList.tasks).to.deep.equal([]);
});

test('should create a valid task list with a title and description', () => {
    const taskList = new TaskList();
    expect(taskList.tasks).to.deep.equal([]);
});

const taskList = new TaskList();

test('should allow for the addition of tasks', () => {
    const task = new Task('title');
    taskList.addTask(task);
    expect(taskList.tasks).to.deep.equal([task]);
});

test('should allow for multiple insertion of tasks', () => {
    const task1 = new Task('first', 'the first of many');
    const task2 = new Task('second', 'the second of many');
    const task3 = new Task('third', 'the last of many');
    
    taskList.addTasks([task1, task2, task3]);

    expect(taskList.tasks.length).to.equal(4);
    expect(taskList.tasks).to.include.members([ task1, task2, task3 ]);
});

test('should allow for the updating of tasks', () => {
    const updatedTask = taskList.tasks[Math.floor(Math.random() * taskList.tasks.length)];
    updatedTask.title = `updated ${updatedTask.title}`;
    updatedTask.description = `updated ${updatedTask.description}`;
    updatedTask.completed = true;

    taskList.updateTask(updatedTask);

    expect(taskList.tasks).to.include(updatedTask);
});

test('should allow for deletion of tasks', () => {
    // get a random task
    const deletedTask = taskList.tasks[Math.floor(Math.random() * taskList.tasks.length)];
    taskList.deleteTask(deletedTask);
    expect(taskList.tasks).to.not.include(deletedTask);
});