<template>
<div>
    <typ-board-header></typ-board-header>
    <typ-board></typ-board>
</div>
</template>

<script>
import TypBoardHeader from "@/components/TypBoardHeader";
import TypBoard from "@/components/TypBoard";

export default {
  components: {
    TypBoardHeader,
    TypBoard
  }
};
</script>
