import TodoListItem from './TodoListItem.js';

export default {
    components: {
        TodoListItem
    },

    template: `
        <section v-show="tasks.length">
            <h2 class="text-2xl font-bold mb-2">
                {{ title }}
            </h2>

            <ul>
                <TodoListItem
                    v-for="task in tasks"
                    :key="task.id"
                    :task="task">
                </TodoListItem>
            </ul>
        </section>
    `,

    props: {
        tasks: Array,
        title: String
    }
}