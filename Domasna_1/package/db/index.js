    //povikuvanje na paketite

const mongoose = require ("mongoose");
const dotenv = require("dotenv");

    //konfiguriranje na dotEnv i vmetnuvanje na config.env- da del od process.env objektot

dotenv.config({ path: `${__dirname}/../../config.env` });

    //dinamicko zamenuvanje na password na vrednosta DATABASE so nova vrednost dinamicka od DATABASE_PASSWORD

const DB = process.env.DATABASE.replace(
"<PASSWORD>",
process.env.DATABASE_PASSWORD
);

    //Konektiranje so Mongoose

exports.init = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("DataBaza uspesno konektirana");
    } catch (err) {
        console.error(err);
    }
};


