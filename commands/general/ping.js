const Ping = async(client, m, kilimanjarospeed, sendReact) => {

await sendReact("✈️");

const Dreaded = await client.sendMessage(m.chat, { text: 'Checking my speed. . .' }, {quoted: m});

await client.relayMessage(m.chat, {
      protocolMessage: {
        key: Dreaded.key,
        type: 14,
        editedMessage: {
          conversation: `${kilimanjarospeed.toFixed(4)}ms`
        }
      }
    }, {});
     await sendReact("🤖");

}

export default Ping;
