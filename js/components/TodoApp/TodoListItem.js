export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                {{ task.title }}

                <input type="checkbox" v-model="task.is_completed" class="ml-3">
            </label>
        </li>
    `,

    props: {
        task: Object
    }
}