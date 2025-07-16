import TodoListItem from './TodoListItem.js';
import TodoListTag from "./TodoListTag.js";

export default {
    components: {
        TodoListItem,
        TodoListTag
    },

    template: `
        <section v-show="tasks.length">
            <h2 class="text-2xl font-bold mb-2">
                {{ title }}
                <span>({{ tasks.length }})</span>
            </h2>
            
            <TodoListTag 
                v-model:currentTag="currentTag"
                :initial-tags="tasks.map(task => task.tag)"/>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <TodoListItem
                    v-for="task in filteredTasks"
                    :key="task.id"
                    :task="task">
                </TodoListItem>
            </ul>
        </section>
    `,

    props: {
        tasks: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        };
    },

    computed: {
        filteredTasks() {
            if (this.currentTag === 'all') {
                return this.tasks;
            }

            return this.tasks.filter(task => task.tag === this.currentTag);
        }
    }
}