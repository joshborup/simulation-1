module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const {bin, name, image, price, shelf} = req.body

        db.create_item([bin, name, image, price, shelf]).then(() => {
            res.status(200).send();
        }).catch( (error) => {
            console.log('error')
            res.status(500).send();
        })
    },
    readOne: (req, res) => {
        const db = req.app.get('db');
        db.read_bin(req.params.id).then(product => {
            res.status(200).send(product)
        }).catch(error => {
            console.log(error)
            res.status(500).send();
        })
    },
    readALL: (req, res) => {
        const db = req.app.get('db');
        db.read_all_bins(req.params.id).then(product => {
            res.status(200).send(product)
        }).catch(error => {
            console.log(error)
            res.status(500).send();
        })
    },
    update:(req, res) => {
        const db = req.app.get('db');
        db.update_item([req.params.id, req.query.name, req.query.price ]).then(() => {
            res.status(200).send();
        }).catch((error) => {
            console.log(error)
            res.status(500).send();
        })
    },
    delete:(req, res) => {
        const db = req.app.get('db');
        db.delete_item(req.params.id).then(() => {
            res.status(200).send();
        }).catch( (error) => {
            console.log(error)
            res.status(500).send();
        })
    },
}