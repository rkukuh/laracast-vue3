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
            tasks: []
        }
    },

    created() {
        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(data => {
                this.tasks = data;
            })
            .catch(error => console.log(error));
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