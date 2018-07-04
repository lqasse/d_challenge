<template>
  <div id="app">
    <div>
    <Profile/>
    <Accounts/>
  </div>
    <AccountTransactions v-if="$store.state.selectedAccount" />
  </div>
</template>

<script>
import Profile from './components/Profile';
import Accounts from './components/Accounts';
import AccountTransactions from './components/AccountTransactions';

export default {
  name: 'App',
  components: {
    Profile,
    Accounts,
    AccountTransactions
  },
  filters: {}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1350px;
}
</style>
