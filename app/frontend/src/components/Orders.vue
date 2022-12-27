<template>
  <main class="main-orders">
    <header>
      <img src="https://cashforce.com.br/wp-content/themes/cashforce/assets/images/logo-cashforce.svg" alt="logo"/>
    </header>
    <div class="principal">
      <section class="menu-item">
        <p> <img src="../assets/Vector.png" alt="hanshake"/> Notas fiscais</p>
      </section>
      <div class="table-orders">
        <h2> <img src="../assets/handshake.png" alt="hanshake"/> Notas fiscais</h2>
        <p>Visualize as notas fiscais que você tem.</p>
        <table class="table">
          <thead>
            <tr class="title-table">
              <th>NOTA FISCAL</th>
              <th>SACADO</th>
              <th>CEDENTE</th>
              <th>EMISSÃO</th>
              <th>VALOR</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="elements-table">
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.orderNumber }}</td>
              <td>{{ order.buyer.name }}</td>
              <td>{{ order.provider.name }}</td>
              <td>{{ formatDate(order.emissionDate) }}</td>
              <td class="value">{{ Number(order.value).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) }}</td>
              <td class="status" v-if="order.orderStatusBuyer == 0">PENDENTE DE CONFIRMAÇÃO</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 1">PEDIDO CONFIRMADO</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 2">NÃO RECONHECE O PEDIDO</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 3">MERCADORIA NÃO RECEBIDA</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 4">RECEBIDA COM AVARIA</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 5">DEVOLVIDA</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 6">RECEBIDA COM DEVOLUÇÃO PARCIAL</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 7">RECEBIDA E CONFIRMADA</td>
              <td class="status" v-else-if="order.orderStatusBuyer == 8">PAGAMENTO AUTORIZADO</td>
              <td>
                <button
                  class="button-data"
                  type="button"
                >
                  Dados do cedente
                </button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
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

<style>
body {
  font-family: 'DM Sans';
}

.main-orders header {
  margin: 2em;
}

.main-orders header img {
  width: 15em;
}

.principal {
  display: flex;
  margin-top: 2em;
}

.menu-item {
  display: flex;
  align-items: baseline;
  color: #00AD8C;
  border-left: 2px solid #00AD8C;
  font-size: 1.2em;
  padding-left: 2em;
  height: 3em;
  width: 15%;
}

.menu-item p img {
  color: #00AD8C;
}

.table-orders {
  border-top: 1px solid #DFE2EB;
  width: 80%;
}

.table-orders h2 {
  color: #021B51;
}

.table-orders p {
  color: #727D94;
}

.table {
  width: 100%;
  height: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8em;
}

.title-table {
  color: #A1A8B8;
  text-align: left;
}

.elements-table {
  color: #4D5566;
}

.elements-table tr {
  border-left: 1px solid;
  border-color: #DFE2EB;
}

.elements-table tr td{
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #DFE2EB;
}

.value {
  color: #00AD8C;
}

.status {
  color: #00AD8C;
  font-weight: bold;
}

.button-data {
  color: #727D94;
  background-color: white;
  border: 1px solid;
  padding: 1em;
  width: 13em;
  font-weight: bold;
  border-radius: 50px;
  border-color: #9ba6bd;
}
</style>
