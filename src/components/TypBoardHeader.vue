<template>
<div id="typboard-header-container">
    <div id="header-content">
        <span class="tag is-danger">Scala</span>
        <span class="icon is-medium"><i class="fas fa-bed fa-pulse"></i></span>
    </div>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
$headerBoarderColor: mediumaquamarine;

#typboard-header-container {
  border-top: medium solid $headerBoarderColor;
  border-right: medium solid $headerBoarderColor;
  border-left: medium solid $headerBoarderColor;
  border-bottom: thin solid $headerBoarderColor;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 5em;
  background-color: lime;
}

#header-content {
  margin-top: 1em;
}
</style>
