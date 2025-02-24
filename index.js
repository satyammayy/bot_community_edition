const { create } = require('@open-wa/wa-automate');
const express = require("express")
function start(client) {

  //Participants add

  client.onGlobalParticipantsChanged(async (event) => {
    const host = (await client.getHostNumber()) + '@c.us';
    if (event.action === 'add' && event.who !== host){
      client.sendTextWithMentions(
        event.chat,
        `✨Hello, Welcome to the group @${event.who.replace(
          '@c.us ✨',
          ''
        )} \n\n✨ You can also access these notes (materials) from the website too! \n\n sirloya.xyz `
      );
  }
  });

  //Participant deleted a message

client.onMessageDeleted(async (message) => {
client.sendText(message.from, `Humans make mistakes! \n\n So you don't need to delete it ! HEHE`);
});

  //On Message Recieved from Participants

  client.onMessage(async (message) => {
   const command = (message.body || "").toLowerCase();
   if (command.includes("menu")){ 
    client.sendPtt(message.from, 'https://github.com/thegodofeverything/bot_community_edition/raw/main/resources/instructions-entry.mp3');             
  await client.reply(message.from, ` \n\n✨ *Rules of the group: \n\n *1) No Introduction*\n _feels like meet up hub to me_ \n *2) Studies related chat is encouraged*\n *3) Anytype of fight or dispute is completely your problem and the group shall not hold responsibilty for it!*\n*4) If you dont behave you will be removed immediately*  \n\n ✨Material pamba singdo wjik fw hwjik fw collect twbdo  makha da leire \n\n  Type materials to pop up the menu or select the button below ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons✨ \n  `, message.id);
  await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button1', text: 'Biology' },
            { id: 'button2', text: 'Physics' },
            { id: 'button3', text:'Chemistry'},
          ],
          'Materials',
          '-Community Bot'
        );
  await client.sendButtons(
          message.from,
          'Fajana Paro ko!',
          [
            { id: 'button1', text: 'English' },
            { id: 'button2', text: 'Manipuri' },
            { id: 'button3', text: 'Alt-English'},
          ],
          'Materials',
          '-Community Bot'
        );

      }  
        
        
   if (command.includes("biology")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context Biology',
              rows: [
                {
                  title: 'gope-chapter2',
                  description: 'Sexual Reproduction In Flowering Plants',
                  rowId: 'row',
                },
                {
                  title: 'gope-chapter3',
                  description: 'Human Reproduction',
                  rowId: 'row',
                },
                {
                  title: 'gope-chapter4',
                  description: 'Reproductive Health',
                  rowId: 'row',
                },
                {
                  title: 'gope-chapter6',
                  description: 'Molecular Basis of Inheritance',
                  rowId: 'row',
                },
                {
                  title: 'prev-year-bio',
                  description: 'Previous year questions by sir gope',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'BIOLOGY'
        );
   }

     if (command.includes("gope-chapter2")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1w0aVl5evhawVFWAcDfwWldphXcggjA3L&xport=download', 'gope-chapter2.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }  
   
       
     if (command.includes("gope-chapter3")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1adqPrMr49kg1z-Xv1VRQcdeCJ3Kuf54y&export=download' , 'gope-chapter3.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }
   
   
     if (command.includes("gope-chapter4")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1tasAIZvpKKrQQCygupc18W3au0gpzPkS&export=download' , 'gope-chapter4.pdf', 'check this pdf', null, true)
               client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }
    
     if (command.includes("gope-chapter6")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1TzdBDx5X18jpYME5MTN3kNwuBhUM8lVO&export=download' , 'gope-chapter6.pdf', 'check this pdf', null, true)
               client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
   }
    
       
     if (command.includes("prev-year-bio")){

   client.reply(message.from, ' *sending*......it could take one or two minutes to send. ', message.id);
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1aCwgBQja5ekFVobjqSCjpT3H51yM-GcQ&export=download' , 'prev-year-bio.pdf', 'check this pdf', null, true)
   }
   
   if (command.includes("physics")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context Physics',
              rows: [
                {
                  title: 'jina-chapter1',
                  description: 'Electric charges and fields',
                  rowId: 'row',
                },
                {
                  title: 'bishwanath-chapter3',
                  description: 'Current Eletricity',
                  rowId: 'row',
                },
                {
                  title: 'bhogendro-chapter4',
                  description: 'Moving charges and Magnetism',
                  rowId: 'row',
                },
                {
                  title: 'bijayakaran-chapter6',
                  description: 'Electromagnetic Induction',
                  rowId: 'row',
                },
                {
                  title: 'bishwanath-chapter15',
                  description: 'Communication Systems',
                  rowId: 'row',
                },
                {
                  title: 'prev-year-phy',
                  description: 'Previous year questions by sir david',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'PHYSICS'
        );
   }
    // https://drive.google.com/file/d/12Qh-P-_MY-A8-qvwh3TABdbs057ECxHW/view?usp=sharing
    if (command.includes("jina-chapter1")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=12Qh-P-_MY-A8-qvwh3TABdbs057ECxHW&export=download' , 'jina-chapter1.pdf', 'check this pdf', null, true)

   } 
 // https://drive.google.com/file/d/1Y9riaL-aiG2lppPTahghVEs5VNQVbH3Q/view?usp=sharing
    if (command.includes("bishwanath-chapter3")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Y9riaL-aiG2lppPTahghVEs5VNQVbH3Q&export=download' , 'bishwanath-chapter3.pdf', 'check this pdf', null, true)

   } 
//https://drive.google.com/file/d/1BTUezDDaAJnc-mIF3Cj-ImtpF4mUtlRK/view?usp=sharing
//https://drive.google.com/file/d/1Hdh5SR-d4-DZIrVbUVNi-ngtLkVyBcbk/view?usp=sharing
//https://drive.google.com/file/d/1V8YWOgS8z4EwCigiXy0CG6VDOVY5ecm2/view?usp=sharing
    if (command.includes("bhogendro-chapter4")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1BTUezDDaAJnc-mIF3Cj-ImtpF4mUtlRK&export=download' , 'bhogendro-chapter4[1st-part].pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Hdh5SR-d4-DZIrVbUVNi-ngtLkVyBcbk&export=download' , 'bhogendro-chapter4[2nd-part].pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1V8YWOgS8z4EwCigiXy0CG6VDOVY5ecm2&export=download' , 'bhogendro-chapter4[3rd-part].pdf', 'check this pdf', null, true)

   } 
//https://drive.google.com/file/d/13CchMse307u2NyYg-X7pZwduzKtgCp97/view?usp=sharing
//https://drive.google.com/file/d/1zq9y2yR3LylLaAHtH6Wd1Aa-J-7D-YAw/view?usp=sharing
    if (command.includes("bijayakaran-chapter6")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=13CchMse307u2NyYg-X7pZwduzKtgCp97&export=download' , 'bijayakaran-chapter6[1st-part].pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1zq9y2yR3LylLaAHtH6Wd1Aa-J-7D-YAw&export=download' , 'bijayakaran-chapter6[2nd-part].pdf', 'check this pdf', null, true)

   } 

//https://drive.google.com/file/d/1TQLWd2g2ClrIq93YISWzZzDzvOipMoGh/view?usp=sharing
    if (command.includes("bishwanath-chapter15")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1TQLWd2g2ClrIq93YISWzZzDzvOipMoGh&export=download' , 'bishwanath-chapter15.pdf', 'check this pdf', null, true)

   } 
//https://drive.google.com/file/d/1387w5I5xuUixDOCJ_AUAduivRbIrA7Kn/view?usp=sharing
//https://drive.google.com/file/d/1uwNhwgBBKkZhujfelONm4pytQUHKryY9/view?usp=sharing
    if (command.includes("prev-year-phy")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1387w5I5xuUixDOCJ_AUAduivRbIrA7Kn&export=download' , 'prev-year-phy[Sir David]1.pdf', 'check this pdf', null, true)
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1uwNhwgBBKkZhujfelONm4pytQUHKryY9&export=download' , 'prev-year-phy[Sir David]2.pdf', 'check this pdf', null, true)

   }  

   if (command.includes("chemistry")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context Chemistry',
              rows: [
                {
                  title: 'surjit-chapter3',
                  description: 'Electrochemistry',
                  rowId: 'row',
                },
                {
                  title: 'surjit-chapter11',
                  description: 'Alcohol Phenol and Ether',
                  rowId: 'row',
                },
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'CHEMISTRY'
        );
   }
   //https://drive.google.com/file/d/1Xsm3cssQ1cc2CVU7RWXKsFHuubf57cki/view?usp=sharing

   if (command.includes("surjit-chapter3")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Xsm3cssQ1cc2CVU7RWXKsFHuubf57cki&export=download' , 'surjit-chapter3.pdf', 'check this pdf', null, true)

   }  

   if (command.includes("surjit-chapter11")){
     client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
     client.sendFile(message.from, 'https://drive.google.com/uc?id=13pnePj3xJ5SbAnyGE0Jh9_SeYnbpcFZU&export=download' , 'surjit-chapter11.pdf', 'check this pdf', null, true)
   }
  
   if (command.includes("english")){
    client.sendListMessage(
          message.from,
          [
            {
              title: 'Context English',
              rows: [
                {
                  title: 'tony-love',
                  description: 'Love Across Salt Desert by Sir tony',
                  rowId: 'row',
                },
                {
                  title: 'tony-departed',
                  description: 'The Dear Departed by Sir Tony',
                  rowId: 'row',
                },
                {
                  title: 'tony-dimension',
                  description: 'The Fourth Dimension by Sir Tony',
                  rowId: 'row',
                },
                {
                  title: 'tony-youth',
                  description: 'Youh and age by Sir Tony',
                  rowId: 'row',
                },
                {
                  title: 'gojendra-kitemaker',
                  description: 'The kite maker by Sir Gojendra',
                  rowId: 'row',
                },
                {
                  title: 'gojendra-skylark',
                  description: 'The Skylark by Sir Gojendra',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Community Bot',
          'ENGLISH'
        );
   }

   if (command.includes("tony-love")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=12vA9RHaEF104RoRAupomB5aQpY6Ryh70&export=download' , 'love across salt desert[Sir Tony].pdf', 'check this pdf', null, true)

   }     
   if (command.includes("tony-departed")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1hfKerPWfiqpBf1zPivnqc-WzeaxEqfxt&export=download' , 'The dear departed [Sir Tony].pdf', 'check this pdf', null, true)

   }   
   if (command.includes("tony-dimension")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1F5g27wOEBiKeghsq3pV1BrP3shEFkBcg&export=download' , 'The fourth Dimension [Sir Tony].pdf', 'check this pdf', null, true)

   }
   if (command.includes("tony-youth")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Ie-_KvLCId464Ioq9EfwAoTeVt5x4A86&export=download' , 'Youth and Age [Sir Tony].pdf', 'check this pdf', null, true)

   }      
   if (command.includes("gojendra-kitemaker")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1Q4s1V26Spvd8vSrA2T4t5O_D0zQJ6-X7&export=download' , 'The kite Maker [Sir Gojendra].pdf', 'check this pdf', null, true)

   }
   if (command.includes("gojendra-skylark")){
    client.reply(message.from, '*sending* ..... Please wait for one or two minutes' ,message.id);
    client.sendFile(message.from, 'https://drive.google.com/uc?id=1c7NslQvmBrQ8NzB-_Cncq7cB4RFBcU8Y&export=download' , 'The Skylark [Sir Gojendra].pdf', 'check this pdf', null, true)

   }
   
   



   // i dont have it
   if (command.includes("manipuri")){
    client.reply(message.from, '_Opps not yet added , no resources_' ,message.id);
   } 
   if (command.includes("alt-english")){
    client.reply(message.from, '_Opps not yet added , no resources_' ,message.id);
   } 
   
   


    try{
    let {body, caption} = message
    const content = caption || body || ''
    const command = content.toLowerCase().split(' ')[0] || ''
    console.log(`Body: ${body}\n\nCaption: ${caption}\n\nContent: ${content}\n\nCommand: ${command}`)
}catch(error){
    console.log(`Error:\n${error}`)
}



  });
}


create({
  licenseKey: "EE0DE51F-F8EB4F44-83289BC8-9B4A53C9",
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  browserRevision: '737027',
}).then((client) => start(client));


const app = express();

app.get('/', (req, res) => res.status(200).send('xd'));
app.listen(process.env.PORT || 80);


