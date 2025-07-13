import TodoListItem from './TodoListItem.js';

export default {
    components: {
        TodoListItem
    },

    template: `
        <section v-show="tasks.length">
            <h2 class="text-2xl font-bold mb-2">
                {{ title }}
                <span>({{ tasks.length }})</span>
            </h2>

            <ul class="border border-gray-600 divide-y divide-gray-600">
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