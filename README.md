# Meetup-para-Smarkio

### Tema: Redux & Flux Implementations 
---
### **Instruções para executar o projeto:** 
---
#### **1) Crie um diretório para clonar o projeto:**
Um exemplo seria criar um diretório `/redux-smarkio`:

```
mkdir redux-smarkio
```
---
#### **2) Clone o projeto no diretório criado:**
Basta rodar a diretiva `git clone` abaixo:

    --> Execute o comando no path: /redux-smarkio/
    cd redux-smarkio
    git clone https://github.com/GuilhermeBorges3Ddev/Meetup-para-Smarkio.git
---
#### **3) Baixe as dependências para poder rodar o projeto:**
Repare que foi criado o diretório `Meetup-para-Smarkio/`, após a clonagem.  
Entre então no novo diretório para instalar as dependências:
```
cd Meetup-para-Smarkio/
yarn
----> Observação: ao invés de 'yarn' pode-se usar 'npm install'
``` 
---
#### **4) Renderize o frontend:**
Abra uma nova aba do seu terminal acessando o mesmo caminho `Meetup-para-Smarkio/`, executando assim o seguinte comando:

    yarn start
    --> Observação: aqui também pode-se optar por usar 'npm start'

##### Em caso de sucesso você verá o seguinte retorno no terminal:

<img src="https://user-images.githubusercontent.com/19985305/68077884-92c28500-fdaa-11e9-92d6-d9b687f0b7b3.png" alt="Your image title" width="100%" height="6%"/>

##### Com esta mensagem de sucesso basta abrir o link gerado pelo **yarn start** em seu navegador; você logo verá uma área para postar sua sugestão à Smarkio, tanto o cadastro de uma sugestão, sua edição ou deleção utiliza Redux. Cada ação possível na interface abaixo não faz uso de backend, para salientar o poder desta biblioteca apresentada:

<img src="https://user-images.githubusercontent.com/19985305/77496584-0df40880-6e2a-11ea-80a4-0848dd5cc9f7.png" width="100%" height="11%"/>

##### Para o caso do frontend não rodar por algum motivo, verifique se o computador possui o pacote `create-react-app` instalado; caso não haja a instalação basta rodar um dos dois comandos abaixo: 
    npm install -g create-react-app
    yarn global add create-react-app
---
 
***

::: 
***(c) Código e documentação**: Guilherme S. Borges*
:::

