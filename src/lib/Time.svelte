<script>
  export let date;
</script>

<time datetime={new Date(date).toISOString()}
  >{new Date(date).toLocaleDateString()}</time>
