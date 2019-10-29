<template>
    <div class="">
        <h2>Quotes Added</h2>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" :style="{width: (quotes.length / maxLength) * 100 + '%'}">
             {{quotes.length}} / {{maxLength}}
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    props : ["quotes","maxLength"],
    data() {
      return {
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
</style>
