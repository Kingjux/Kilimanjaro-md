const Unblock = async(client, m, Owner, NotOwner, text) => {

if (!Owner) return m.reply(NotOwner);
if (!m.quoted) return m.reply("Tag a user to block");

 let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' 

// if (users == "255625774553@s.whatsapp.net") return;

const parts = users.split('@')[0];
 await client.updateBlockStatus(users, 'unblock'); 
 m.reply (`${parts} has been unblocked, eh?`); 
 } 


export default Unblock;
