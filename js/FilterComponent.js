Vue.component('filter-comp', {
    template: ` <form action="#" class="search-form" @submit.prevent="filter" >
                    <input type="text" class="search-field" v-model="userSearch" @input="$root.filter()">
                    <button type="submit" class="btn-search"
                        <i class="fas fa-search"></i>
                    </button>
                </form> `
})