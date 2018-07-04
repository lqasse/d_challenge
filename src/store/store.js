import Vue from 'vue';
import Vuex from 'vuex';

import loremIpsum from 'lorem-ipsum';
import moment from 'moment';
Vue.use(Vuex);

let mockTransactions = () => {
  let transactions = [];
  const transactionCount = 30;
  const maxWordLength = 8;
  const maxTransactionAmount = 100000;
  let timestamp = moment();
  for (let i = 0; i < transactionCount; i++) {
    let wordLenght = Math.floor(Math.random() * maxWordLength + 1);
    let sum = Math.floor(Math.random() * maxTransactionAmount + 1) / 100;
    let incoming = Math.random() > Math.random();
    let outgoing = !incoming;

    let subtractMinutes = Math.floor(Math.random() * 1200) + 1;
    timestamp = timestamp.subtract(subtractMinutes, 'minutes');
    transactions.push({
      date: timestamp.format('D. MMM'),
      text: loremIpsum({ count: wordLenght, units: 'words' }),
      outgoing: outgoing ? sum : 0,
      incoming: incoming ? sum : 0
    });
  }
  return transactions;
};

let mockAccountNumber = () => {
  let account = [];
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 10);
    account.push(number);
  }
  return account.join('');
};

let state = {
  profile: {
    name: 'Ola Nordmann',
    ssn: 20099045152,
    accounts: [
      {
        name: 'Brukskonto',
        accountNumber: mockAccountNumber(),
        balance: '103030.23',
        recentTransactions: mockTransactions()
      },
      {
        name: 'Sparekonto',
        accountNumber: mockAccountNumber(),
        balance: '1000001.42',
        recentTransactions: mockTransactions()
      },
      {
        name: 'BSU',
        accountNumber: mockAccountNumber(),
        balance: '123003.94',
        recentTransactions: mockTransactions()
      },
      {
        name: 'Felleskonto',
        accountNumber: mockAccountNumber(),
        balance: '10000.00',
        recentTransactions: mockTransactions()
      },
      {
        name: 'Depositumskonto',
        accountNumber: mockAccountNumber(),
        balance: '40000.00',
        recentTransactions: mockTransactions()
      }
    ]
  },
  selectedAccount: null
};

let mutations = {
  SELECT_ACCOUNT: (state, payload) => {
    state.selectedAccount = payload;
  }
};

let actions = {
  selectAccount: (context, payload) => {
    context.commit('SELECT_ACCOUNT', payload);
  }
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});
