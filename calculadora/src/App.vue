<script>
export default {
  name: 'App',
  data() {
    return {
      display: '0',
      operator: '',
      firstNumber: '',
      secondNumber: '',
      result: ''
    }
  },
  methods: {
    clear() {
      this.display = '0'
      this.operator = ''
      this.firstNumber = ''
      this.secondNumber = ''
      this.result = ''
    },
    addNumber(number) {
      if (this.operator === '') {
        this.firstNumber += number
        this.display = this.firstNumber
      } else {
        this.secondNumber += number
        this.display = this.secondNumber
      }
    },
    addOperator(operator) {
      this.operator = operator
    },
    calculate() {
      if (this.operator === '+') {
        this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber)
      } else if (this.operator === '-') {
        this.result = parseInt(this.firstNumber) - parseInt(this.secondNumber)
      } else if (this.operator === '*') {
        this.result = parseInt(this.firstNumber) * parseInt(this.secondNumber)
      } else if (this.operator === '/') {
        this.result = parseInt(this.firstNumber) / parseInt(this.secondNumber)
      }
      this.display = this.result
    }
  }
}
</script>
<template>
  <div id="app">
    <div class="calculator">
      <div class="display">{{ display }}</div>
      <div class="buttons">
        <button @click="clear">C</button>
        <button @click="addNumber('7')">7</button>
        <button @click="addNumber('8')">8</button>
        <button @click="addNumber('9')">9</button>
        <button @click="addOperator('/')">/</button>
        <button @click="addNumber('4')">4</button>
        <button @click="addNumber('5')">5</button>
        <button @click="addNumber('6')">6</button>
        <button @click="addOperator('*')">*</button>
        <button @click="addNumber('1')">1</button>
        <button @click="addNumber('2')">2</button>
        <button @click="addNumber('3')">3</button>
        <button @click="addOperator('-')">-</button>
        <button @click="addNumber('0')">0</button>
        <button @click="calculate">=</button>
        <button @click="addOperator('+')">+</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.calculator {
  width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.display {
  background-color: #f0f0f0;
  border: 1px solid #3b3b3b;
  color: black;
  border-radius: 5px;
  padding: 10px;
  text-align: right;
  margin-bottom: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
}

</style>