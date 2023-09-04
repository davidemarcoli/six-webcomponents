<template>
<div>

        <six-select placeholder="Select a few" multiple clearable>
          <six-menu-item value="option-1"
            >Option 1
            <six-button type="link" target="_blank" href="https://www.six-group.com/" slot="suffix">
              <six-icon>info</six-icon></six-button></six-menu-item>
          <six-menu-item value="option-2">Option 2</six-menu-item>
          <six-menu-item value="option-3">Option 3</six-menu-item>
          <six-menu-divider></six-menu-divider>
          <six-menu-item value="option-4">Option 4</six-menu-item>
          <six-menu-item value="option-5">Option 5</six-menu-item>
          <six-menu-item value="option-6">Option 6 (with tooltip due to long text)</six-menu-item>
          <six-menu-item value="option-7">Option 7 (with tooltip due to long text)</six-menu-item>
          <six-menu-item value="option-8">Option 8 (with tooltip due to long text)</six-menu-item>
          <six-menu-item value="option-9">Option 9 (with tooltip due to long text)</six-menu-item>
        </six-select>
      
</div>
</template>
<style>

</style>
<script>
export default {
  name: 'docs-demo-six-select-10',
  mounted() {  }
}
</script>