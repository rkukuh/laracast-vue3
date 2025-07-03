export default {
    template: `
        <button 
            class="bg-gray-200 border rounded px-5 py-4 disabled:cursor-not-allowed"
            :disabled="is_loading">
            <slot />
        </button>
    `,
    
    props: {
        type: {
            type: String,
            default: 'primary'
        }
    },

    data() {
        return {
            is_loading: true
        }
    }
}