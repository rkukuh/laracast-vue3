import TodoList from './TodoList.js';

export default {
    components: {
        TodoList
    },

    template: `
        <section class="space-y-6">
            <TodoList
                :tasks="activeTasks"
                title="Active Tasks">
            </TodoList>

            <TodoList
                :tasks="completedTasks"
                title="Completed Tasks">
            </TodoList>
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
        activeTasks() {
            return this.tasks.filter(filtered => ! filtered.is_completed)
        },

        completedTasks() {
            return this.tasks.filter(filtered => filtered.is_completed)
        }
    }
}