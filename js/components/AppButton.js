export default {
    template: `
        <button 
            :class="{
                'border rounded px-5 py-4 disabled:cursor-not-allowed': true,
                'bg-blue-200': type === 'primary',
                'bg-purple-200': type === 'secondary',
                'bg-gray-200': type === 'muted'
            }"
            :disabled="is_loading">
            <slot />
        </button>
    `,
    
    props: {
        type: {
            type: String,
            default: 'primary'
        },

        is_loading: {
            type: Boolean,
            default: false
        }
    }
}