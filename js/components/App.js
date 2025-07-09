export default {
    template: `
        <section 
            v-show="activeTodos.length">
            <h2 class="text-2xl font-bold mb-2">Active Todos</h2>
            <ul>
                <li 
                    :key="todo.id"
                    v-for="todo in activeTodos">
                    <label>
                        {{ todo.title }}

                        <input type="checkbox" v-model="todo.is_completed">
                    </label>
                </li>
            </ul>
        </section>

        <section class="mt-8"
            v-show="completedTodos.length">
            <h2 class="text-xl font-bold mb-2">Completed Todos</h2>
            <ul>
                <li 
                    :key="todo.id"
                    v-for="todo in completedTodos">
                    <label>
                        {{ todo.title }}

                        <input type="checkbox" v-model="todo.is_completed">
                    </label>
                </li>
            </ul>
        </section>
    `,

    data() {
        return {
            todos: [
                { id: 1, title: 'Buy groceries', is_completed: false },
                { id: 2, title: 'Finish the project', is_completed: false },
                { id: 3, title: 'Call the plumber', is_completed: false }                
            ]
        }
    },

    computed: {
        activeTodos() {
            return this.todos.filter(filtered => ! filtered.is_completed)
        },

        completedTodos() {
            return this.todos.filter(filtered => filtered.is_completed)
        }
    }
}