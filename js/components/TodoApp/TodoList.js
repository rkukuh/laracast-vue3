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
            
            <div class="flex gap-2">
                <button 
                    @click="currentTag = tag"
                    v-for="tag in tags"
                    class="border rounded px-1 py-px text-xs">
                    {{ tag }}
                </button>
            </div>

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
            currentTag: ''
        };
    },

    computed: {
        tags() {
            return [...new Set(this.tasks.map(task => task.tag))];
        },

        filteredTasks() {
            if (! this.currentTag) {
                return this.tasks;
            }

            return this.tasks.filter(task => task.tag === this.currentTag);
        }
    }
}