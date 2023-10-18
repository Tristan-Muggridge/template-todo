# Template Todo

## Purpose:
The purpose of this application is to allow users to maintain a typical to do list, however - with the added emphasis of daily routine tasks.

Currently, solutions that I'm aware either focus too strictly on habit tracking - and thus create a situation where one-off activities being added to the list seems inappropriate, and other solutions require the user to input the same things every day for each day they intend to use the application.

This app will use a templating system, so that users may define a template which consists of the things they wish to have added to their todo list everyday by default. This template will be used to generate a todo list for each day, and the user will be able to add one-off tasks to the list as well.

## Features:
- [ ] User can create a template
- [ ] User can create a todo item
- [ ] User can complete a todo item
- [ ] User can delete a todo item
- [ ] User can view a todo item
- [ ] User can view a list of todo items
- [ ] User can filter todo items by status, or tag

## Technology:

- React
- TypeScript
- Node
- React Router

## Classes:

### TodoItem
- id: string
- name: string
- description: string
- tags: Tag[]
- status: Status
- dueDate: Date
- completedDate: Date
- subTasks: TodoItem[]

### Tag
- id: string
- name: string
- colour: string

### Status
- id: string
- name: string
- colour: string

### Template
- id: string
- name: string
- description: string
- Tasks: TodoItem[]
- isDefault: boolean

### User
- id: string
- username: string

### LocalUser
- id: string
- username: string
- password: string

### RegisteredUser
- id: string
- username: string
- password: string

### UserPreferences
- id: string
- userId: string
- defaultTemplate: Template
- defaultStatus: Status
- tags: Tag[]
- defaultTag: Tag
- fontSize: number
- theme: 'light' | 'dark'

### TodoList
- id: string
- name: string
- description: string
- items: TodoItem[]
- template: Template

## Routes:
/ - Home: show list of todo items
/todo/:id - Show todo item

/template - Show list of templates
/template/:id - Show template

## Phase 1:

- A user can create a todo item
- A user can view a todo item
- A user can view a list of todo items

- A user can setup a template
- A user can view a template
- A user can view a list of templates

- A user can load a template
- A user can set a default template