<template>
  <div :class="['AccountTransactions']">
  <h2> {{$store.state.selectedAccount.name}} - siste 30 transaksjoner </h2>
  <div>
    <table :class="['transactions']">
      <tr><th> Dato </th><th> Forklaring </th><th>Ut fra konto</th><th>Inn på konto</th></tr>
      <tr v-for="transaction in $store.state.selectedAccount.recentTransactions">
        <td>{{transaction.date}}</td>
        <td :class="['transaction-text']">{{transaction.text}}</td>
        <td :class="['transaction-currency', 'outgoing']"> <span v-if="transaction.outgoing > 0">{{transaction.outgoing | formatCurrency }}</span></td>
        <td :class="['transaction-currency', 'incoming']"><span v-if="transaction.incoming > 0">{{transaction.incoming | formatCurrency }}</span></td>
      </tr>
    </table>
    </div>
</div>

</template>

<script>
export default {
  name: 'AccountTransactions',
  data() {
    return {};
  }
};
</script>

<style>
.AccountTransactions {
  width: 100%;
  margin-left: 5vw;
}
.transactions {
  width: 100%;
  border-collapse: collapse;
}
.transactions tr {
  border-collapse: collapse;
  border-bottom: 1px solid #d3d3d3;
}

.transactions td {
  padding: 10px;
}

.transactions th {
  text-align: left;
}
.transaction-text {
  text-align: left;
  text-transform: capitalize;
  margin-left: 20px;
}

.transaction-currency {
  text-align: right;
}
</style>
