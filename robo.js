// leitor de qr code
const qrcode = require('qrcode-terminal');
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
})();

const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js'); // Mudança Buttons
const client = new Client();
// serviço de leitura do qr code
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});
// apos isso ele diz que foi tudo certo
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});
// E inicializa tudo 
client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms)); // Função que usamos para criar o delay entre uma ação e outra

// Funil

client.on('message', async msg => {

    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {

        const chat = await msg.getChat();

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        const contact = await msg.getContact(); //Pegando o contato
        const name = contact.pushname; //Pegando o nome do contato
        await client.sendMessage(msg.from,'Olá! '+ name.split(" ")[0] + ', sou o assistente virtual da empresa LFS Soluções em Engenharia. Como posso ajudá-lo hoje? Por favor, digite uma das opções abaixo:\n\n1 - Serviços disponíveis\n2 - Faixa de valores\n3 - Benefícios\n4 - Como contratar\n5 - Parceiros\n6 - Outras perguntas'); //Primeira mensagem de texto
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(5000); //Delay de 5 segundos
    
        //await client.sendMessage(msg.from, 'Irei te enviar um áudio');

        //await delay(3000); //Delay de 3 segundos
        //await chat.sendStateRecording(); //Simulando audio gravando
        //await delay(3000); //Delay de 3 segundos
        //const audio1 = MessageMedia.fromFilePath('./audio1.ogg'); // Arquivo de audio em ogg gravado, pode ser .opus também
        //await client.sendMessage(msg.from, audio1, {sendAudioAsVoice: true}); // enviando o audio1

        
        //Enviar vídeo:
        
        //const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
        //await client.sendMessage(msg.from, video1, {caption: ''});

        //Enviar pdf:
        
       // const documento1 = MessageMedia.fromFilePath('./Pdf.pdf'); // pdf para ser enviado
       // await client.sendMessage(msg.from, documento1); //Enviando o pdf


    }




    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        //const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
        //await client.sendMessage(msg.from, video1, {caption: ''});

        const documento1 = MessageMedia.fromFilePath('./Pdf.pdf'); // pdf para ser enviado
        await client.sendMessage(msg.from, documento1); //Enviando o pdf


        const imagem1 = MessageMedia.fromFilePath('./imagem1.png'); // arquivo em imagem, ´pode ser jpeg também
        await client.sendMessage(msg.from, imagem1, {caption: ''}); //Enviando a imagem 

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nosso serviço incluem:\nChatbot para WhatsApp\nAplicativos para Android, iOS e Web\nProjetos elétricos e de automação\nSmartHouse');

        //await delay(3000); //delay de 3 segundos
        //await chat.sendStateTyping(); // Simulando Digitação
        //await delay(3000);
        //await client.sendMessage(msg.from, 'COMO FUNCIONA?\nÉ muito simples.\n\n1º Passo\nFaça seu cadastro e escolha o plano que desejar.\n\n2º Passo\nApós efetuar o pagamento do plano escolhido você já terá acesso a nossa área exclusiva para começar seu atendimento na mesma hora.\n\n3º Passo\nSempre que precisar');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Confira mais no site: https://www.linkedin.com/in/luansampaio/');


    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

       // const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
        //await client.sendMessage(msg.from, video1, {caption: ''});

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, '*Plano Individual:* R$22,50 por mês.\n\n*Plano Família:* R$39,90 por mês.\n\n*Plano TOP Individual:* R$42,50 por mês\n\n*Plano TOP Família:* R$79,90 por mês');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Peça um orçamento gratuito em: https://site.com');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


       // const video1 = MessageMedia.fromFilePath('./video1.mp4'); //vídeo 01
       // await client.sendMessage(msg.from, video1, {caption: ''});

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Atendimento 24h de segunda a segunda.\n\nVia WhatsApp ou telefone');
        
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://google.com');

    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Você pode aderir aos nossos planos diretamente pelo nosso site ou pelo WhatsApp.\n\nApós a adesão, você terá acesso imediato');


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Link para cadastro: https://google.com');


    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Já conhece a Corike - Arquitetura e Interiores? Confira e entre em contato: https://www.instagram.com/corike.arq/');


    }
    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Se você tiver outras dúvidas ou precisar de mais informações, por favor, fale aqui nesse whatsapp ou visite nosso site: https://site.com ');


    }








});
