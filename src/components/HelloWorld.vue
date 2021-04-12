<template>
  <div class="hello">
    
  </div>
</template>
<script>
    export default {
        mounted() {
            this.$store.dispatch('users/fetchUsers')
                .then(() => {
                    console.log("done")
                })
        },
    }
</script>