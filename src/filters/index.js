const filters = [
  {
    name: 'formatCurrency',
    excute: function(value) {
      let valueString = value.toString().replace('.', ',');
      let characterArray = valueString.toString().split('');

      if (value > 1000000) {
        let spliceIndex = characterArray.length - 6;
        characterArray.splice(spliceIndex, 0, '.');

        characterArray.splice(1, 0, '.');
      } else if (value > 1000) {
        let spliceIndex = characterArray.length - 6;
        characterArray.splice(spliceIndex, 0, '.');
      }

      return characterArray.join('');
    }
  }
];

export default filters;
