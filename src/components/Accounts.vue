<template>
  <div>
  <h2> Kontoer </h2>
  <table>
    <thead>
      <th>Navn</th>
      <th>Kontonummer </th>
      <th>Balanse </th>
    </thead>
    <tbody>
    <tr v-for="account in $store.state.profile.accounts" @click="selectAccount(account)">
      <td :class="['account-name']"><strong> {{ account.name }} </strong></td>
      <td :class="['account-number']"> {{account.accountNumber | formatAccountNumber}} </td>
      <td :class="['account-balance']"> {{account.balance | formatCurrency}} </td>
    </tr>
  </tbody>
  </table>
</div>

</template>

<script>
export default {
  name: 'Accounts',
  data() {
    return {};
  },
  methods: {
    selectAccount: function(selectedAccount) {
      this.$store.dispatch('selectAccount', selectedAccount);
    }
  },
  filters: {
    formatAccountNumber: function(value) {
      let characterArray = value.toString().split('');
      characterArray.splice(4, 0, '.');
      characterArray.splice(7, 0, '.');
      return characterArray.join('');
    }
  }
};
</script>

<style>
table {
  width: 400px;
  border-collapse: collapse;
}

th {
  text-align: left;
}

tr {
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

tr:hover {
  border-bottom: 2px solid #4fc08d;
  padding-bottom: 0px;
}
.account-name,
.account-number {
  text-align: left;
}

.account-balance {
  text-align: right;
}
</style>
