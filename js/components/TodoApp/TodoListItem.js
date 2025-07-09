export default {
    template: `
        <li>
            <label>
                {{ task.title }}

                <input type="checkbox" v-model="task.is_completed">
            </label>
        </li>
    `,

    props: {
        task: Object
    }
}