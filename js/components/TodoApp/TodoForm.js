export default {
    template: `
        <form @submit.prevent="addNew">
            <div class="border border-gray-600 text-block">
                <input
                    v-model="newTask" 
                    type="text" 
                    placeholder="New task..." 
                    class="p-2">
                <button type="submit" class="bg-white p-2 border-l">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newTask: ''
        }
    },

    methods: {
        addNew() {
            this.$emit('addNew', this.newTask);

            this.newTask = '';
        }
    }
}