import Heroku from "heroku-client";

const Allvar = async(client, m, text, Owner, NotOwner, herokuapi, appname) => {

if (!Owner) return m.reply(NotOwner);

const heroku = new Heroku({
                                token: herokuapi,
                        });

let baseURI = "/apps/" + appname;

let mok = await heroku.get(baseURI+'/config-vars')

let mf = '*Current Heroku Variables*\n\n'
for (let kilimanjaro in mok) {
mf+= '📝 *'+kilimanjaro+'* '+'= '+mok[kilimanjaro]+'\n'
}
 m.reply(mf)

}

export default Allvar;
