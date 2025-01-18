<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding">
    <NuxtLink class="navbar-brand" to="/">MArion</NuxtLink>

    <el-dropdown class="navbar-toggler">
      <i class="navbar-toggler-icon" style="margin-right: 15px"></i>
      <el-dropdown-menu style="width:80vw;" slot="dropdown">
        <el-dropdown-item
          ><NuxtLink to="/products" class="nav-link"
            >Products <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
        <el-dropdown-item>
          <li class="nav-item active">
            <NuxtLink to="/my-items" class="nav-link"
              >My Items <span class="sr-only">(current)</span></NuxtLink
            >
          </li></el-dropdown-item
        >
        <el-dropdown-item
          ><NuxtLink to="/profile" class="nav-link"
            >profile <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><NuxtLink to="/element-checkbox" class="nav-link"
            >checkbox <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><NuxtLink to="/element-checkbox" class="nav-link"
            >checkbox <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><NuxtLink to="/element-ui" class="nav-link"
            >ui <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><NuxtLink to="/editor" class="nav-link"
            >editor <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
        <el-dropdown-item
          ><NuxtLink to="/content-editor" class="nav-link"
            >content-editor <span class="sr-only">(current)</span></NuxtLink
          ></el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>

    <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <NuxtLink to="/products" class="nav-link"
            >Products <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/my-items" class="nav-link"
            >My Items <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/profile" class="nav-link"
            >profile <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/element-checkbox" class="nav-link"
            >checkbox <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/element-ui" class="nav-link"
            >ui <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/editor" class="nav-link"
            >editor <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
        <li class="nav-item active">
          <NuxtLink to="/content-editor" class="nav-link"
            >content-editor <span class="sr-only">(current)</span></NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.padding {
  padding: 1.5rem;
  background-color: black;
}
.nav-left {
  margin-left: auto;
}
</style>
