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
            
            <TodoForm></TodoForm>           
        </section>
    `,

    data() {
        return {
            tasks: [
                { id: 1, title: 'Buy groceries', is_completed: false },
                { id: 2, title: 'Finish the project', is_completed: false },
                { id: 3, title: 'Call the plumber', is_completed: false }                
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
        addNew() {
            this.tasks.push({
                id: this.tasks.length + 1,
                title: this.newTask,
                is_completed: false
            });
        }
    }
}