# Boas vindas ao Backend do Teste Cash-Force!

## Técnologias usadas

Back-end:
> Desenvolvido usando: Javascript, API Restful, Sequelize, MySQL, Node.Js, Docker

<strong> 👀 Comandos úteis </strong><br />

- Você pode instalar as dependências particulares do Backend utilizando o comando `npm install` na pasta raiz do backend;
- Com o comando `npm run db:drop` você vai dropar o banco de dados, ou seja, excluir o banco do seu servidor SQL;
- Utilizando o comando `npm start` você pode criar o banco de dados, executando migrations e seeders, populando seu banco de dados e subindo a API para utilização.
- Execuntando o comando `npm run debug` você executa a aplicação com o **nodemon** podendo fazer alterações na api e continuar a execução do mesmo.

⚠️ Para utilizar a API sem execução do Docker (localmente) é necessário configurar o .env.example e ter instalado e configurado o MySQL em sua máquina 

<strong> Endpoints acessíveis</strong><br />
## Orders GET `/orders`

- O endpoint terá a resposta da requisição conforme formato abaixo:
    ```json
    [
        {
            "id": 1,
            "orderNfId": "1605181324132",
            "orderNumber": "18153",
            "orderPath": null,
            "orderFileName": null,
            "orderOriginalName": null,
            "emissionDate": "2020-10-30T11:00:00-03:00",
            "pdfFile": null,
            "emitedTo": "22843980000127",
            "nNf": "18153",
            "CTE": "",
            "value": "198450",
            "cnpjId": 1,
            "userId": 1,
            "buyerId": 1,
            "providerId": 1,
            "orderStatusBuyer": "0",
            "orderStatusProvider": "0",
            "deliveryReceipt": null,
            "cargoPackingList": null,
            "deliveryCtrc": null,
            "createdAt": "2020-10-30T17:54:18.000Z",
            "updatedAt": "2020-10-30T17:54:18.000Z",
            "buyer": {
                "id": 1,
                "name": "SACADO 001",
                "tradingName": "SACADO 001 LTDA",
                "cashforceTax": "0",
                "responsibleName": null,
                "responsibleEmail": null,
                "responsiblePosition": null,
                "responsiblePhone": null,
                "responsibleMobile": null,
                "website": null,
                "postalCode": null,
                "address": null,
                "number": null,
                "complement": null,
                "neighborhood": null,
                "city": null,
                "state": null,
                "phoneNumber": null,
                "situation": null,
                "situationDate": null,
                "cnpjId": 1,
                "confirm": 1,
                "email": null,
                "updatedAt": "2020-10-29T21:20:34.000Z"
            },
            "provider": {
                "id": 1,
                "name": "CEDENTE 002",
                "tradingName": "CEDENTE 002 LTDA",
                "cashforceTax": null,
                "responsibleName": null,
                "responsibleEmail": null,
                "responsiblePosition": null,
                "responsiblePhone": null,
                "responsibleMobile": null,
                "website": null,
                "postalCode": null,
                "address": null,
                "number": null,
                "complement": null,
                "neighborhood": null,
                "city": null,
                "state": null,
                "bank": null,
                "bankAgency": null,
                "account": null,
                "documents": null,
                "phoneNumber": null,
                "situation": null,
                "situationDate": null,
                "cnpjId": 2,
                "email": null,
                "updatedAt": "2020-10-29T21:22:22.000Z"
            }
        },
        /*...*/
    ]
    ```

## Orders POST `orders`
- O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "orderNfId": "1231551",
        "orderNumber": "23235",
        "emissionDate": "2020-10-30T11:00:00-03:00",
        "emitedTo": "22521170000986",
        "nNf": "23235",
        "CTE": "",
        "value": "131798",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "2",
        "orderStatusProvider": "8"
    }
    ```

## Orders GET `orders/id`
- O endpoint terá a resposta da requisição conforme formato abaixo:
    ```json
    {
        "id": 3,
        "orderNfId": "1605181324130",
        "orderNumber": "18184",
        "orderPath": null,
        "orderFileName": null,
        "orderOriginalName": null,
        "emissionDate": "2020-11-10",
        "pdfFile": null,
        "emitedTo": "00418477002640",
        "nNf": "18184",
        "CTE": "",
        "value": "222795",
        "cnpjId": 1,
        "userId": 1,
        "buyerId": 1,
        "providerId": 1,
        "orderStatusBuyer": "7",
        "orderStatusProvider": "3",
        "deliveryReceipt": null,
        "cargoPackingList": null,
        "deliveryCtrc": null,
        "createdAt": "2020-11-12T11:42:06.000Z",
        "updatedAt": "2020-11-18T12:22:14.000Z",
        "buyer": {
            "id": 1,
            "name": "SACADO 001",
            "tradingName": "SACADO 001 LTDA",
            "cashforceTax": "0",
            "responsibleName": null,
            "responsibleEmail": null,
            "responsiblePosition": null,
            "responsiblePhone": null,
            "responsibleMobile": null,
            "website": null,
            "postalCode": null,
            "address": null,
            "number": null,
            "complement": null,
            "neighborhood": null,
            "city": null,
            "state": null,
            "phoneNumber": null,
            "situation": null,
            "situationDate": null,
            "cnpjId": 1,
            "confirm": 1,
            "email": null,
            "updatedAt": "2020-10-29T21:20:34.000Z"
        },
        "provider": {
            "id": 1,
            "name": "CEDENTE 002",
            "tradingName": "CEDENTE 002 LTDA",
            "cashforceTax": null,
            "responsibleName": null,
            "responsibleEmail": null,
            "responsiblePosition": null,
            "responsiblePhone": null,
            "responsibleMobile": null,
            "website": null,
            "postalCode": null,
            "address": null,
            "number": null,
            "complement": null,
            "neighborhood": null,
            "city": null,
            "state": null,
            "bank": null,
            "bankAgency": null,
            "account": null,
            "documents": null,
            "phoneNumber": null,
            "situation": null,
            "situationDate": null,
            "cnpjId": 2,
            "email": null,
            "updatedAt": "2020-10-29T21:22:22.000Z"
        }
    }
    ```

## Orders PUT `orders/id`
- O corpo da requisição deve seguir o formato abaixo:
    ```json
    {
        "orderStatusBuyer": "1",
        "orderStatusProvider": "5"
    }
    ```

## Orders DELETE `orders/id`
- O endpoint não devolve nada em seu corpo, mas retorna status 204 


Projeto Desenvolvido por [João Antônio](https://github.com/JoaopSilvaa)

