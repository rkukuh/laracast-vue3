import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

export default {
    components: {
        TodoList,
        TodoForm
    },

    template: `
        <section class="space-y-6">
            <TodoList
                :tasks="filters.active"
                title="Active Tasks">
            </TodoList>

            <TodoList
                :tasks="filters.completed"
                title="Completed Tasks">
            </TodoList>
            
            <TodoForm @addNew="addNew"></TodoForm>           
        </section>
    `,

    data() {
        return {
            tasks: [
                { id: 1, title: 'Buy groceries', is_completed: false, tag: 'personal' },
                { id: 2, title: 'Finish the project', is_completed: false, tag: 'work' },
                { id: 3, title: 'Work on math assignment', is_completed: false, tag: 'school' },
                { id: 4, title: 'Read chemistry book', is_completed: false, tag: 'school' },
            ]
        }
    },

    computed: {
        filters() {
            return {
                active: this.tasks.filter(task => ! task.is_completed),
                completed: this.tasks.filter(task => task.is_completed)
            }
        }
    },

    methods: {
        addNew(taskTitle) {
            this.tasks.push({
                id: this.tasks.length + 1,
                title: taskTitle,
                is_completed: false
            });
        }
    }
}