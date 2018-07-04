<template>
  <div>
  <h1> Profil </h1>
  <div>
    <img src="./../assets/logo.png">

    <div><strong :class="['profile-name']">{{$store.state.profile.name}}</strong></div>
    <div :class="['profile-ssn']">{{$store.state.profile.ssn | formatSSN}}</div>
    </div>
</div>

</template>

<script>
export default {
  name: 'Profile',
  data() {
    return {};
  },
  filters: {
    formatSSN: function(value) {
      let characterArray = value.toString().split('');
      characterArray.splice(6, 0, ' ');
      return characterArray.join('');
    }
  }
};
</script>
