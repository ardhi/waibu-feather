async function waibuMpaFeatherAfterBuildPage ({ $ }) {
  const inline = `
<script>
  feather.replace()
</script>`
  $('body').append(inline)
}

export default waibuMpaFeatherAfterBuildPage
