<template>
  <main class="main-orders">
    <header>
      <h1>Cashforce</h1>
    </header>
    <section class="menu-item">
      <p>Notas fiscais</p>
    </section>
    <div>
      <h2>Notas fiscais</h2>
      <p>Visualize as notas fiscais que você tem.</p>
      <table>
        <thead>
          <tr>
            <th>NOTA FISCAL</th>
            <th>SACADO</th>
            <th>CEDENTE</th>
            <th>EMISSÃO</th>
            <th>VALOR</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.orderNumber }}</td>
            <td>{{ order.buyer.name }}</td>
            <td>{{ order.provider.name }}</td>
            <td>{{ formatDate(order.emissionDate) }}</td>
            <td>{{ Number(order.value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }}</td>
            <td v-if="order.orderStatusBuyer == 0">Pendente de confirmação</td>
            <td v-else-if="order.orderStatusBuyer == 1">Pedido confirmado</td>
            <td v-else-if="order.orderStatusBuyer == 2">Não reconhece o pedido</td>
            <td v-else-if="order.orderStatusBuyer == 3">Mercadoria não recebida</td>
            <td v-else-if="order.orderStatusBuyer == 4">Recebida com avaria</td>
            <td v-else-if="order.orderStatusBuyer == 5">Devolvida</td>
            <td v-else-if="order.orderStatusBuyer == 6">Recebida com devolução parcial</td>
            <td v-else-if="order.orderStatusBuyer == 7">Recebida e confirmada</td>
            <td v-else-if="order.orderStatusBuyer == 8">Pagamento Autorizado</td>
            <td>
              <button
                type="button"
              >
                Dados do cedente
              </button>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
  </main>
</template>

<script>
import moment from 'moment'

export default {
  name: 'OrdersMain',
  data() {
    return {
      orders: [],
    };
  },
  created() {
    fetch("http://localhost:3001/orders/")
      .then(response => response.json())
      .then(data => (this.orders = data));
      },
  methods: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
        }
    },
    formatValue(value) {
      if (value) {
        return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
      }
    }
  }
};
</script>

<style scoped>

</style>
